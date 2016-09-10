% Probabilités et statistiques pour ingénieurs
% Antoine Gagné
% Thu Sep 8 11:54:41 EDT 2016

Ces notes tirées du cours *Probabilités et statistiques pour ingénieurs* traitent des sujets suivants:

- Théorie des probabilités.
- Lois usuelles pour les variables discrètes et continues.
- Fonctions de variables aléatoires.
- Estimation ponctuelle et par intervalle de confiance.
- Tests paramétriques et d'adéquation.

# Introduction à la théorie des probabilités

**Définition**
:   La définition statistique d'une probabilité, c'est la limite d'une fréquence.

$$
P(A) = \lim_{n\to\infty} \frac{n(A)}{n}
$$

où 

| $P$: Probabilité
| $A$: Événement
| $n$: Nombre de répétitions
| $n(A)$: Nombre de fois que $A$ est réalisé

**Définition**
:   $\mathcal{E} \longrightarrow \Omega$

où

| $\mathcal{E}$: Expérience aléatoire
| $\Omega$: L'ensemble de tous les résultats possibles (connus)

**Exemple**: Quelle est la probabilité d'obtenir un 10 en tirant deux dés ?

Nous avons l'ensemble des résultats suivants:

$$
\Omega = \{(a, b) \mid a, b \in \{1, 2, \dots , 6\}\}
$$

Parmi cet ensemble, seul 3 résultats permettent d'obtenir 10:

$$
\{(4, 6), (5, 5), (6, 4)\}
$$

La cardinalité de l'ensemble des résultats connus est

$$
\left\mid \Omega\right\mid = 36
$$

Nous avons donc la probabilité suivante:

$$
\mathrm{probabilité} = \frac{3}{36} = \frac{1}{12}
$$
