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
les déterminants* est une *clé candidate*.
