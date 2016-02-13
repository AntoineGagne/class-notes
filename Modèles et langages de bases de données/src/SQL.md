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

#### Exemples

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

