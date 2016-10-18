# Automates à pile

## Correspondance avec les langages

Les langages auxquels les automates à pile correspondent sont les langages qui peuvent être générés par une grammaire *non-contextuelle*. Les règles qui régissent la grammaire d'un langage de programmation sont les règles d'une grammaire non-contextuelle.

## Fonctionnement

Un *automate à pile* possède un *ruban* séparé en cases. Chaque case est une lettre du mot d'entrée. Il y a une tête de lecture (ou *indicateur d'état*) pour se déplacer par la droite sur le ruban. Il y également une pile qui permet de conserver en mémoire un alphabet. Pour accéder au bas de la pile, il faut dépiler la pile jusqu'au symbole.

## Opérations

- Lire (consommer) un symbole (et avancer la tête de lecture)
- Dépiler un symbole
- Empiler un symbole
- Changer d'état

## Notation

On utilise la notation

$$(p, x, y; q, z)$$

où

| $p$ est l'état courant
| $x$ est le symbole à l'entrée
| $y$ est le symbole dépilé
| $q$ est le nouvel état
| $z$ est le symbole empilé

On est pas obligé d'empiler quelque chose. Si on n'empile rien, on met un $\epsilon$ à la place.

## Définition formelle

Un automate à pile est un sixtuplet $(S, \Sigma, \Gamma, T, \iota, F)$ où

| $S$ est un ensemble fini d'états
| $\Sigma$ est l'alphabet d'entrée (alphabet du ruban)
| $\Gamma$ est l'alphabet de la pile
| $T$ est un ensemble fini de transitions $T \subseteq S \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{\epsilon\}) \times S (\Gamma \cup \{\epsilon\})$
| $\iota \in S$ est l'état initial
| $F \subseteq S$ est l'ensemble des états finaux

## Acceptation

Pour qu'une séquence soit acceptée, il faut aboutir à un état résultant après avoir lu une séquence en entier. Contrairement à un automate fini, on peut rester à un état.
