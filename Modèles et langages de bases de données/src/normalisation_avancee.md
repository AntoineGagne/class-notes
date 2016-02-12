# Normalisation avancée

Ce chapitre traitera de notions de normalisations avancées telles que
la **forme normale Boyce-Codd**.

## Règles d'inférence des dépendances fonctionnelles

Comme il peut y avoir beaucoup de dépendances fonctionnelles, il faut
trouver des règles pour nous permettre d'identifier les plus importantes
plus facilement. L'ensemble des dépendances fonctionnelles qui sont 
sous-entendues pour un ensemble de dépendances fonctionnelles $X$ est 
appelé la **fermeture** de $X$, écrit $X^+$

### Axiomes d'Armstrong

Les **axiomes d'Armstrong** indiquent comment des dépendances fonctionnelles
peuvent être déduites de dépendences données. Soit $A$, $B$, $C$, des
sous-ensembles des attributs de la relation $R$. Nous avons alors:

1. **Réflexivité**: $(B \subset A) \Rightarrow (A \mapsto B)$
2. **Augmentation**: $(A \mapsto B) \Rightarrow (A, C \mapsto B, C)$
3. **Transitivité**: $(A \mapsto B) \land (B \mapsto C) \Rightarrow (A \mapsto C)$

Ces règles peuvent être utilisées pour trouver $X^+$. D'autres règles 
peuvent être dérivées des règles précédentes. Soit $D$, un autre 
sous-ensemble des attributs de $R$. Nous avons alors:

4. **Autodétermination**: $A \mapsto A$
5. **Décomposition**: $(A \mapsto B, C) \Rightarrow (A \mapsto B) \land (A \mapsto C)$
6. **Union**: $(A \mapsto B) \land (A \mapsto C) \Rightarrow (A \mapsto B, C)$
7. **Composition**: $(A \mapsto B) \land (C \mapsto D) \Rightarrow (A, C \mapsto B, D)$

### Ensembles minimaux de dépendances fonctionnelles

Un ensemble de dépendances fonctionnelles $X$ est minimal s'il satisfait les
exigences suivantes:

- Chaque dépendance de $X$ a un seul attribut du côté droit.
- On ne peut pas remplacer une dépendance $A \mapsto B$ dans $X$ avec une
dépendance $C \mapsto B$, où $C$ est un sous-ensemble de $A$, et avoir un
ensemble de dépendences équivalentes à $X$.
- On ne peut pas pas enlever une dépendance de $X$ et toujours avoir un
ensemble de dépendances équivalent à $X$.

## Forme normale de Boyce-Codd (BCNF)

Comme la troisième forme normale souffre encore de redondances, il existe
une forme normale plus forte appelée la **forme normale de Boyce-Codd**.

### Définition

Une relation est en **forme normale de Boyce-Codd** si et seulement si *tous
les déterminants* sont des *clés candidates*. Il y a un potentiel de briser la forme normale
de Boyce-Codd si une des deux conditions suivantes est respectée:

- La relation contient deux (ou plus) clés candidates;
- Les clés candidates se recoupent, soit qu'elles ont au moins un attribut en commun.

### Technique de normalisation

Lorsqu'une dépendance fonctionnelle enfreint les contraintes pour que la relation soit en *BCNF*,
il faut mettre cette dépendance dans une autre table.

## Dépendance multi-valuée

L'existence d'une dépendance multi-valuée est dû à la première forme normale qui empêche un attribut
dans un tuple d'avoir un ensemble de valeurs.

### Définition

Représente une dépendence entre des attributs (par exemple, $A$, $B$ et $C$) dans une relation, tel que
pour chaque valeur de $A$, il y un ensemble de valeurs $B$ et un ensemble de valeurs pour $C$. Par contre,
l'ensemble de valeurs de $B$ et $C$ sont indépendants chacun des autres. On dénote une dépendance multi-valuée
entre les attributs $A$, $B$ et $C$ en utilisant la notation suivante:

$$A \twoheadrightarrow B$$
$$A \twoheadrightarrow C$$

### Types de dépendances multi-valuées

Une dépendance multi-valuée peut être définie comme **triviale** ou **non-triviale**.

- **Triviale**: Une dépendance multi-valuée est définie comme **triviale** si $(B \subset A) \lor (A \cup B = R)$.
- **Non-triviale**: Une dépendance multi-valuée est définie comme **non-triviale** si $\neg ((B \subset A) \lor
(A \cup B = R))$

## Quatrième forme normale

La **quatrième forme normale** vient corriger les problèmes que les dépendances multi-valuées apportent.

### Définition

Une relation est dans la **quatrième forme normale** si et seulement si pour toutes les dépendences
multi-valuées non-triviales $A \twoheadrightarrow B$, $A$ est une clé candidate de la relation.

### Technique de normalisation

Il faut enlever la dépendance multi-valuée de la relation en plaçant les attributs multi-valués dans une
nouvelle relation avec une copie du déterminant.
