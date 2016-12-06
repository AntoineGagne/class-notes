# Architecture (partie 3)

## Polymorphisme et abstraction

- Les abstractions protègent contre les variations
- Une interface définit un contrat

## Métrique: Instabilité-Abstraction

### Loi de Déméter

Il est possible d'appeler seulement les méthodes provenant de:

- Sa propre classe
- Paramètres qui lui sont passés en entrée
- Objets qu'elle a créés
- Ses attributs

**Exemple:**

```
foo(p):
    p.m()
    this.a.m()
    a = new X()
    a.m()
```

### Principes *SOLID*

#### *Single Responsability Principles* (*SRP*)

Pourquoi changer le code suivant:

```java
public class Employee() {
    // Logique d'affaires
    public double calculatePay() {}
    // Persistance / données
    public void save() {}
    // Rapport
    public String describeEmployee() {}
}
```

Deux facettes:

- Une classe ou module ne devrait pas avoir plus d'*une* raison de changer
- Une classe ne devrait qu'un seul acteur qui peut demander un changement

Le non-respect de ce principe crée des *god classes*.

#### *Open Closed Principle* (*OCD*)

Les éléments d'un logiciel devraient être ouverts aux extensions, mais fermés aux modifications.

```java
class Automobiliste {
    private Voiture voiture;

    public void remplir() {
        if (voiture.getType() == VoitureType.ESSENCE) {
            voiture.remplirReservoir();
        } else if (voiture.getType() == VoitureType.ELECTRIQUE) {
            voiture.brancher();
        }
    }
}
```

Ce code viole plusieurs principes:

```cpp
Guichet::init() {
    if (TIROIR_TYPE == USB) {
        tiroirArgent = new UsbTiroir();
    }
}

Guichet::Retirer() {
    tx = new TransactionBancaire(compte, montant);
    if (tx.estViable()) {
        tx.executer();
    }

    try {
        tiroirArgent.distribuer(montant)
    } catch (ManqueArgentException e) {
        tx.annuler()
    }
}
```

#### *Liskov Substitution Principle* (*LSP*)

Il ne faut jamais hériter d'une classe simplement pour partager ses méthodes.

#### *Interface Segregation* (*IRS*)

- Aucun client ne devrait être forcé de dépendre de méthodes qu'il n'utilise pas

#### *Dependency Inversion Principle* (*DIP*)
