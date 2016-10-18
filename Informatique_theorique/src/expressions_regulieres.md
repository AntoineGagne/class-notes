# Expressions régulière

## But

Permet de valider qu'un ensemble de mots respecte un certain gabarit.

## Performance

On peut régler une partie des problèmes de performance des expressions régulières en remplaçant les automates non-déterministes par des automates déterministes. Par exemple, on peut simplifier les expressions suivantes:

| $e^+ = ee^{*}$
| $e \mid e = e$
| $e_1(e_2 \mid e_3) = e_1e_2 \mid e_1e_3$
| $(e_1 \mid e_2)^{*} = e_1^{*}(e_2e_1^{*})^{*}$

## Attaques *ReDos*

Causées par deux facteurs:

- Expressions régulières mal construites
- Des algorithmes de validations « mal conçus »
