# Laboratoire 1

## Structure du projet

### Projet `pom`

Indique qu'un projet est simplement un parent de plusieurs projets.

### Modules

- Réservation
- Boarding

### Langues du projet

Il ne doit y avoir qu'une seule langue dans tous les projets.

## Mise en contexte

L'aéroport souhaite offrir des bornes intelligentes qui offrent des services aux voyageurs.
L'entrée du système est l'achat du billet de réservation.

## Description du projet

Il y a quatre grandes parties:

- Assignation des sièges (on ne peut pas choisir son siège, seulement choisir ce qu'on veut maximiser avec des contraintes)
- Bagages: calcul du poids, combien de bagages selon la classe, refus des bagages ou supplément à payer pour les bagages

Les serveurs ont des bases de données indépendantes.

## Requis

- Il faut coder les requis dans l'ordre.
- Heartbeat qui doit retourner un *token* avec la date.
- Le format retourné doit être identique aux spécifications (types et noms).
- Les ports des serveurs doivent être configurables.
