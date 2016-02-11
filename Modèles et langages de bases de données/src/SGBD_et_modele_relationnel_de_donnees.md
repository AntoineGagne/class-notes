# Modèle relationnel 

Dans ce chapitre, nous aborderons le modèle relationnel et ses différents éléments.

## Structure des données relationnelles

La structure des données relationnelles peut être décomposée dans les éléments suivants:

**Relation (table ou fichier)**
:   Table avec des lignes et des colonnes.

**Attribut (colonne ou champ)**
:   Colonne nommée d'une relation.

**Domaine**
:   L'ensemble des valeurs allouées pour un ou plusieurs attributs.

**Tuple (ligne ou archive)**
:   Nom donné à une ligne dans une relation (ou table).

**Degré**
:   Le nombre d'attributs que la relation contient. 

Une relation de degré un est appelée une relation unaire. Une relation de degré 
deux est appelée une relation binaire, une de degré trois est appelée une relation 
tertiaire et, après ça, le terme n-tiaire est utilisé.

**Cardinalité**
:   Le nombre de tuples que la relation contient.

**Base de données relationnel**
:   Une collection de relations normalisées avec des noms distincts de relations.

## Relations mathématiques

Une relation mathématique est définie comme étant le **produit cartésien** de plusieurs
ensembles. Le **produit cartésien** est défini comme suit:

Soit $D_1, D_2, \dots D_n$, $n$ ensembles. Leur produit cartésien est défini comme:

$$D_1 \times D_2 \times \dots \times D_n = \{ (d_1, d_2, \dots, d_n) 
\mid d_1 \in D_1, d_2 \in D_2, \dots d_n \in D_n\}$$

qui peut être réécrit comme

$$\prod_{i = 1}^n D_i$$

## Relations des bases de données

En applicant les notions vues à la section précédente, nous pouvons désormais définir un
schéma de relation. Soit $A_1, A_2, \dots, A_n$ des attributs avec comme domaines $D_1, D_2, \dots, D_n$.
Alors, l'ensemble $\{A_1: D_1, A_2: D_2, \dots, A_n: D_n\}$ est un schéma de relation. 
Une relation $R$ définie par le schéma de relation $S$ est un ensemble qui met en relation les noms
des attributs avec leurs domaines respectifs. Ainsi, la relation $R$ est un ensemble de $n$-tuples:

$$(A_1: d_1, A_2: d_2, \dots, A_n: d_n)~\textrm{tel que}~d_1 \in D_1, d_2 \in D_2, \dots, d_n \in D_n$$

Chaque élément du n-tuple consiste d'un attribut et d'une valeur pour cet attribut. Finalement, nous
pouvons définir le **schéma relationnel de bases de données**. Soit $R_1, R_2, \dots, R_n$ des ensembles
de schémas de relation, alors nous pouvons écrire le schéma relationnel de bases de données comme:

$$R = \{R_1, R_2, \dots, R_n\}$$

## Propriétés des relations

Une relation a les propriétés suivantes:

- elle a un nom qui est distinct de tous les autres noms dans le schéma relationnel;
- chaque cellule contient exactement une valeur atomique;
- chaque attribut a un nom distinct;
- les valeurs d'un attribut proviennent tous d'un même domaine;
- chaque tuple est distinct; il n'y a pas de doublons;
- l'ordre des attributs n'a pas d'importance;
- l'ordre des tuples n'a pas d'importance, en théorie.

## Clés relationnelles

Comme il n'y a pas de tuples identiques dans une relation, nous devons être capables
d'identifier un ou plusieurs attributs qui identifient chaque tuple dans la relation.
Ces attributs sont appelés des **clés relationnelles**.

### Superclé

Une **superclé** est un attribut, ou un ensemble d'attributs, qui identifient de manière
unique un tuple dans une relation.

### Clé candidate

Une **clé candidate** est une superclé tel qu'aucun sous-ensemble propre est une superclé
dans la relation. Une clé candidate $K$ d'une relation $R$ possède deux propriétés:

- *Unicité*: Pour chaque tuple de $R$, les valeurs de $K$ identifient de manière unique ce tuple.
- *Irréductibilité*: Aucun sous-ensemble de $K$ a la propriété d'unicité.

### Clé composée

Une **clé composée** est une clé candidate qui possède plus qu'un attribut.

### Clé primaire

Une **clé primaire** est la clé candidate choisie pour identifier chaque tuple de manière unique
dans la relation.

### Clé alternative

Les clés candidates qui ne sont pas choisies pour être la clé primaire sont dites **clés alternatives**.

### Clé étrangère

Une **clé étrangère** est un attribut, ou un ensemble d'attributs, à l'intérieur d'une relation
qui correspond à la clé candidate d'une relation (possiblement la même).

## Contraintes d'intégrité

Comme chaque attribut à un domaine associé, il y a des contraintes (appelées **contraintes de domaine**)
qui forment des restrictions sur l'ensemble des valeurs permises pour les attributs des relations. Il y
a aussi des **règles d'intégrité** qui sont des contraintes qui s'appliquent sur toutes les instances
de la base de données. Il y a deux règles d'intégrité importantes: l'**intégrité d'entité** et 
l'**intégrité référentielle**. Il existe également d'autres contraintes d'intégrité telles que la
**multiplicité** et les **contraintes générales**.

### Null

Les nulls représentent une valeur pour un attribut qui est présentement inconnu ou pas
applicable pour ce tuple. Les nulls peuvent poser des problèmes d'implantation, car le
modèle relationnel est basé le calcul de prédicat de premier ordre, qui permet seulement deux valeur:
vrai ou faux.

### Intégrité d'entité

Cette règle s'applique aux clé primaires des **relations de base**. Une relation de base est une relation
qui correspond à une entité dans le schéma conceptuel. Cette règle stipule que, dans une relation de base,
aucun attribut de la clé primaire ne peut être nul. En effet, une clé primaire est l'identifiant minimal
qui est utilisé pour identifier les tuples de manière unique. Si on inclut les nulls, nous disons que tous
les attributs ne sont pas nécessaires pour identifier de manière unique les tuples. Il y a donc une 
contradiction.

### Intégrité référentielle

Cette règle s'applique seulement aux clés étrangères. Elle stipule que, si une clé étrangère existe 
dans une relation, soit la valeur de la clé étrangère correspond à la valeur d'une clé candidate d'un tuple
dans sa relation maison ou la valeur de la clé étrangère doit être complètement nulle.

### Contraintes générales

Les contraintes générales sont des règles additionnelles spécifiées par les utilisateurs ou les 
administrateurs de bases de données de la base de données qui définissent ou contraignent des
aspects de l'entreprise.

## Vues

Dans le modèle relationnel, une vue n'est pas la structure de la base de données telle que
l'aperçoit un utilisateur particulier. Une vue est plutôt une **relation virtuelle** ou une **relation 
dérivée**, c'est-à-dire une relation qui n'existe pas par elle-même, mais qui peut être dérivée
dynamiquement d'une ou plusieurs relations de base.

### Définition

Une vue est le résultat dynamique d'une ou plusieurs opérations opérant sur les relations de base
afin de produire une autre relation. Une vue est une *relation virtuelle* qui n'existe pas 
nécessairement dans la base de données mais qui peut être produite sur demande par un utilisateur
donné au moment de la requête. Les vues semblent exister pour l'utilisateur et peuvent être manipulées,
mais elles ne sont pas nécessairement enregistrées dans la base de données comme une relation de base.
Toutes les opérations sur les vues sont automatiquement traduites en opération sur les relations de 
base duquelles celles-ci sont dérivées. De plus, les vues sont **dynamiques** ce qui impliquent
que les changements aux relations de base influeront immédiatement les vues.

### Utilités

Le mécanisme de vues est désirable pour plusieurs raisons:

- Fourni un mécanisme puissant et flexible pour cacher des parties de la base de données à certains
utilisateurs. Les utilisateurs ne sont pas au courant des attributs cachés par la vue.
- Permet aux utilisateurs d'accéder aux données d'une façon adaptée à leurs besoins. De cette façon,
les même données peuvent être vues par différentes personnes de différentes façons.
- Peut simplifier des opérations complexes sur les relations de base. 

Une vue devrait être développée de sorte qu'elle supporte le modèle externe que l'utilisateur trouve
familier. Les vues fournissent une indépendence des données logiques.

### Mise à jour des vues

Toutes les mises à jour à une relation de base devraient immédiatement être reflétées dans les vues
qui font références à cette relation de base. De façon similaire, si une vue est mise à jour, la
relation de base sur laquelle elle est basée devrait être mise à jour aussi. Toutefois, il y a 
des restrictions sur les types de modification qui peuvent être faits sur les vues. Les conditions
sous lesquelles la mise à jour à partir de la vue est possible sont les suivantes:

- Les mises à jour sont permises sur une vue définie en utilisant une requête simple qui implique
une seule relation de base et qui contient ou bien la clé primaire ou une clé candidate de la
relation de base.
- Les mises à jour ne sont pas permises par des vues impliquant de multiples relations de base.
- Les mises à jour ne sont pas permises par des vues impliquant l'aggrégation ou le groupement
d'opérations.
