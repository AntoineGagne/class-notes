# Annexe

**Abstraction des données**
:   Nom donné à l'approche qui cache la définition interne des données aux utilisateurs de la base de données 
    et expose seulement la définition externe.

**Administrateur de la base de données (DBA)**
:   Est responsable de la réalisation physique de la base de données, 
    incluant le design physique de la base de données et l'implantation, la sécurité,
    le contrôle d'intégrité, la maintenance du système opérationnel et d'assurer une performance
    satisfaisante des applications des utilisateurs.

**Administrateur des données (DA)**
:   Est responsable de gérer les ressources de données, incluant la
    planification de la base de données, le développement et la maintenance des standards, politiques et 
    procédures. Il doit aussi s'occuper du design conceptuel/logique de la base de données.

**Anomalies d'insertion**
:   Anomalies de mise à jour qui peuvent survenir lors de l'insertion d'un
    nouveau tuple.

**Anomalies de mise à jour**
:   Problèmes qui peuvent survenir lorsqu'on met à jour une base de données
    qui comporte de la redondance.

**Anomalies de modification**
:   Anomalies de mise à jour qui peuvent survenir lors de la modification
    d'un attribut.

**Anomalies de suppression**
:   Anomalies de mise à jour qui peuvent survenir lors de la suppression 
    d'un tuple.

**Application de base de données**
:   Une application qui interagit avec la base de données à un certain point dans son exécution.

**Attribut (colonne ou champ)**
:   **Définition 1**: Propriété qui décrit un aspect de l'objet que nous souhaitons enregistrer.
:   **Définition 2**: Colonne nommée d'une relation.
:   **Définition 3**: Décrit des propriétés des données ou des relations entre les données qui sont
    importantes pour l'entreprise.

**Base de données (BD)**
:   C'est une collection de données liées logiquement et sa description, conçu dans le but de répondre 
    aux besoins d'information d'une organisation.

**Base de données relationnel**
:   Une collection de relations normalisées avec des noms distincts de relations.

**Cardinalité**
:   Le nombre de tuples que la relation contient.

**Catalogue système (dictionnaire de données ou metadata)**
:   Le nom donné à la description des données dans une base de données.

**Clé alternative (AK)**
:   Clé candidate qui n'a pas été choisie comme la clé primaire.

**Clé candidate (CK)**
:   Une superclé tel qu'aucun sous-ensemble propre est une superclé dans la relation. 

**Clé composée**
:   Une clé candidate qui possède plus qu'un attribut.

**Clé primaire (PK)**
:   Clé candidate choisie pour identifier chaque tuple de manière unique
    dans la relation.

**Clé étrangère**
:   Un attribut, ou un ensemble d'attributs, à l'intérieur d'une relation
    qui correspond à la clé candidate d'une relation (possiblement la même).

**Concepteurs de bases de données logiques**
:   Responsables d'identifier les données (ou plutôt les entités et les attributs), 
    les relations entre les données et les contraintes sur les données
    qui vont être enregistrées dans la base de données. Il doit avoir une bonne compréhension des
    données de l'organisation et des contraintes qui s'appliquent sur celles-ci.

**Concepteurs de bases de données physiques**
:   Décident comment la conception logique de la base de données va être physiquement implantée.

**Contraintes d'intégrité**
:   Restrictions sur l'ensemble des valeurs permises pour les attributs des relations.

**Contraintes générales**
:   Règles additionnelles spécifiées par les utilisateurs ou les administrateurs de bases de 
    données de la base de données qui définissent ou contraignent des aspects de l'entreprise.

**Contraintes**
:   Règles de cohérence que la base de données ne peut enfreindre.

**Degré**
:   Le nombre d'attributs que la relation contient.

**Dépendance multi-valuée**
:   Représente une dépendence entre des attributs (par exemple, $A$, $B$ et $C$) dans une relation, tel que
    pour chaque valeur de $A$, il y un ensemble de valeurs $B$ et un ensemble de valeurs pour $C$. Par contre,
    l'ensemble de valeurs de $B$ et $C$ sont indépendants chacun des autres.

**Deuxième forme normale (2NF)**
:   **Définition**: Une relation qui est dans la première forme normale 
    et dont chaque attribut qui n'est pas une clé primaire est dépendant de 
    la clé primaire.
:   **Définition générale**: Une relation qui est dans la première forme
    normale et dans laquelle tous les attributs qui ne font pas parties
    d'une clé candidate est *complètement dépendant* de n'importe quelle
    clé candidate.

**Domaine**
:   L'ensemble des valeurs allouées pour un ou plusieurs attributs.

**Dépendance fonctionnelle (DF)**
:   Décrit le lien entre les attributs d'une relation.

**Dépendance fonctionnelle complète**
:   **Définition 1**: Une dépendance fonctionnelle dans laquelle le 
    déterminant à le nombre minimal d'attribut pour avoir une 
    dépendance fonctionnelle avec les attributs à droite de la flèche.
:   **Définition 2**: Indique que si $A$ et $B$ sont des attributs d'une
    relation, $B$ est complètement fonctionnellement dépendant de $A$
    si $B$ est fonctionnellement dépendant de $A$, mais pas aucun 
    sous-ensemble de $A$.
:   **Définition 3**: Soit $A$ et $B$, deux attributs d'une relation et
    $C \subset A$, alors $(A \mapsto B) \land \neg (C \mapsto B)$.

**Dépendance partielle (DP)**
:   **Définition 1**: Une dépendance fonctionnelle dans laquelle un des 
    attributs peut être enlevé du déterminant et la dépendance 
    fonctionnelle est encore valide.
:   **Définition 2**: Soit $A$ et $B$, deux attributs d'une relation et
    $C \subseteq A$, alors $C \mapsto B$.

**Dépendance transitive (DT)**
:   **Définition 1**: Si $A$, $B$ et $C$ sont des attributs d'une relation 
    tel que si $A \mapsto B$ et $B \mapsto C$, alors $C$ est dépendant 
    transitif de $A$ via $B$ (si $A$ n'est pas fonctionnellement dépendant 
    de $B$ ou $C$).
:   **Définition 2**: Soit $A$, $B$ et $C$, des attributs d'une relation tel
    que $(A \mapsto B) \land (B \mapsto C) \Rightarrow (A \mapsto C)$, si
    $\neg (B \mapsto A) \lor \neg (C \mapsto A)$

**Déterminant**
:   L'attribut, ou le groupe d'attributs, du côté gauche de la flèche d'une
    dépendance fonctionnelle.

**Entité**
:   Objet distinct (une personne, un endroit, une chose, un concept ou un événement) 
    dans l'organisation qui doit être représenté dans la base de données.

**Fermeture**
:   L'ensemble de toutes les dépendances fonctionnelles sous-entendues par
    un ensemble de dépendences fonctionnelles $X$. Notée $X^+$.

**Forme non normalisée (UNF)**
:   Une table qui contient une ou plusieurs répétitions de groupe.

**Forme normale de Boyce-Codd**
:   Une relation dont *tous* les *déterminants* sont des *clés candidates*.

**Indépendance des données**
:   La séparation de la description des données des applications rendant ainsi les applications 
    immunisées aux changement de la description des données.

**Intégrité d'entité**
:   Règle d'intégrité qui stipule que, dans une relation de base, aucun attribut de la clé primaire
    ne peut être nul.

**Intégrité référentielle**
:   Règle d'intégrité qui stipule que, si une clé étrangère existe dans une relation,
    soit la valeur de la clé étrangère correspond à la valeur d'une clé candidate d'un tuple
    dans sa relation maison ou la valeur de la clé étrangère doit être complètement nulle.

**Langage de définition des données (DDL)**
:   Permet aux utilisateurs de spécifier les types, les structures et les contraintes à appliquer sur les
    données qui seront entreposées dans la base de données.

**Langage de manipulation des données (DML)**
:   Permet aux utilisateurs d'insérer, de mettre à jour, d'effacer et d'aller chercher des données dans
    la base de données.

**Langage de requête**
:   Permet de faire les opérations des langages de manipulation des données. Un exemple 
    de langage de requête est le *SQL*.

**Normalisation**
:   **Définition 1**: Une technique pour produire un ensemble de relations 
    avec des propriétés désirables selon les besoins de données de 
    l'entreprise.
:   **Définition 2**: Une technique formelle pour analyser les relations
    basée sur leur clé primaire (ou clés candidates) et les dépendances
    fonctionnelles.

**Null**
:   Représente une valeur pour un attribut qui est présentement inconnu ou pas applicable pour ce tuple.

**Première forme normale (1NF)**
:   Une relation dans laquelle l'intersection de chaque ligne et
    colonne contient seulement une valeur.

**Programme d'application**
:   Un programme informatique qui interagit avec la base de données en envoyant des requêtes 
    (la plupart du temps des instructions *SQL*) au système de gestion des bases de données.

**Quatrième forme normale**
:   Une relation dont toutes les dépendences multi-valuées non-triviales $A \twoheadrightarrow B$ ont 
    comme propriété que $A$ est une clé candidate de la relation.

**Relation (table ou fichier)**
:   **Définition 1**: Une association entre plusieurs entités.
:   **Définition 2**: Table avec des lignes et des colonnes.

**Relation de base**
:   **Définition 1**: Relation qui correspond à une entité dans le schéma conceptuel.
:   **Définition 2**: Relation nommée qui correspond à une entité dans le schéma conceptuel,
    dont les tuples sont entreposés physiquement dans la base de données.

**Relation virtuelle (relation dérivée)**
:   Relation qui n'existe pas par elle-même, mais qui peut être dérivée dynamiquement d'une ou
    plusieurs relations de base.

**Règles d'affaires**
:   Les contraintes d'une organisation sur les données.

**Règles d'intégrité**
:   Contraintes ou restrictions qui s'appliquent sur toutes les instances de la base de données.

**Schéma conceptuel (modèle conceptuel)**
:   L'ensemble de tous les schémas de la base de données.

**Schéma de base de données relationnel**
:   Un ensemble de schémas de relation avec chacun un nom distinct.

**Schéma de relation**
:   Une relation nommée définie par un ensemble d'attributs et de paires de noms de domaines.

**Schéma**
:   Structure de la base de données.

**Superclé**
:   Attribut, ou un ensemble d'attributs, qui identifient de manière unique un tuple dans une
    relation.

**Système de base de données**
:   L'ensemble des applications qui interagissent avec la base de données 
    et le système de gestion de base de données.

**Système de gestion de base de données (DBMS ou SGBD (en français))**
:   Un logiciel qui permet aux utilisateurs de définir, maintenir et contrôler
    l'accès à la base de données.

**Troisième forme normale (3NF)**
:   **Définition**: Une relation qui est dans la première et deuxième 
    forme normale et dans laquelle aucun attribut qui ne fait pas partie 
    de la clé primaire est transitivement dépendant de la clé primaire.
:   **Définition générale**: Une relation qui est dans la première et deuxième
    forme normale et dans laquelle aucun attribut qui ne fait pas partie d'une
    clé candidate est transitivement dépendant d'une clé candidate.

**Tuple (ligne ou archive)**
:   Nom donné à une ligne dans une relation (ou table).

**Utilisateurs naïfs**
:   Ignorent tout du système de gestion de bases de données. Ils accèdent à la
    base de données par des programmes spécifiques. Ils utilisent les opérations de bases de données en
    appuyant sur des boutons ou en entrant des commandes simples.

**Utilisateurs sophistiqués**
:   Familiés avec la structure de la base de données et des installations
    fournies par le système de gestion de bases de données. Ils sont capable d'utiliser un langage de 
    requêtes comme le *SQL* pour exécuter les opérations requises. Ils sont parfois même capables
    d'écrire des applications pour leur propre usage.

**Vue**
:   Résultat dynamique d'une ou plusieurs opérations opérant sur les relations de base
    afin de produire une autre relation. Une vue est une *relation virtuelle* qui n'existe pas 
    nécessairement dans la base de données mais qui peut être produite sur demande par un utilisateur
    donné au moment de la requête.

