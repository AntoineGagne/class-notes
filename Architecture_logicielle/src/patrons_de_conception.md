# Patrons de conception

## Patrons de création

### Plugin

- Pas de questions à l'examen

### Factory

### Abstract Factory

#### Différence avec une Factory

- Permet de créer des instances de plusieurs familles
    - Une famille est un ensemble de classes qui sont en relation entre elles

#### Exemple

Une application a deux types de véhicules: voitures et SUV. Parmi ces types de
véhicules, il y a deux types: de luxe et régulier. Il y aurait donc deux
factory: une qui crée les voitures de luxe et régulières, une deuxième qui crée
les SUV de luxe et réguliers.

#### Diagramme UML

![Abstract Factory UML](img/abstract_factory.png)

### Prototype

- Permet de créer des objets semblables avec quelques petites différentes

#### Diagramme UML

![Prototype UML](img/prototype.png)

### Builder

- Quand la construction d'un objet nécessite plusieurs étapes potentiellement
  complexes

#### Diagramme UML

![Builder UML](img/builder.png)

### Singleton

- Lorsqu'on veut une seule instance d'une classe dans tout le programme

### Service Locator

- Utilise le pattern *Singleton*

### Registry

- Pas de questions à l'examen

## Patrons de répartition et de hiérarchie

### Strategy

- Plusieurs algorithmes applicables à un même problème

### Template Method

- On définit le squelette d'un algorithme et on laisse les sous-classes
  implémenter les détails des étapes

#### Diagramme UML

![Template Method UML](img/template_method.png)

### State

- Permet à un objet de modifier son comportement lorsque son état change
- Potentiellement à l'examen

#### Diagramme UML

![State UML](img/state.png)
