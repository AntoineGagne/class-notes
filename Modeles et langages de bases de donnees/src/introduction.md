% Notes de cours
% Antoine Gagné
% 5 février 2016

Ce document regroupe l'ensemble de mes notes pour le cours **Modèles et langages de bases de données**.

# Introduction

Ce chapitre est une introduction aux bases de données et aux système de gestion de bases de données. Il expliquera leur raison
d'exister, les fonctions typiques, les composants majeurs, etc.

## L'ancêtre des bases de données

Le prédécesseur des bases de données est l'approche par fichiers. Cette approche utilisait un système décentralisé où chaque système
avait ses propres données. 

### Problèmes

L'approche par fichiers comprend cinq problèmes majeurs.

#### Séparation et isolation des données

Dans une approche par fichiers, les données sont séparées et isolées. Cela fait en sorte qu'il est plus difficile d'accéder aux données.
Lorsqu'on veut accéder à des données, on doit synchroniser notre traitement des fichiers pour s'assurer que les bonnes données sont
extraites.

#### Duplication des données

Un autre problème de cette approche est la duplication des données. Chaque département a sa propre version des données. Cela fait en 
sorte que les départements vont avoir des données identiques entre eux dans certains cas. C'est donc du gaspillage de temps et d'argent,
 car les données être entrées plusieurs fois par des personnes différentes. De plus, ça veut également dire qu'il y a plus d'espace de 
stockage qui est pris. Finalement, il y a plus de risques d'avoir des informations incorrectes, car il peut y arriver que la
synchronisation entre les différents fichiers des départements ne s'est pas bien faite.

#### Dépendences des données

Les programmes dépendent d'un format de fichier particulier. Si le format change, toutes les applications connectées à ce fichier doivent
changer aussi. Le format des données est donc assez rigide, car il n'y a pas d'abstraction quant à la disposition de celles-ci. De plus,
changer une adresse de données va nécessiter la création d'un programme pour pouvoir changer tous les champs de manière à ce qu'ils soient
conformes à la nouvelle structure.

#### Format de fichiers

Comme la structure des fichiers est dépendant du langage de programmation, il est plus difficile d'utiliser différents langages pour les
différentes applications. En effet, un fichier généré dans un langage va être différent du même fichier généré à partir d'un autre
langage.

#### Requêtes fixes et prolifération de programmes

Les besoins de nouvelles requêtes peuvent changer à tous moments. Étant donné que les requêtes sont écrites par les développeurs
d'application, il était très difficile d'ajouter des nouvelles requêtes rapidement. Il n'y avait aucun moyen de créer des requêtes
non planifiées pour aller voir les types de données disponibles. Le fait que ce soit les développeurs d'application qui devaient
écrire toutes les requêtes faisait en sorte que leur charge de travail était énorme et, donc, dans certain cas, ils étaient 
obligés de couper dans certaines fonctionnalités. Par exemple, les fonctionnalités suivantes étaient souvent omises:

- Aucune mesure de sécurité ou de vérification de l'intégrité des données
- La récupération des données dans le cas d'un disfonctionnement logiciel ou matériel était limité ou inexistant
- Accès aux fichier était restreint à un utilisateur à la fois

#### Résumé

Tous les facteurs limitants de l'approche par fichiers peuvent être attribués à deux facteurs:

- La définition des données est incrustée dans les applications au lieu d'être enregistré séparemment et indépendemment
- Il n'y a aucun contrôle sur les accès et manipulations des données hormis celui imposé par les programmes

## L'approche par base de données

L'approche par fichiers ne répondant pas aux besoins des entreprises, une nouvelle solution fut inventée: l'approche
par base de données.

### Les bases de données

#### Définition

Une **base de données** est une collection de données liées logiquement et sa description, conçu dans le but de répondre aux besoins 
d'information d'une organisation. 

#### Avantages

Les bases de données ont plusieurs avantages par rapport à l'approche par fichiers. Par exemple:

- Une base de données a le minimum de duplication possible. 
- Au lieu d'être liée à un seul département, elle est partagée à toute l'organisation complète. 
- Elle peut être accédée par plusieurs utilisateurs en même temps. 
- En plus de contenir les données, elle contient aussi une description de ces données. 
- La définition des données est cachée aux utilisateurs qui ne voient que leurs définitions externes ce qui permet de protéger
les programmes des modifications à la base de données.

### Les systèmes de gestion de bases de données (DBMS ou SGBD)

#### Définition

Un **système de gestion de base de données** est un logiciel qui permet aux utilisateurs de définir, créer, maintenir et contrôler
l'accès à la base de données.

#### Fonctionnalités fournies

Les systèmes de gestion de bases de données donnent accès à des fonctionnalités. Par exemple:

- Permet aux utilisateurs de définir la base de données avec un **langage de définition de données (DDL)**. Ce langage permet de
spécifier les types, les structures et les contraintes à appliquer sur les données qui vont être entreposées dans la base de
données.
- Permet aux utilisateurs de d'insérer, de mettre à jour, d'effacer et d'aller chercher des données dans la base de données avec
un **langage de manipulation de données (DML)**. Le langage de manipulation de données permet de faire ces opérations avec un
**langage de requête** comme le **langage structuré de requête (SQL)**. 
- Permet un accès contrôlé à la base de données. Par exemple:
    - Système de sécurité qui empêche les accès non autorisés à la base de données
    - Système d'intégrité qui maintient la consistence des données
    - Système de contrôle d'accès multiple qui permet l'accès partagé à la base de données
    - Système de contrôle de récupération qui permet de remettre la base de données à un état antérieur après un problème 
    matériel ou logiciel
    - Catalogue usager qui contient des descriptions des données dans la base de données

#### Avantages

Il y a plusieurs avantages aux systèmes de gestion de bases de données. Parmi ces avantages, on dénombre le contrôle de la
redondance des données, la cohérence des données, plus d'informations avec le même nombre de données, le partage des données,
une meilleure intégrité des données, une sécurité accrue, l'application des standards, des économies de taille, la balance de besoins 
contradictoires, l'amélioration de l'accessibilité et de la réactivité des données, une productivité accrue, maintenance 
améliorée grâce à l'indépendence des données, amélioration de l'accès simultané et de meilleurs services de restauration
des données.

##### Contrôle de la redondance des données

L'approche par bases de données essaie d'éliminer les redondances en intégrant les fichiers de sorte que des copies des mêmes
données ne sont pas enregistrées. Toutefois, l'approche par bases de données n'élimine pas toutes les redondances, elle ne fait
que contrôler la quantité de redondance. Dans certains cas, il est nécessaire de dupliquer des données clés pour modéliser des
relations. Dans d'autres cas, il est désirable de dupliquer quelques données pour améliorer les performances. 

##### Cohérence des données

En éliminant ou en controllant les redondances, on réduit le risques d'incohérences. S'il n'y a qu'une copie d'une données dans
la base de données, n'importe quelle mise à jour de sa valeur ne va devoir être fait qu'une fois. S'il y a plusieurs copies et
que le système est au courant, il peut s'assurer que toutes les copies sont consistentes.

##### Plus d'informations avec le même nombre de données

Comme toutes les informations sont accessibles par tous les départements d'une organisation, il est possible d'avoir plus
d'information avec les mêmes données.

##### Partage des données

Comme la base de données est commune à toute l'organisation, elle peut être accéder par tout le monde.

##### Meilleure intégrité des données

L'intégrité d'une base de données réfère à la validité et à la cohérence des données enregistrées. L'intégrité est exprimé en termes de contraintes que la base de données ne peut violer. 

##### Sécurité accrue

La sécurité des bases de données est la protection de la base de données contre les utilisateurs non
autorisés. L'intégraton permet à l'administrateur de la base de données de définir la sécurité de
la base de données. Cette sécurité peut prendre la forme d'identifiants et de mots de passe.

##### Application des standards

L'intégraton permet à l'administrateur de la base de données d'appliquer les standards nécessaires. 
Ceux-ci peuvent prendre la forme de format de données, format de la documentation, les procédures de
mise à jour et règles d'accès.

##### Économies de taille

Combiner toutes les données d'une organisations dans une base de données et créer un ensemble d'application qui marche avec cette seule source de données
peut permettre d'économiser beaucoup d'argent. En effet, au lieu que chaque département ait leur propre budget pour la maintenant et le développement de
leur système basé sur une approche fichier, les efforts peuvent être combinés pour être concentré vers la base de données uniques pouvant ainsi sauver de
l'argent.

##### Balance de besoins contradictoires

Chaque utilisateur ou département a des besoins qui peuvent être en conflit avec ceux des autres utilisateurs. Comme la base de données est sous le contrôle
de l'administrateur de bases de données, celui-ci peut prendre des décisions à propos de la conception et de l'utilisation de la base de données qui vont
tirer le maximum des ressources disponibles de l'organisation.

##### Amélioration de l'accessibilité et de la réactivité des données

En raison de l'intégration, les données qui sont partagées à travers les frontières des différents départements sont directement accessibles aux utilisateurs.
Cela donne un système qui a potentiellement beaucoup plus de fonctionnalités.

##### Productivité accrue

Un système de gestion de gestion de bases de données fourni par défaut la plupart des fonctionnalités d'une approche par fichiers. Ainsi, le programmeur n'a
pas à se concentrer sur les aspects de base de la base de données et peut se concentrer sur les aspects plus spécifiques à sa propre application.

##### Maintenance améliorée grâce à l'indépendence des données

Un système de gestion de bases de données sépare la description des données des applications, rendant ainsi les applications immunisées contre les 
changements de descriptions des données.

##### Amélioration de l'accès simultané 

La plupart des systèmes de gestion de bases de données contrôlent les accès simultanés à la base de données rendant ainsi les problèmes d'accès simultanés
impossible.

##### Meilleurs services de restauration et de sauvegarde des données

Les systèmes de gestion de bases de données ont des mesures pour minimiser les dégats en cas de défaillance.

#### Désavantages

Il y a aussi quelques désavantages aux systèmes de gestion de bases de données tels que une plus grande complexité,
une plus grande taille, le coût des systèmes de gestion de bases de données, les coûts additionnels de matériel, le coût de
conversion, la performance et un plus gros impact en cas de défaillance.

##### Complexité

La plupart des fonctionnalités dont nous nous attendons d'un système de gestion de bases de données font en sorte que c'est un logiciel très complexe.
Une incompréhension du système peut amener des mauvaises décisions de conception qui peuvent avoir des conséquences sérieuses pour l'organisation.

##### Taille

La complexité et toutes les fonctionnalités des systèmes de gestion de bases de données font en sorte que c'est un logiciel extrêmement lourd qui
demande beaucoup d'espace disque et qui demande beaucoup de mémoire pour l'exécuter.

##### Coût des systèmes de gestion de bases de données

Le coût des systèmes de gestion de bases de données varie en fonction des fonctionnalités et de l'environnement fournis. Également, il y a des
frais annuels de maintenance qui s'imposent.

##### Coûts additionnels de matériel

Les besoins en espace de disque pour la base de données et le système de gestion de bases de données peut demander à acheter du nouvel espace disque.
De plus, pour atteindre les performances requises, il peut être nécessaire d'acheter une machine dédiée pour exécuter la base de données.

##### Coût de conversion

Dans certains cas, le coût de conversion des applications existants pour qu'elles roulent sur le nouveau système peut être très grand.

##### Performance 

Une approche par fichiers permet de créer des applications et des formats de fichier qui ont un but spécifique. Cela fait en sorte que leur performance
est souvent très bonne. Par contre, dans le cas d'un système de gestion de bases de données, on essaie d'être plus général dans le but de desservir plus
d'applications. Cette généralité entraîne souvent un coût au niveau de la performance.

##### Plus gros impact en cas de défaillance.

La centralisation des données augmente la vulnérabilité du système. Comme tout le monde dépend de la base de données, sa défaillance peut amener plusieurs
opérations à s'arrêter.

#### Mécanisme de vision

En plus d'offrir toutes les fonctionnalités précédentes, les système de gestion de base de données offrent un **mécanisme de
vue** qui permet aux utilisateurs d'avoir leur propre vue de la base de données. Par exemple, une vue pourrait
permettre de ne voir que certaines entités de la base de données

##### Bénéfices

Les vues offrent plusieurs bénéfices tels que:

- Un niveau de sécurité supplémentaire, car on peut exclure des données que certains utilisateurs ne devraient pas voir
- Un mécanisme pour paramétrer l'apparence de la base de données
- Permet de présenter une vision immutable de la structure de la base de données même si la base de données en dessous
est changée, car la vue va seulement présentée les données qui intéressent l'utilisateur. Donc, même si les autres
champs changent, tant que les champs qui intéressent l'utilisateur n'ont pas changé, la vue de l'utilisateur ne 
sera pas affectée.

#### Composants d'un système de gestion de bases de données

Un système de gestion de bases de données est composées de plusieurs choses.

##### Matériel

Un système de gestion de bases de données a besoin de matériel pour fonctionner. Ce matériel peut aller d'un simple
ordinateur personnel à un réseau d'ordinateurs. Quelques systèmes de gestion de bases de données nécessite un
système d'exploitation particulier ou du matériel spécifique alors que d'autres, non. Les système de gestion de
bases de données ont besoin d'un minimum de mémoire et d'espace disque pour fonctionner, mais ce minimum ne
garantit pas une performance adéquate. Un exemple d'**architecture client-serveur** se retrouve à la figure suivante.
Dans cette figure, on remarque le serveur central qui sert de **backend** au système de gestion de bases de données
et les différents ordinateurs qui servent de **frontend** au système de gestion de bases de données.

![Exemple d'architecture client-serveur](images/exemple_materiel_SGBD.png)

##### Logiciel

La composante logiciel comprend le logiciel de système de gestion de bases de données lui-même, les programmes
d'application, le système d'exploitation et le logiciel de réseau si le système de gestion de bases de données
est utilisé par un réseau.

##### Données

Les données sont la partie la plus importante d'un système de gestion de bases de données. Elles servent de
pont entre les humains et les machines. La base de données contient les données opérationnelles et
les metadatas. La structure de la base de données est appelée **schéma**. Les schémas contiennent des 
**tables**. Les champs dans ces tables sont appelés des **attributs**.

##### Procédures

Les procédures sont les instructions et les règles qui régissent la forme et l'utilisation de la base de
données. Ces procédures sont destinées aux utilisateurs du système et au personnel qui est responsable
de la base de données.

##### Humains

Les personnes impliquées avec le système.

#### Conception de bases de données

La structure d'une base de données est déterminée lors du **design de la base de données**.

#### Rôles dans un environnement de bases de données

Il y a quatre types de personnes dans un environnement de bases de données. Il y a les administrateurs
des données et de la base de données, les concepteurs de bases de données, les développeurs d'application
et les utilisateurs.

##### Administrateurs des données et de la base de données

Les administrateurs des données et de la base de données sont des rôles qui sont chargés du contrôle
et de la gestion du système de gestion de la base de données et de ses données.

- L'**administrateur des données (DA)** est responsable de gérer les ressources de données, incluant la
planification de la base de données, le développement et la maintenance des standards, politiques et 
procédures. Il doit aussi s'occuper du design conceptuel/logique de la base de données.
- L'**administrateur de la base de données (DBA)** est responsable de la réalisation physique de la 
base de données, incluant le design physique de la base de données et l'implantation, la sécurité,
le contrôle d'intégrité, la maintenance du système opérationnel et d'assurer une performance
satisfaisante des applications des utilisateurs.

##### Concepteurs de bases de données

Il y a deux types de concepteurs de bases de données. Il y a les **concepteurs de bases de données
logiques** et les **concepteurs de bases de données physiques**.

- **Concepteurs de bases de données logiques**: Responsables d'identifier les données (ou plutôt
les entités et les attributs), les relations entre les données et les contraintes sur les données
qui vont être enregistrées dans la base de données. Il doit avoir une bonne compréhension des
données de l'organisation et des contraintes qui s'appliquent sur celles-ci.
- **Concepteurs de bases de données physiques**: Décident comment la conception logique de la base
de données va être physiquement implantée. Cela consiste à:
    - Transformer le design logique de la base de données dans un ensemble de tables et de 
    contraintes d'intégrité.
    - Sélectionner des structures d'entreposage et des méthodes d'accès aux données pour obtenir
    une bonne performance.
    - Établir les mesures de sécurité requises pour les données.

##### Développeurs d'application

Les développeurs d'application sont responsables de développer des programmes qui vont fournir
les fonctionnalités requises aux usagers. Ces applications vont interagir avec la base de données.

##### Utilisateurs

Les utilisateurs sont ceux qui ont besoin des informations de la base de données. On distingue deux 
types d'utilisateurs, les **utilisateurs naïfs** et les **utilisateurs sophistiqués**.

- **Utilisateurs naïfs**: Ignorent tout du système de gestion de bases de données. Ils accèdent à la
base de données par des programmes spécifiques. Ils utilisent les opérations de bases de données en
appuyant sur des boutons ou en entrant des commandes simples.

- **Utilisateurs sophistiqués**: Familiés avec la structure de la base de données et des installations
fournies par le système de gestion de bases de données. Ils sont capable d'utiliser un langage de 
requêtes comme le *SQL* pour exécuter les opérations requises. Ils sont parfois même capables
d'écrire des applications pour leur propre usage.
