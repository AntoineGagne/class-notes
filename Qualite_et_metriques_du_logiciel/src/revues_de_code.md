# Revue de code

## Revue de code no. 1

### Général

- Enlever les `Optional<T>` et les remplacer par des exceptions direct dans les méthodes `get`
- Dans `whenCreateReservation_thenReturnCreated`, il y a deux choses de *testé*

### `Checkin`

- Enlever la méthode qui ajoute les `Repository` pour ajouter un validateur séparé avec un *value object*

### `CheckinTest`

- Mettre les trucs qui reviennent dans les tests dans le `setUp`
- Mettre les `import` de `Mockito` statique
- Enlever les `throws` pour mettre un `Exception` générique ou un `Throwable`
- Changer les `get` dans les `Repository` par des `find`
- Au lieu de mettre les `SuppressWarnings` pour les *unchecked exceptions*, mettre un `willThrow`
- Enlever les `any` dans les tests
- Mettre des `static` aux constantes
- Trop de `verify` dans les tests, ça rend les tests fragiles
- Séparer les constantes des autres variables

### `Resource`

- Enlever les interfaces pour les `Resources`
- Changer les `Namespace` par des `EndPoints`

#### `CheckinResourceImplTest`

- Il manque un test pour les passagers invalides dans le `CheckinResource`
- Faire un test pour vérifier que la réponse retourne la bonne *location* au lieu de le faire dans `whenCreateReservation_thenReturnCreated`
- Changer la classe *custom* de *status code* pour la classe déjà existante de `Jersey`
- Tester la *location* dans les tests d'intégration

#### `EventResourceImplTest`

- Il est possible d'enlever des tests dans `EventResourceImplTest`

### Tests d'intégration

- Générer un port *random* pour les ports dans un certain *range* dans les tests d'intégration

#### `CheckinResourceIT`

- Changer la valeur de la variable `isStarted` dans les tests d'intégration
- Dans `CheckinResourceIT`, mettre une partie des trucs dans une méthode privée

### `Passenger`

- On assigne l'enfant dans `setAge` dans `Passenger.java`
    - Le `isChild` dépend des valeurs *computées*
- Dans les tests du `Passenger`, on ne teste pas les comportements
    - On teste l'état en ce moment
- Mettre des `boolean` au lieu des `Boolean` dans `Passenger.java`
- Dans `Passenger.java`, les `isEmpty` sont inversés
    - Ça devrait être `isNotEmpty`
- Ne pas tester les *setters*
- On a assumé que l'âge est 18 ans, l'âge est de 21 ans

### `ReservationRepository`

- Changer le nom `whenCreateReservation_thenReturnCreated`

### `Boarding`

- Faire attention à respecter les principes de domaine
- Surveiller les violations du *Tell Don't Ask*
- Un objet `Passenger` dans `boarding` et dans `reservation`

## Revue de code no. 2

## `Boarding`

### `AMSSimulator`

- Nom à changer (ce n'est pas un simulateur)
- Devrait être une interface
- Devrait s'appeler `AMS` ou `AMSClient`
- *Strategy* un peu trop *overkill*

### `RandomPlanModelSelectionStrategy`

- Pas de test pour `RandomPlanModelSelectionStrategy`
- Pas de *seed*, pas uniforme

### `BaggageResponseAssembler`

- Il devrait avoir une validation des unités
- Avoir un *value object* qui représente un poids
    - Avec des méthodes comme `toUnit`

### `BaggageService`

- Utiliser une factory
- Architecture lourde
    - Les trucs économiques n'ont pas vraiment rapport avec les bagages
    - Faire la logique dans le passager ou dans les deux

### `seats`

- Peut-être utiliser des sous-packages
- Les `PlaneModelID` et autres ne devraient pas être dans `ams`
- Les services ne vont pas dans le domaine
    - Les services devraient être dans un autre package

### `CheckedBaggage`

- Avoir un *value object* éviterait les `if`

### `Baggage`

### `EconomicCheckedBaggage`

#### Tests

- Les tests vont être dupliqués
- On va tester les classes abstraites quand la majorité des méthodes implémentées sont dans une classe abstraite
- `givenInvalidLinearDimensionUnit_whenValidate_Baggage_thenThrowsException` devrait être dans l'assembleur

### `FlightLayoutRepositoryInMemory`

#### `assignSeat`

- Un peu bizarre d'enlever le siège quand il est invalide
- Ne semble pas faire partie d'un entrepôt
    - Semble plus être dans le domaine

### `SeatAssignation`

- Peut-être du code qui ne devrait pas être là
- Le nom ne correspond pas vraiment à ce que c'est
- `Seat` devrait faire plus de choses
- Il y a un problème de délégation

#### `addFlightLayoutIfDoesNotExist`

- Devrait être dans un *repository*
- Devrait être appelé *blueprint*

#### `filterBySeatClass`

- Devrait être dans un *repository*
    - Ou peut-être pas
    - Devrait être néanmoins ailleurs

### `SeatAssignationResource`

#### Tests

- Deux *ss* dans *resource*
- L'assembleur devrait être *mocké*
-  `givenAPassengerHashAndRandomMode`, le `RandomMode` pourrait être enlevé
- `thenCallsSeatAssignation` ne devrait pas avoir ce nom-là
    - `thenAssignSeat` serait mieux
    - Pourquoi `anyString` ?
- `givenAPassengerHashAndRandomMode_whenAssignASeat_thenReturnsCreatedStatusCOdeANdValidLocation`
    - `String.format` inutile

### `SeatAssignationStrategyFactory`

- Peut-être faire un *enum*
