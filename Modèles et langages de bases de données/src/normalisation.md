# Normalisation

Dans ce chapitre, nous allons parler de la normalisation et de ses buts.
Nous allons aussi aborder le concept de dépendances fonctionnelles.

## Redondance de données et anomalies de mises à jour

En éliminant la redondance dans les bases de données, on en retire les
bénéfices suivants:

- les mises à jour des données sont faites avec un nombre minimal 
d'opérations réduisant ainsi les risques d'incohérences dans la base de
données;
- le nombre d'espace de stockage requis pour les relation est diminué
réduisant ainsi les coûts.

Les relations qui ont des données redondantes peuvent avoir des problèmes
appelés des **anomalies de mise à jour**. Il y a trois types d'anomalies
de mise à jour: les **anomalies d'insertion**, les **anomalies de 
suppression** et les **anomalies de modification**.

### Anomalies d'insertion

Si on ajoute des nouvelles données à la base de données, il peut y avoir des
incohérences avec les champs déjà existants. De plus, si la table est mal 
faite, on peut être forcé d'ajouter des *nulls* pour pouvoir ajouter 
de nouveaux tuples.

### Anomalies de suppression

Si on efface un attribut d'un tuple qui contient la dernière information
sur un des attributs, cette information sera perdu lorsque l'attribut sera
enlevé.

### Anomalies de modification

Si on modifie la valeur d'un attribut, il faut s'assurer que dans la table,
toutes les tuples qui contiennent cet attribut sont modifier. Sinon, on
risque d'avoir une anomalie de modification. On peut éviter ces anomalies
en décomposant les relations en plus petites relations. Cette façon de faire
possède deux propriétés intéressantes:

- la propriété du **raccord sans pertes** qui assure que toutes les 
instances de la relation originale peuvent être identifiées avec les
relations plus petites.
- la propriété de **préservation des dépendances** qui assure qu'une
contrainte de la relation originale sera maintenue en maintenant la 
contraintes sur les relations plus petites.

## Dépendances fonctionnelles

Les **dépendances fonctionnelles** jouent un rôle important dans la 
normalisation des bases de données.

### Définition

Assumons un schéma relationnel possédant les attributs 
$(A, B, C, \dots, Z)$ et une base de données décrite par une **relation
universelle** $R = (A, B, C, \dots, Z)$. Cela veut dire que tous les
attributs dans la base de données ont un nom unique. Une **dépendance 
fonctionnelle** décrit le lien entre les attributs d'une relation.
Par exemple, si $A$ et $B$ sont des attributs de la relation $R$, 
$B$ est fonctionnellement dépendant de $A$ (dénoté $A \mapsto B$), si
chaque valeur de $A$ est associée à seulement une valeur de $B$ 
($A$ et $B$ peuvent consister de plus d'un attributs).

### Déterminant

Le terme **déterminant** réfère à l'attribut, ou le groupe d'attributs,
du côté gauche de la flèche d'une dépendance fonctionnelle.

### Dépendance fonctionnelle complète

Une **dépendance fonctionnelle complète** est une dépendance fonctionnelle
dans laquelle le déterminant à le nombre minimal d'attribut pour avoir
une dépendance fonctionnelle avec les attributs à droite de la flèche.

### Dépendance fonctionnelle partielle
Une dépendance fonctionnelle est dite dépendance fonctionnelle partielle 
dans laquelle un des attributs peut être enlevé du déterminant et la 
dépendance fonctionnelle est encore valide.

### Dépendance transitive

Si $A$, $B$ et $C$ sont des attributs d'une relation tel que si
$A \mapsto B$ et $B \mapsto C$, alors $C$ est dépendant transitif de
$A$ via $B$ (si $A$ n'est pas fonctionnellement dépendant de $B$ ou $C$).

### Résumé

Les dépendances fonctionnelles qui nous intéressent pour la normalisation
possèdent les propriétés suivantes:

- Il y a une relation *un à un* entre les attributs du déterminant et ceux
du côté droit d'une dépendance fonctionnelle.
- Elles sont toujours valides
- Le déterminant a le minimum d'attributs nécessaires pour maintenir 
une dépendance fonctionnelle avec le côté droit. Il doit donc y avoir
une dépendance fonctionnelle complète entre les attributs du côté gauche
avec ceux du côté droit.

## Normalisation et formes normales

Dans cette section, nous verrons la normalisation ainsi que les différentes
formes normales ainsi que les techniques pour les obtenir.

### Définition de la normalisation

La **normalisation** est une technique pour produire un ensemble de 
relations avec des propriétés désirables selon les besoins de 
données de l'entreprise. Les caractéristiques d'un bon ensemble de 
relations sont les suivantes:

- le *nombre minimal d'attributs* pour supporter les besoins en données
de l'entreprise;
- les attributs avec des relations logiques (décrites comme des
**dépendances fonctionnelles**) sont dans les mêmes relations;
- il y a un *minimum de redondance*, avec chaque attribut qui se
retrouve seulement une fois dans la base de données excepté
les attributs qui sont ou qui font parties de clés étrangères qui sont
essentielles pour lier des relations.

### Forme non normalisée (UNF) à première forme normale

Dans cette section, nous verrons comment passer de la forme
non normalisée à la première forme normale.

#### Définition de la forme non normalisée (UNF)

Une table qui contient une ou plusieurs répétitions de groupe.

#### Définition de la première forme normale (1NF)

Une relation dans laquelle l'intersection de chaque ligne et
colonne contient seulement une valeur.

#### Technique de normalisation

Il y a deux approches pour passer de la forme non normalisée à la 
première forme normale.

##### Mise à plat

Remplir les colonnes de lignes vides avec les données non dupliquées.

##### Séparer les données dupliquées

Placer les données dupliquées avec une copie de l'attribut clé dans une
relation différente.
