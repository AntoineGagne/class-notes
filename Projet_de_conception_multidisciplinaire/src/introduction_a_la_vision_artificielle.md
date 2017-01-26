# Introduction à la vision artificielle

## Caméra embarqué

- Pour raffiner la position des objets sur la table

## Caméra monde

- Pour estimer la position des objets sur la table

## Traitement des images et reconnaissance

### Espaces des couleurs

#### HSV

- **Hue**
- **Saturation** Pureté de la couleur (moins il y a de blanc, plus c'est pur)
- **Value**

### Traitement des images

### Filtrage des images

#### Filtrage linéaire

##### Filtre passe bas

Pour réduire le bruit, on peut utiliser `cvSmooth` qui est un filtre passe bas.
On peut aussi utiliser un filtre gaussien qui préserve mieux les arêtes (prendre un filtre (3, 3), (5, 5) ou (9, 9))

##### Filtre passe haut

**Masque de Prewitt:** Utiliser un filtre gaussien ou un masque de Sobel avant de l'utiliser

#### Filtrage non-linéaire

- Ouverture
- Fermeture
- Érosion
- Dilatation

### Segmentation

#### Extraction des coins

- Détecteur de Harris

## Analyse des données

## Planification et prise de décision

## Exécution
