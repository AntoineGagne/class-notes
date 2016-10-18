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
