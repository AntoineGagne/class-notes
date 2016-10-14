# Architecture: le domaine

## Orientation objet

*L'orientation objet* a permis d'améliorer les points suivants:

- Gestion des dépendances
- Complexité abstraite
- Responsabilité est aux classes au lieu d'être aux fonctions

Le paradigme d'orienté objet n'implique pas nécessairement l'*encapsulation*.
L'orientation objet permet de freiner la dégradation du code.

### Grands principes

- Le *couplage*
- La *cohésion*

## Délégation, interactions et *Tell Don't Ask*

Les objets communiquent par des messages. En orienté objet, on encapsule des concepts et on expose des comportements.

## Grands contexts

- Applications basées sur les données (formulaire et CRUD)
- Application à forte logique d'affaires (domaine riche)

## Patron *Repository*

Découpler le moyen d'entreposer les données. C'est surtout utiliser dans des applications à forte logique d'affaires.
