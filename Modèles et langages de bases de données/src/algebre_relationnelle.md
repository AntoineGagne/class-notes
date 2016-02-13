# Algèbre relationnelle

Dans ce chapitre, nous verrons l'algèbre relationnelle et son utilité.

## Définition

L'**algèbre relationnelle** est un langage théorique avec des opérations qui marchent sur une
ou plusieurs relations pour définir une autre relation sans changer la relation originale.

Comme à la fois les opérandes et les résultats sont des relations, le résultat d'une opération
peut être passer en paramètre à une autre opération. Cela permet aux expressions d'être imbriquées.
Cette propriété s'appelle **fermeture**.

## Opérations

L'algèbre relationnelle supporte plusieurs opérations. Dans cette section, nous allons définir différents
types d'opérations. Dans ces définitions, nous avons $R$ et $S$, deux relations définies par les attributs
$A = (a_1, a_2, \dots, a_N)$ et $B = (b_1, b_2, \dots, b_M)$ respectivement.

### Opérations unaires

L'algèbre relationnelle possède deux opérations unaires: la **sélection** et la **projection**.

#### Sélection (ou restriction)

La **sélection** s'applique sur une seule relation $R$ et définit une relation qui contient
seulement les tuples de $R$ qui satisfont la condition spécifée (le *prédicat*).

On l'écrit 

$$
  \sigma_{prédicat}(R)
$$

où $\sigma$ est le nom de l'opération, $prédicat$ est le prédicat à respecter et $R$ est la relation
sur laquelle l'opération est appliquée.

La sélection s'applique à l'horizontal dans une table.

#### Projection

La **projection** s'applique sur une seule relation $R$ et définie une relation qui contient
un sous-ensemble vertical de $R$. Elle extrait les valeurs des attributs spécifiés et élimine les
copies.

On l'écrit

$$
  \Pi_{a_1, \dots, a_n}(R)
$$

où $\Pi$ dénote le nom de l'opération, $a_1, \dots, a_n$ est le nom de chacun des 
attributs spécifiés et $R$ est la relation sur laquelle l'opération est appliquée.

La sélection s'applique à la vertical dans une table.

### Opérations binaires

Il y a des cas où nous voulons extraire les informations de plusieurs relations à la fois. Les opérations
binaires permettent de combiner les informations de deux relations à la fois.

#### Union

L'**union** de deux relations $R$ et $S$ définit une relation qui contient tous les
tuples de $R$ ou de $S$ ou bien des deux relations. Les tuples copies sont éliminés. $R$ et
$S$ doivent être compatibles à l'union.

On l'écrit 

$$
  R \cup S
$$

où $R$ et $S$ sont deux relations.

#### Différence

La **différence** définit une relation qui consiste des tuples qui sont dans la relation $R$, mais pas dans
la relation $S$. $R$ et $S$ doivent être compatibles à l'union.

On l'écrit

$$
  R - S
$$

où $R$ et $S$ sont deux ensembles.

#### Intersection

**L'intersection** définit une relation consistant de l'ensemble de tous les tuples qui sont à la fois
dans $R$ et $S$. $R$ et $S$ doivent être compatibles à l'union.

On l'écrit

$$
  R \cap S \iff R - (R - S)
$$

où $R$ et $S$ sont des relations.

#### Produit cartésien

Le **produit cartésien** définit une relation qui est la concaténation de tous les tuples
de la relation $R$ avec tous les tuples de la relation $S$.

On l'écrit

$$
  R \times S
$$

où $R$ et $S$ sont des relations.

#### Décomposition d'opérations complexes

La **décomposition d'opérations complexes** donne un nouveau nom à $S$ pour l'expression $E$, et 
nomme optionnellement les attributs en $a_1, a_2, \dots, a_n$.

On l'écrit

$$
  \rho_{s}(E) \text{ ou } \rho_{s_{(a_1, a_2, \dots, a_n)}}(E)
$$

### Opérations de jointure

Les **opérations de jointure** sont parmies les opérations les plus utiles de l'algèbre relationnelle.
Les opérations de jointure sont équivalents à appliquer l'opération de sélection avec le prédicat de jointure
au résultat du produit cartésien des deux relations d'entrée. De manière plus symbolique, si on a $F$ comme 
prédicat de jointure et $R$ ainsi que $S$, deux relations, nous avons que l'opération de jointure peut être
définie comme:

$$
  \sigma_{F}(R \times S)
$$

Les types d'opérations de jointure sont les suivants:

- **Jointure *theta*** ou **($\theta$-join)**
- **Equijointure**
- **Jointure naturelle**
- **Jointure externe**
- **Semi-jointure**

#### Jointure theta ($\theta$-join)

L'opération de **jointure theta** définit une relation qui contient les tuples satisfants
le prédicat $F$ à partir du résultat du produit cartésien de $R$ et $S$. Le prédicat $F$ est de la
forme $R.a_i~\theta~S.b_i$ où $\theta$ peut être un des opérateur de comparaison ($< $, $\leq$, $>$, $\geq$,
$=$, $\neq$).

On l'écrit

$$
  R \bowtie_{F} S \iff \sigma_{F}(R \times S)
$$

où $F$ est le prédicat et $R$ ainsi que $S$ sont des relations.

#### Equijointure 

L'**equijointure** est un cas particulier de $\theta$-join. C'est le cas où le prédicat $F$ contient 
seulement l'égalité ($=$).

#### Jointure naturelle

La **jointure naturelle** est une equijointure des deux relations $R$ et $S$ sur tous leurs attributs
communs $x$. Une occurence de chacun des attributs communs est enlevée des résultats.

On l'écrit

$$
  R \bowtie S
$$

où $R$ et $S$ sont des relations.

#### Jointure externe

La **jointure externe** (gauche) est une jointure dans laquelle les tuples de $R$ qui n'ont pas
de valeurs correspondantes avec les attributs en commun avec $S$ ne sont pas inclus dans la
relation résultante. Les valeurs manquantes dans la deuxième relation sont mises à *null*.

On l'écrit

$$
\begin{align*}
  &R \rtimes S \text{ (Jointure externe gauche) }
  \\
  &R \ltimes S \text{ (Jointure externe droite) }
\end{align*}
$$

#### Semi-jointure

La **semi-jointure** définit une relation qui contient les tuples de $R$ qui participent
dans la jointure de $R$ avec $S$ satisfaisant le prédicat $F$.

On l'écrit

$$
  R \triangleright_{F} S \iff \Pi_{A}(R \bowtie_{F} S)
$$

où $A$ est l'ensemble de tous les attributs de $R$.

### Division

Assumons que la relation $R$ est définie à partir de l'ensemble d'attributs $A$ et que la relation
$S$ est définie à partir de l'ensemble d'attributs $B$ tel que $B \subseteq A$. Soit $C = A - B$,
c'est-à-dire $C$ est l'ensemble des attributs de $R$ qui ne sont pas des attributs de $S$. Alors,
l'opération de division définit une relation à partir des attributs $C$ qui consiste à l'ensemble
des tuples de $R$ qui concordent avec *tous* les tuples de $S$.

On l'écrit

$$
  R \div S
$$

que l'on peut aussi réécrire comme

$$
\begin{align*}
  T_1~ &\neg ~\Pi_{C}(R)
  \\
  T_2~ &\neg ~\Pi_{C}((T_1 \times S) - R)
  \\
  T~ &\neg ~T_{1} - T_{2}
\end{align*}
$$

### Agrégation

Applique la liste des fonctions agrégates, $AL$, à la relation $R$ pour définir une relation
à partir de la liste agrégate. $AL$ contient une paire ($\langle \text{ fonction_agrégate } \rangle ,
\langle \text{ attribut } \rangle$ ou plus. 

On l'écrit

$$
  _ {AL} (R)
$$

Les principales fonctions agrégates sont les suivantes:

- *COUNT*: Retourne le nombre de valeurs de l'attribut associé.
- *SUM*: Retourne la somme des valeurs de l'attribut associé.
- *AVG*: Retourne la moyenne des valeurs de l'attribut associé.
- *MIN*: Retourne la plus petite valeur de l'attribut associé.
- *MAX*: Retourne la plus grande valeur de l'attribut associé.

### Regroupement

Groupe les tuples de la relation $R$ par les attributs de groupement, $GA$, et applique ensuite
la liste de fonctions agrégates $AL$ pour définir une nouvelle relation. $AL$ contient une paire 
($\langle \text{ fonction_agrégate } \rangle , \langle \text{ attribut } \rangle$ ou plus. La 
relation résultante contient les attributs de groupement $GA$ avec le résultat de chacune des
fonctions agrégates.

On l'écrit

$$
 _ {GA~AL}(R)
$$

La forme générale de l'opération de regroupement est la suivante:

$$
  a_1, a_2, \dots, a_n~ {}_{\langle A_p a_p \rangle, \langle A_q a_q \rangle, \dots, \langle A_z a_z \rangle}(R)
$$

où $R$ est une relation quelconque, $a_1, a_2, \dots, a_n$ sont des attributs de $R$, $a_p, a_q, \dots, a_z$ sont
d'autres attributs de $R$ et $A_p, A_q, \dots, A_z$ sont des fonctions agrégates. Les tuples de $R$ sont
partitionnés de sorte que:

- tous les tuples dans un groupe on la même valeur pour $a_1, a_2, \dots, a_n$;
- les tuples dans différents groupes ont des valeurs différentes pour $a_1, a_2, \dots, a_n$.
