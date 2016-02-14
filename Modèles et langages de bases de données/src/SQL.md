# Structured Query Language (SQL) : Manipulation des données

Dans ce chapitre, nous aborderons des notions sur le **Structured Query Language** ou **SQL**.

## Objectifs du SQL

Idéalement, un langage de bases de données devrait permettre de

- créer la base de données et les structures des relations
- faire des opérations de gestion de données telles que l'insertion, la modification and
la supression de données des relations
- faire des requêtes à la fois simples et complexes

Le langage doit être simple; sa syntaxe et sa structure de commandes doivent être simples à apprendre.
Le langage doit aussi être portable, c'est-à-dire qu'il doit être conforme à des standards pour que nous
puissions utiliser les mêmes commandes d'un système de gestion de bases de données à un autre.

## Informations sur le SQL

Le SQL est un **langage orienté transformation** ce qui veut dire que c'est un langage qui a été
développé pour utiliser des relations pour transformer des entrées en des sorties demandées. Le SQL
possède deux parties majeurs:

- Un **langage de définition des données (DDL)** pour définir la structure de la base de données et
contrôler l'accès aux données.
- Un **langage de manipulation des données (DML)** pour aller chercher et mettre à jour les données.

Le SQL est un langage qui n'est pas procédural. Nous spécifions les données dont nous avons besoin
plutôt que comment aller les chercher. Autrement dit, nous n'avons pas à nous occuper des méthodes
d'accès aux données: SQL le fait pour nous.

### Terminalogie

Les standards ISO du SQL n'utilisent pas les termes formels *relations*, *attributs* et *tuples*. Ils
utilisent plutôt les mots *tables*, *colonnes* et *rangées*.

## Écrire des commandes SQL

Une déclaration SQL consiste de **mots réservés** et **de mots définis par l'utilisateur**.
Les mots réservés font partis du langage et ont un sens fixes alors que les mots définis par
l'utilisateur font références à des objets de la base de données comme les tables, colonnes, vues,
indexes, etc. Les déclarations SQL ne sont pas sensibles à la casse. La seule exception est que les
caractères litéraux doivent être écrits comme ils apparaissent dans la base de données.

### Convention de code

La convention du cours utilise en partie la **forme de Backus Naur (BNF)**. La convention que nous allons
utiliser est donc la suivante:

- les mots réservés sont écrits en minuscules;
- les mots définis par l'utilisateur sont en majuscules;
- la bar vertical ($|$) indique un choix parmi des alternatives;
- les accolades indiquent un élément requis;
- les crochets indiquent un élément optionnel;
- les points de suspension indique une répétition optionnelle d'un objet zéro ou plusieurs fois.

### Manipulation des données

Cette section traite des différentes expressions du DML du SQL:

```SQL
    select -- pour aller chercher des données dans la base de données
    insert -- pour insérer des données dans une table
    update -- pour mettre à jour des données dans une table
    delete -- pour effacer des données d'une table
```

Pour les explications des expressions, nous allons utiliser les tables suivantes:

-----------         ----------------------------------------------------------------------------------------
Branch              (**Branch**, street, city, postcode)
Staff               (**staffNo**, fName, lName, position, sex, DOB, salary, branchNo)
PropertyForRent     (**propertyNo**, street, city, postcode, type, rooms, rent, 
                    ownerNo, staffNo, branchNo)
Client              (**clientNo**, fName, lName, telNo, prefType, maxRent, eMail)
PrivateOwner        (**ownerNo**, fName, lName, address, telNo, eMail, password)
Viewing             (**clientNo**, propertyNo, viewDate, comment)
-----------         ----------------------------------------------------------------------------------------

Table: Cas d'étude *DreamHome*

### Litéraux

Les litéraux sont des constantes qui sont utilisées dans des expressions SQL. Les chaines de caractères
litérales doivent être entourées de guillemets simples et les litéraux numériques ne doivent pas avoir
de guillemets. 

Un exemple d'insertion de litéraux dans une table pourrait ressembler à

```SQL
    insert into PropertyForRent(propertyNo, street, city, postcode, type, 
                                rooms, rent, ownerNo, staffNo, branchNo)
    values ('PA14', '16 Holhead', 'Aberdeen', 'AB7 5SU', 'House', 6, 650.00,
            'CO46', 'SA9', 'B007');
```

### SELECT

L'expression `select` est utilisé pour aller chercher et afficher des données d'une ou plusieurs tables
de bases de données. Elle permet de faire l'équivalent des opérations de *sélection*, *projecture* et de
*jointure* de l'algèbre relationnelle.

L'expression `select` a la forme suivante:

```SQL
    select      [distinct | all] {* | [columnExpression [as newName]] [,...]}
    from        TableName [alias] [,...]
    [where      condition]
    [group by   columnList] [having condition]
    [order by   columnList]
```

où chacune des expressions a la signification suivante:

```SQL
    from        -- Table(s) à utiliser
    where       -- Filtre rangées selon une condition
    group by    -- Forme des groupes de rangées avec des mêmes valeurs de colonnes
    having      -- Filtre les groupes selon une condition
    select      -- Spécifie les colonnes qui vont apparaître dans la sortie
    order by    -- Spécifie l'ordre d'affichage
```

Il est important de retenir que l'ordre des clauses de l'expression `select` ne peut être changé
et que les deux seules clauses obligatoires sont les deux premières: `select` et `from`. Les autres
clauses sont optionnelles. Le résultat d'une expression `select` est une autre table.

#### Exemples d'utilisation du SELECT

Dans tous les exemples suivants, nous allons nous servir de la table *DreamHome*.

##### Aller chercher toutes les colonnes et rangées

Nous voulons aller chercher toutes les informations sur le personnel. 

Comme il n'y a pas de conditions, nous n'avons pas besoin d'un `where`. 
Nous pouvons donc écrire cette requête comme

```SQL
    select staffNo, fName, lName, position, sex, DOB, salary, branchNo
    from Staff;
```

Comme nous sélectionnons toutes les colonnes, nous pourrions réécrire cette requête comme

```SQL
    select *
    from Staff;
```

Nous obtiendrons la table suivante:

staffNo  fName  lName  position      sex  DOB        salary      branchNo
-------  -----  -----  --------      ---  --------   --------    ---------
SL21     John   White  Manager       M    1-Oct-45   30000.00    B005
SG37     Ann    Beech  Assistant     F    10-Nov-60  12000.00    B003
SG14     David  Ford   Supervisor    M    24-Mar-58  18000.00    B003
SA9      Mary   Howe   Assistant     F    19-Feb-70   9000.00    B007
SG5      Susan  Brand  Manager       F    3-Jun-40   24000.00    B003
SL41     Julie  Lee    Assistant     F    13-Jun-65   9000.00    B005
-------  -----  -----  --------      ---  --------   --------    ---------

Table: Résultat de la requête

##### Aller chercher des colonnes spécifiques et toutes les rangées

On veut la liste des salaires de tous les employés en montrant seulement les numéros d'employés,
les prénoms, les noms de famille et les détails du salaire. 

Cette requête serait écrite comme

```SQL
    select staffNo, fName, lName, salary
    from Staff;
```

Ce qui nous donnerait la table suivante:

staffNo       fName        lName        salary
-------       ------       ------       --------
SL21          John         White        30000.00
SG37          Ann          Beech        12000.00
SG14          David        Ford         18000.00
SA9           Mary         Howe          9000.00
SG5           Susan        Brand        24000.00
SL41          Julie        Lee           9000.00
-------       ------       ------       --------

Table: Résultat de la requête

##### Utiliser DISTINCT

Lorsqu'on fait un `select` sur une table, les copies sont conservés. Le mot clé `distinct`
permet d'éliminer les copies. Par exemple,

```SQL
    select distinct propertyNo
    from Viewing;
```

va seulement retourner un seul numéro de propriété par copie.

##### Champs calculés

Nous voulons avoir la liste de tous les salaires mensuels de tous les employés, montrer 
les numéros d'employé, les prénoms, les noms de famille et les détails des salaires.

Il est possible d'ajouter des opérations arithmétiques à des expressions SQL. Ainsi, pour construire
la requête demandée, nous pourrions écrire

```SQL
    select staffNo, fName, lName, salary/12
    from Staff;
```

ou, avec un alias,

```SQL
    select staffNo, fName, lName, salary/12 as monthlySalary
    from Staff;
```

#### Sélection de rangées (WHERE)

Avec l'expression `where`, nous pouvons sélectionner des rangées spécifiques.
Pour ce faire, nous utilisons le mot clé `where` suivi d'un prédicat. Les prédicats de base sont
les suivants:

- *Comparaison*: Compare la valeur d'une expression avec la valeur d'une autre expression.
- *Recherche d'écart*: Teste si la valeur d'une expression se retrouve dans une certaine plage de valeurs.
- *Appartenance à un ensemble*: Teste si la valeur d'une expression est égale à celle d'un ensemble de valeurs.
- *Correspondance à un masque*: Teste si une chaîne de caractères correspond à un modèle spécifique.
- *Null*: Teste si la colonne a une valeur nulle (inconnue). 

Les opérateurs de comparaison suivants sont disponibles dans le langage SQL:

```
    =       égal
    <>      pas égale
    <       plus petit que
    <=      plus petit ou égal
    >       plus grand que
    >=      plus grand ou égal
```

Il y aussi les opérateurs logiques `AND`, `OR` et `NOT` qui sont disponibles.
Les prioriétés des opérations sont les suivantes:

- Une expression est évaluée de gauche à droite.
- Les sous-expressions entre parenthèses sont évaluées en premier.
- Les `NOT` sont évalués avant les `AND` et les `OR`.
- Les `AND` sont évalués avant les `OR`.

##### Exemples d'utilisation du WHERE

Dans cette section, nous allons voir des exemples d'utilisation de la clause `where`.

###### Prédicat de comparaison

On souhaite avoir la liste de tous les employés avec un salaire plus grand que 10000\$.

Nous pouvons donc utiliser la clause `where` de la manière suivante:

```SQL
    select staffNo, fName, lName, position, salary
    from Staff
    where salary > 10000;
```

Ce bout de code va créer une table dont les rangées correspondent aux rangées de la table initiale 
dont le salaire des employés est plus grand que 10000\$.

###### Prédicat de comparaison composé

On souhaite avoir la liste de toutes les adresses des filiales de Londres et Glasgow.

Nous pouvons donc utiliser la clause `where` de la manière suivante:

```SQL
    select *
    from Branch
    where city = 'London' or city = 'Glasgow';
```

Cela va créer une table dont les rangées correspondent aux rangées de la table initiale où
la ville était soit Londres ou Glasgow.

###### Prédicat de recherche d'écart (BETWEEN/NOT BETWEEN)

On souhaite avoir tous les employés dont le salaire se situe entre 20000\$ et 30000\$.

Nous pouvons donc utiliser la clause `where` de la manière suivante:

```SQL
    select staffNo, fName, lName, position, salary
    from Staff
    where salary between 20000 and 30000;
```

Cela va créer une table dont les rangées correspondent aux rangées de la table initiale dont
le salaire des employés était entre 20000 et 30000.

Nous aurions aussi pu écrire

```SQL
    select staffNo, fName, lName, position, salary
    from Staff
    where salary >= 20000 and salary <= 30000;
```

###### Prédicat d'appartenance à un ensemble (IN/NOT IN)

On souhaite avoir tous les employés qui sont des managers et des superviseurs.

Nous pouvons donc utiliser la clause `where` de la manière suivante:

```SQL
    select staffNo, fName, lName, position
    from Staff
    where position in ('Manager', 'Supervisor');
```

Cela va créer une table dont les rangées correspondent aux rangées de la table initiale dans
lesquelles le poste des employés était soit un manager ou un superviseur.

Nous aurions aussi pu écrire

```SQL
    select staffNo, fName, lName, position
    from Staff
    where position = 'Manager' or position = 'Supervisor';
```

###### Prédicat de correspondance à un masque (LIKE/NOT LIKE)

Nous voulons trouver tous les propriétaires qui ont la chaîne de caractères 'Glasgow' dans
leur adresse.

Le SQL possède deux symboles pour trouver des correspondances entre des chaînes de caractères:

- Le caractère % représente une séquence de zéro caractère ou plus.
- Le caractère _ représente n'importe quel caractère.

Tous les autres caractères se représentent eux-mêmes.

Ainsi, notre requête pour résoudre notre problème serait la suivante:

```SQL
    select ownerNo, fName, lName, address, telNo
    from PrivateOwner
    where address like '%Glasgow%'; -- N'importe quelle chaine, tant qu'elle contient 'Glasgow'
```

###### Prédicat de recherche de NULL (IS NULL/IS NOT NULL)

Nous voulons avoir les détails sur toutes les propriétés PG4 où un commentaire n'a pas été fourni.

Nous pouvons donc utiliser la clause de la manière suivante:

```SQL
    select clientNo, viewDate
    from Viewing
    where propertyNo = 'PG4' and comment is null;
```

#### Trier les résultats (ORDER BY)

La clause `ORDER BY` permet de classer des éléments selon un certain ordre. La clause `ORDER BY` reçoit
en arguments la liste des identifiants des colonnes séparés par des virgules à partir desquels nous 
voulons trier. Il y a deux ordres de tri: en ordre croissant (ASC) et en ordre décroissant (DESC). La 
clause `ORDER BY` doit toujours être la dernière clause d'une expression `SELECT`. Le premier
élément qui apparait dans la clause est appelé la **clé majeure de tri**. C'est elle qui va décider
de l'ordre de tri général. Si les éléments de la colonne sont uniques, un élément de tri de va être
suffisant. Sinon, on peut rajouter des éléments à la clause pour spécifier l'ordre de tri. On appelle
tous les éléments qui apparaissent après la clé majeure de tri des **clés mineures de tri**

##### Exemples d'utilisation du ORDER BY

Dans cette section, nous verrons des exemples d'utilisation de la clause `ORDER BY`.

###### Tri avec une seule colonne

Nous voulons la liste du salaire des employés en ordre décroissant.

Nous pourrions donc écrire la clause suivante:

```SQL
    select staffNo, fName, lName, salary
    from Staff
    order by salary desc;
```

###### Tri avec plusieurs colonnes

Nous voulons avoir la liste des propriétés triées par le type des propriétés.

Nous pourrions écrire la clause suivante:

```SQL
select propertyNo, type, rooms, rent
from PropertyForRent
order by type;
```

On obtiendrait alors la table suivante:

propertyNo           type               rooms              rent
-----------          ---------          --------           -----------
PL94                 Flat               4                  400
PG4                  Flat               3                  350
PG36                 Flat               3                  375
PG16                 Flat               4                  450
PA14                 House              6                  650
PG21                 House              5                  600
-----------          ---------          --------           -----------

Par contre, si on précise une clé mineure de tri avec la clause suivante:

```SQL
select propertyNo, type, rooms, rent
from PropertyForRent
order by type, rent desc;
```

On obtiendrait la table suivante:

propertyNo           type               rooms              rent
-----------          ---------          --------           -----------
PG16                 Flat               4                  450
PL94                 Flat               4                  400
PG36                 Flat               3                  375
PG4                  Flat               3                  350
PA14                 House              6                  650
PG21                 House              5                  600
-----------          ---------          --------           -----------

#### Fonctions SQL d'agrégation

Les fonctions d'agrégation permettent d'effectuer des opérations sur des données. Il existe
5 types de fonctions d'agrégation définies par les standards ISO:

- `COUNT`: Retourne le nombre de valeurs dans la colonne spécifiée.
- `SUM`: Retourne la somme des valeurs dans la colonne spécifiée.
- `AVG`: Retourne la moyenne des valeurs dans la colonne spécifiée.
- `MIN`: Retourne la plus petite valeur dans la colonne spécifiée.
- `MAX`: Retourne la plus grande valeur dans la colonne spécifiée.

Les fonctions `AVG` et `SUM` peuvent seulement être utilisées sur des colonnes numériques.
Toutes les fonctions éliminent les *nulls* avant d'effectuer leurs calculs. Il y a seulement
`COUNT(*)` qui n'élimine pas les *nulls* avant de faire ses opérations. 

Si on veut éliminer les copies, il faut utiliser le mot clé `DISTINCT` avant le nom de la colonne 
dans la fonction. Si on spécifie le mot clé `ALL` devant le nom des colonnes, on indique qu'on 
permet les copies.

##### Exemples d'utilisation des fonctions SQL d'agrégation

Dans cette section, nous verrons des exemples d'utilisation des fonctions SQL d'agrégation.

###### Utilisation de `COUNT(*)`

Nous souhaitons savoir combien de propriétés coûtent plus chères que 350\$ par mois.

Nous allons donc avoir la clause suivante:

```SQL
    select staffNo count(salary)
    from Staff;
```

###### Utilisation de `COUNT(DISTINCT)`

Nous souhaitons savoir combien de propriétés différentes ont été vues en mai 2013.

Nous allons donc avoir la clause suivante:

```SQL
    select count(distinct propertyNo) as myCount
    from Viewing
    where viewDate between '1-May-13' and '31-May-13';
```

###### Utilisation de `COUNT` et `SUM`

Nous souhaitons trouver le nombre total de managers et la somme de leurs salaires.

Nous allons donc avoir la clause suivante:

```SQL
    select count(staffNo) as myCount, sum(salary) as mySum
    from Staff
    where position = 'Manager';
```

###### Utilisation de `MIN`, `MAX` et `AVG`

Nous souhaitons trouver le salaire minimum et maximum ainsi que la moyenne des salaires des
employés.

Nous allons donc avoir la clause suivante:

```SQL
    select min(salary) as myMin, max(salary) as myMax, avg(salary) as myAvg
    from Staff;
```

------------------------------------------------------------------------------------------
```SQL
    create table PROPRIETE_A_LOUER
    (NUM PROPRIETE varchar(5) not null,
        PIECES number(2) not null default 4,
        LOCATION number(6,2) not null default 600, 
        NUM_PROPRIETAIRE varchar(5) not null,
        NUM_PERSONNEL varchar(5)
        NUM_FILIALE char(4) not null,
        constraint PK_PROPRIETE_A_LOUER primary key
        (NUM_PROPRIETE),
        constraint FK_PROPRIETE_NUM_PERSONNEL foreign key
        (NUM PERSONNEL) references PERSONNEL on delete set null,
        constraint CK_PIECES_RANGE check (PIECES between 1 and 15),
        constraint CK_LOCATION_RANGE check(LOCATION between 0  and 
        9999.99);
```

