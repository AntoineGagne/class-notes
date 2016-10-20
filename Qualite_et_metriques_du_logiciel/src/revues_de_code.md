# Revue de code

1. Enlever les `Optional<T>` et les remplacer par des exceptions direct dans les méthodes `get`
2. Enlever la méthode qui ajoute les `Repository` pour ajouter un validateur séparé avec un *value object*
3. Mettre les trucs qui reviennent dans les tests dans le `setUp`
4. Mettre les `import` de `Mockito` statique
5. Enlever les `throws` pour mettre un `Exception` générique ou un `Throwable`
6. Changer les `get` dans les `Repository` par des `find`
7. Changer les `Namespace` par des `EndPoints`
8. Enlever les interfaces pour les `Resources`
9. Au lieu de mettre les `SuppressWarnings` pour les *unchecked exceptions*, mettre un `willThrow`
10. Il manque un test pour les passagers invalides dans le `CheckinResource`
11. Changer la valeur de la variable `isStarted` dans les tests d'intégration
12. Générer un port *random* pour les ports dans un certain *range* dans les tests d'intégration
