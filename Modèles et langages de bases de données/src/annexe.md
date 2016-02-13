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

**Agrégation**
:   Applique la liste des fonctions agrégates, $AL$, à la relation $R$ pour définir une relation
    à partir de la liste agrégate. $AL$ contient une paire ($\langle \text{ fonction_agrégate } \rangle ,
    \langle \text{ attribut } \rangle$ ou plus. 

**Algèbre relationnelle**
:   Langage théorique avec des opérations qui marchent sur une ou plusieurs relations pour
    définir une autre relation sans changer la relation originale.

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

**Compatible à l'union**
:   Quand les schémas de deux relations concordent, c'est-à-dire qu'ils ont le même nombre
    d'attributs avec chaque pair d'attributs correspondant ayant le même domaine.

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

**Deuxième forme normale (2NF)**
:   **Définition**: Une relation qui est dans la première forme normale 
    et dont chaque attribut qui n'est pas une clé primaire est dépendant de 
    la clé primaire.
:   **Définition générale**: Une relation qui est dans la première forme
    normale et dans laquelle tous les attributs qui ne font pas parties
    d'une clé candidate est *complètement dépendant* de n'importe quelle
    clé candidate.

**Différence**
:   Opération binaire de l'algèbre relationnelle qui définit une relation qui consiste des tuples
    qui sont dans la relation $R$, mais pas dans la relation $S$. $R$ et $S$ doivent être compatibles
    à l'union.

**Division**
:   Opération de l'algèbre relationnelle qui définit une relation à partir des attributs $C$,
    où $C$ est l'ensemble des attributs de $R$ qui ne sont pas des attributs de $S$,
    qui consiste à l'ensemble des tuples de $R$ qui concordent avec *tous* les tuples de $S$.

**Domaine**
:   L'ensemble des valeurs allouées pour un ou plusieurs attributs.

**Décomposition d'opérations complexes** 
:   Opération de l'algèbre relationnelle qui donne un nouveau nom à $S$ pour l'expression $E$, 
    et nomme optionnellement les attributs en $a_1, a_2, \dots, a_n$. C'est une opération qui permet
    de donner un nom au résultat d'une opération relationnelle.

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

**Dépendance multi-valuée**
:   Représente une dépendence entre des attributs (par exemple, $A$, $B$ et $C$) dans une relation, tel que
    pour chaque valeur de $A$, il y un ensemble de valeurs $B$ et un ensemble de valeurs pour $C$. Par contre,
    l'ensemble de valeurs de $B$ et $C$ sont indépendants chacun des autres.

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

**Equijointure**
:   Cas particulier de $\theta$-join. C'est le cas où le prédicat $F$ contient 
    seulement l'égalité ($=$).

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

**Intersection** 
:   Opération binaire de l'algèbre relationnelle qui définit une relation consistant de 
    l'ensemble de tous les tuples qui sont à la fois dans $R$ et $S$. $R$ et $S$ doivent 
    être compatibles à l'union.

**Intégrité d'entité**
:   Règle d'intégrité qui stipule que, dans une relation de base, aucun attribut de la clé primaire
    ne peut être nul.

**Intégrité référentielle**
:   Règle d'intégrité qui stipule que, si une clé étrangère existe dans une relation,
    soit la valeur de la clé étrangère correspond à la valeur d'une clé candidate d'un tuple
    dans sa relation maison ou la valeur de la clé étrangère doit être complètement nulle.

**Jointure externe**
:   Jointure dans laquelle les tuples de $R$ qui n'ont pas de valeurs correspondantes avec 
    les attributs en commun avec $S$ ne sont pas inclus dans la relation résultante. Les 
    valeurs manquantes dans la deuxième relation sont mises à *null*.

**Jointure naturelle**
:   Equijointure des deux relations $R$ et $S$ sur tous leurs attributs
    communs $x$. Une occurence de chacun des attributs communs est enlevée des résultats.

**Jointure theta ($\theta$-join)**
:   Opération de l'algèbre relationnelle qui définit une relation qui contient les tuples satisfants
    le prédicat $F$ à partir du résultat du produit cartésien de $R$ et $S$. Le prédicat $F$ est de la
    forme $R.a_i~\theta~S.b_i$ où $\theta$ peut être un des opérateur de comparaison ($< $, $\leq$, $>$, $\geq$,
    $=$, $\neq$).

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

**Opérations de jointure**
:   **Définition textuelle**: Opération de l'algèbre relationnelle qui est équivalente à appliquer 
    l'opération de sélection avec le prédicat de jointure au résultat du produit cartésien des deux 
    relations d'entrée.
:   **Définition mathématique**: Si $F$ est le prédicat de jointure et $R$ ainsi que $S$ sont deux relations, 
    alors l'opération de jointure entre les deux relations peut être décrite comme $\sigma_{F}(R \times S)$.

**Première forme normale (1NF)**
:   Une relation dans laquelle l'intersection de chaque ligne et
    colonne contient seulement une valeur.

**Produit cartésien** 
:   Opération binaire de l'algèbre relationnelle qui définit une relation qui est la concaténation 
    de tous les tuples de la relation $R$ avec tous les tuples de la relation $S$.

**Programme d'application**
:   Un programme informatique qui interagit avec la base de données en envoyant des requêtes 
    (la plupart du temps des instructions *SQL*) au système de gestion des bases de données.

**Projection**
:   Opération unaire de l'algèbre relationnelle qui s'applique sur une seule relation $R$ 
    et définie une relation qui contient un sous-ensemble vertical de $R$. Elle extrait 
    les valeurs des attributs spécifiés et élimine les copies.

**Quatrième forme normale**
:   Une relation dont toutes les dépendences multi-valuées non-triviales $A \twoheadrightarrow B$ ont 
    comme propriété que $A$ est une clé candidate de la relation.

**Regroupement**
:   Groupe les tuples de la relation $R$ par les attributs de groupement, $GA$, et applique ensuite
    la liste de fonctions agrégates $AL$ pour définir une nouvelle relation. $AL$ contient une paire 
    ($\langle \text{ fonction_agrégate } \rangle , \langle \text{ attribut } \rangle$ ou plus. La 
    relation résultante contient les attributs de groupement $GA$ avec le résultat de chacune des
    fonctions agrégates.

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

**Semi-jointure**
:   Définit une relation qui contient les tuples de $R$ qui participent
    dans la jointure de $R$ avec $S$ satisfaisant le prédicat $F$.

**Superclé**
:   Attribut, ou un ensemble d'attributs, qui identifient de manière unique un tuple dans une
    relation.

**Système de base de données**
:   L'ensemble des applications qui interagissent avec la base de données 
    et le système de gestion de base de données.

**Système de gestion de base de données (DBMS ou SGBD (en français))**
:   Un logiciel qui permet aux utilisateurs de définir, maintenir et contrôler
    l'accès à la base de données.

**Sélection**
:   Opération unaire de l'algèbre relationnelle qui s'applique sur une seule relation $R$ 
    et définit une relation qui contient seulement les tuples de $R$ qui satisfont la condition 
    spécifée (le *prédicat*).

**Troisième forme normale (3NF)**
:   **Définition**: Une relation qui est dans la première et deuxième 
    forme normale et dans laquelle aucun attribut qui ne fait pas partie 
    de la clé primaire est transitivement dépendant de la clé primaire.
:   **Définition générale**: Une relation qui est dans la première et deuxième
    forme normale et dans laquelle aucun attribut qui ne fait pas partie d'une
    clé candidate est transitivement dépendant d'une clé candidate.

**Tuple (ligne ou archive)**
:   Nom donné à une ligne dans une relation (ou table).

**Union**
:   L'union de deux relations $R$ et $S$ définit une relation qui contient tous les
    tuples de $R$ ou de $S$ ou bien des deux relations. Les tuples copies sont éliminés. $R$ et
    $S$ doivent être compatibles à l'union.

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

