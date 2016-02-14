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

L'expression `select` ne peut seulement contenir que:

- des noms de colonnes;
- des fonctions agrégates;
- des constantes;
- une expression combinant les points précédents.

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

Il est important de retenir que les fonctions d'agrégation ne peuvent pas être utilisées dans
une clause `WHERE`.

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

#### Grouper les résultats (`GROUP BY`)

Lorsqu'on veut grouper des résultats, on se sert de la clause `GROUP BY`. Il est important de
retenir que toutes les noms de colonnes qui apparaissent dans la clause `SELECT` doivent 
apparaître dans la clause `GROUP BY`, mais toutes les colonnes de `GROUP BY` ne sont pas obligées
d'être dans la clause `SELECT`. La seule exception est si le nom de la colonne est seulement
utilisé dans une fonction d'agrégation.

Aussi, lorsqu'une clause `WHERE` est utilisée avec la clause `GROUP BY`, la clause `WHERE` est 
appliquée en premier.

##### Exemple d'utilisation de `GROUP BY`

Nous souhaitons trouver le nombre d'employés dans chaque branche ainsi que la somme de leurs salaires.

Nous allons donc avoir la clause suivante:

```SQL
    select branchNo, count(staffNo) as myCount, sum(salary) as mySum
    from Staff
    group by branchNo
    order by branchNo;
```

Nous aurons alors la table suivante:

branchNo                myCount                 mySum
---------               --------                --------
B003                    3                       54000.00
B005                    2                       39000.00
B007                    1                        9000.00
---------               --------                --------

Nous aurions aussi pu réécrire cette requête comme

```SQL
    select branchNo, (select count(staffNo) as myCount
                      from Staff s
                      where s.branchNo = b.branchNo),
                     (select sum(salary) as mySum
                      from Staff s
                      where s.branchNo = b.branchNo)
    from Branch b
    order by branchNo;
```

#### Restreindre les groupements (`HAVING`)

La clause `HAVING` a été conçue pour être utilisée avec la clause `GROUP BY` afin de restreindre les
groupes qui apparaissent dans la table de résultats finale. Les noms de colonnes qui se retrouvent
dans la clause `HAVING` doivent se retrouver dans la clause `GROUP BY`. La clause `HAVING` doit
toujours inclure une fonction d'agrégation.

La clause `HAVING` n'est pas essentielle au langage SQL; le langage serait capable d'effectuer les mêmes 
opérations sans la clause `HAVING`.

##### Exemple d'utilisation de `HAVING`

Nous souhaitons trouver le nombre d'employés qui travaillent dans chaque branche et la somme de leur
salaire pour chaque branche qui a plus qu'un employé.

Nous aurons donc la requête suivante:

```SQL
    select branchNo, count(staffNo) as myCount, sum(salary) as mySum
    from Staff
    group by branchNo
    having count(staffNo) > 1
    order by branchNo;
```

Nous aurons donc la table suivante:

branchNo            myCount             mySum
--------            --------            --------
B003                3                   54000.00
B005                2                   39000.00
--------            --------            --------

#### Sous-requêtes

Une expression `SELECT` peut se retrouver dans une autre expression `SELECT`. Le résultat de ce `SELECT`
sera alors utilisé pour déterminer le contenu du résultat final. Un `SELECT` peut aussi être utilisé
dans une clause `WHERE` et `HAVING`. On l'appelle alors une **sous-requête**. Il y a trois types de 
sous-requêtes:

- **Sous-requête scalaire**: Retourne une seule colonne et une seule ligne, soit une seule valeur. Utilisée
lorsqu'une seule valeur est nécessaire.
- **Sous-requête de ligne**: Retourne plusieurs colonne, mais une seule ligne. Utilisée surtout dans les
prédicats.
- **Sous-requête de table**: Retourne une ou plusieurs colonnes et plusieurs lignes. Utilisée lorsqu'une
table est requise.

Les règles suivantes s'appliquent aux sous-requêtes:

- La clause `ORDER BY` ne peut pas être utilisée dans une sous-requête.
- Il ne doit y avoir qu'une seule colonne ou expression passée en argument au `SELECT` d'une 
sous-requête sauf si le mot clé `EXISTS` est utilisé.
- Par défaut, les noms de colonnes dans une sous-requête réfère à celles de la table de la clause
`FROM` de la sous-requête.
- Quand une sous-requête est utilisée comme opérande dans une comparaison, elle doit toujours
être à droite dans la comparaison.

##### Mots clés `ANY` et `ALL`

Les mots clés `ANY` et `ALL` peuvent être utilisés avec les sous-requêtes qui produisent une
seule colonne. Si la sous-requête est précédée du mot clé `ALL`, la condition va être vraie seulement
si elle est satisfaite par toutes les valeurs de la sous-requête. Si la sous-requête est précédée
par le mot clé `ANY`, la condition va être vraie si elle satisfaite par au moins une valeur de
la sous-requête. Le mot clé `SOME` est équivalent au mot clé `ANY`.


##### Exemple d'utilisation de sous-requêtes

Dans cette section, nous verrons des exemples d'utilisation de sous-requêtes.

###### Sous-requête avec l'opérateur d'égalité

Nous souhaitons trouver le personnel qui travaille dans la branche '163 Main St'.

Nous aurons donc la requête suivante:

```SQL
    select staffNo, fName, lName, position
    from Staff
    where branchNo = (select branchNo
                      from Branch
                      where street = '163 Main St');
```

La sous-requête va trouver le numéro de la branche qui correspond à la branche dont le nom de la rue
est '163 Main St'. Cela va retourner une seule valeur. Il s'agit donc d'une sous-requête scalaire.

###### Sous-requête avec une fonction d'agrégation

Nous souhaitons trouver tous les employés dont le salaire est plus grand que la moyenne des salaires
et montrer de combien leur salaire est plus grand que la moyenne.

Nous aurons donc la requête suivante:

```SQL
    select staffNo, fName, lName, position,
           salary - (select avg(salary) from Staff) as salDiff
    from Staff
    where salary > (select avg(salary) from Staff);
```

Nous ne pouvons pas utiliser `avg(salary)` direct dans la clause `WHERE`, car les fonctions d'agrégation
ne sont pas permises dans une clause `WHERE`.

###### Utilisation de `IN`

Nous souhaitons avoir toutes les propriétés qui sont administrées par les employés qui travaillent
à la branche à '163 Main St'.

Nous aurons donc la requête suivante:

```SQL
    select propertyNo, street, city, postcode, type, rooms, rent
    from PropertyForRent
    where staffNo in (select staffNo
                      from Staff
                      where branchNo = (select branchNo
                                        from Branch
                                        where street = '163 Main St'));
```

La dernière sous-requête selectionne le numéro de la branche qui se trouve à '163 Main St'. 
L'avant-dernière sous-requête sélectionne les employés qui travaille à cette branche. Ensuite,
comme cette requête retourne plusieurs valeurs, nous utilisons le mot clé `IN`. 

Nous obtenons donc la table suivante:

propertyNo  street      city        postcode        type    rooms   rent
----------  ---------   ---------   --------------  ----    -----   -----
PG16        5 Novar Dr  Glasgow     G12 9AX         Flat    4       450
PG36        2 Manor Rd  Glasgow     G32 4QX         Flat    3       375
PG21        18 Dale Rd  Glasgow     G12             House   5       600
----------  ---------   ---------   --------------  ----    -----   -----

###### Utilisation de `ANY`/`SOME`

Nous souhaitons trouver tous les employés dont le salaire est plus grand que le salaire d'au moins
un employé à la branche B003.

Nous aurons donc la requête suivante:

```SQL
    select staffNo, fName, lName, position, salary
    from Staff
    where salary > some(select salary
                        from Staff
                        where branchNo = 'B003');
```

Nous obtiendrons donc la table suivante:

staffNo     fName       lName       position        salary
-------     --------    --------    -----------     -----------
SL21        John        White       Manager         30000.00
SG14        David       Ford        Supervisor      18000.00
SG5         Susan       Brand       Manager         24000.00
-------     --------    --------    -----------     -----------

###### Utilisation de `ALL`

Nous souhaitons trouver tous les employés dont le salaire est plus grand que le salaire de
tous les employés à la branche B003.

Nous aurons donc la requête suivante:

```SQL
    select staffNo, fName, lName, position, salary
    from Staff
    where salary > all(select salary
                       from Staff
                       where branchNo = 'B003');
```

Nous obtiendrons donc la table suivante:

staffNo     fName       lName       position        salary
-------     --------    --------    -----------     -----------
SL21        John        White       Manager         30000.00
-------     --------    --------    -----------     -----------

#### Requêtes multi-tables

Pour combiner des colonnes de plusieurs tables dans une seule table, nous devons utiliser une
opération de **jointure**. L'opération de jointure du SQL combine les informations de deux tables
en formant des paires de rangées liés. Ces paires de rangées sont celles où les colonnes correspondantes
des deux tables ont la même valeur.

Pour faire une opération de jointure, il suffit d'inclure plus qu'une table dans la clause `FROM`.
On sépare les noms de tables par des virgules. On peut aussi utiliser des alias. Pour ce faire,
il suffit d'ajouter un espace après le nom de la table et mettre le nom de l'alias qu'on veut
utiliser.

##### Calculer une jointure

Une jointure est un sous-ensemble du produit cartésien. Le produit cartésien de deux tables
est une autre table avec toutes les paires de rangées possibles des deux tables. Si on fournit
deux tables sans clause `WHERE`, le produit cartésien des deux tables sera calculé. 

Les standards ISO ont établi une forme spéciale du `SELECT` pour le produit cartésien:

```
    SELECT [DISTINCT | ALL] {* | columnList}
    FROM TableName1 CROSS JOIN TableName2
```

La procédure pour effectuer une jointure avec un `SELECT` est la suivante:

1. Faire le produit cartésien avec les tables de la clause `FROM`.
2. S'il y a une clause `WHERE`, il faut appliquer la condition de recherche sur chacune des rangées
du résultat du produit cartésien de sorte de ne retenir que les rangées qui satisfont la condition.
3. Pour chacune des rangées restantes, il faut déterminer la valeur de chacun des éléments dans la
liste des éléments du `SELECT` afin de produire une seule rangée dans la table résultante.
4. S'il y a le mot clé `DISTINCT`, il faut éliminer toutes les copies de rangées de la table
résultante.
5. S'il y a une clause `ORDER BY`, il faut trier la table selon la condition émise.

##### Jointures externes

Les jointures vues jusqu'à présent gardent seulement les rangées qui correspondent entre les
tables. Si une rangée ne correspond à aucune autre rangée, elle est omise du résultat. La 
jointure externe permet de garder seulement ces rangées qui ne correspondent à aucunes
autres rangées.

##### Exemples d'opérations de jointure

Dans cette section, nous verrons des exemples d'opérations de jointure.

###### Opération de jointure simple

Nous souhaitons avoir le nom de tous les clients qui ont vu une propriété avec tous les
commentaires associés.

Nous aurons donc la requête suivante:

```SQL
    select c.clientNo, fName, lName, propertyNo, comment
    from Client c, Viewing v
    where c.clientNo = v.clientNo;
```

###### Trier une opération de jointure

Pour chaque branche, nous souhaitons avoir la liste de tous les numéros d'employés et le nom
des employés qui administrent des propriétés et les propriétés qu'ils administrent.

Nous aurons donc la requête suivante:

```SQL
    select s.branchNo, s.staffNo, fName, lName, propertyNo
    from Staff s, PropertyForRent p
    where s.staffNo = p.staffNo
    order by s.branchNo, s.staffNo, propertyNo;
```

###### Opération de jointure sur trois tables

Pour chaque branche, nous souhaitons avoir la liste des numéros de personnel ainsi que le nom du personnel
qui administre des propriétés y compris la ville dans laquelle chaque branche est située et les propriétés
que le personnel administre.

Nous aurons donc la requête suivante:

```SQL
    select b.branchNo, b.city, s.staffNo, fName, lName, propertyNo
    from Branch b, Staff s, PropertyForRent p
    where b.branchNo = s.branchNo and s.staffNo = p.staffNo
    order by b.branchNo, s.staffNo, propertyNo;
```

###### Multiples groupements de colonnes

Nous souhaitons trouver le nombre de propriétés administrées par chaque des membres du personnel ainsi
que le numéro de branche de chaque membre du personnel.

Nous aurons donc la requête suivante:

```SQL
    select s.branchNo, s.staffNo, count(*) as myCount
    from Staff s, PropertyForRent p
    where s.staffNo = p.staffNo
    group by s.branchNo, s.staffNo
    order by s.branchNo, s.staffNo;
```
