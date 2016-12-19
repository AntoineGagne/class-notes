# Types de tests

## Acceptation

Déterminer si le système sera accepté ou non par les parties prenantes (client) en vérifiant qu’il répond bien aux critères d’acceptation définis préalablement.

Ces tests visent à prouver au client que l’on a développé le « bon produit ».

## Fonctionnel

S’assurer qu’une fonctionnalité du système respecte bien sa spécification de manière détaillée.

Ces tests visent à vérifier si les fonctionnalités sont complètes, valides et solides (dans le détail).

## Exploratoire

Essayer de tester des combinaisons ou une utilisation rare pour parcourir des chemins non spécifiés.

## Non fonctionnel

S’assurer que le système rencontre bien certains attributs non fonctionnels tels que la fiabilité, l’efficacité, la convivialité (voir plus bas), la maintenabilité, la portabilité, etc.

## Performance

S’assurer que le système respecte un niveau de performance requis.

## Convivialité

S’assurer que le logiciel est compréhensible, simple d’apprentissage, facile et agréable à utiliser.

# Niveaux de tests

## Bout-en-bout

Les tests bout-en-bout assurent que les composantes ou systèmes intégrés d’une application fonctionnent ensemble tel que prévu.

L’application complète est testée par un scénario d’utilisation complet allant d’un bout à l’autre du système : typiquement de l’interface usager jusqu’à la base de données, réseau, matériel, etc.

C’est une longue tranche très mince qui permet de passer dans toutes les composantes. Certains y incluent même le processus de déploiement, etc.

![Portée des tests bout-en-bout](img/portee_tests_bout_en_bout.png)

## Système

Comme les tests bout-en-bout, les tests de système opèrent sur le système complètement intégré.

Toutefois, ils ne testent généralement pas des scénarios d’utilisation complets (*workflow*). Ils visent à déterminer que le système intégré répond à certaines caractéristiques spécifiques.

Ces caractéristiques ne sont pas forcément fonctionnelles. Par exemple, un test de charge (type *performance -- non fonctionnel*) sur le système (niveau).

## Intégration

Ces tests exposent principalement les problèmes et irrégularités dans les interfaces et dans l’interaction entre les différentes composantes du système qui doivent être intégrées. 

**L’emphase de ces tests est mise sur la communication entre les composantes.**

![Portée des tests d'intégration](img/portee_tests_integration.png)

## Composante

Ces tests valident chaque composante individuelle en isolation complète des autres composantes du système.

## Unitaire

Test d’une **unité en isolation**. Dans un système orienté-objet, l’unité considérée est généralement une **classe**.

Malgré le fait qu’il s’agisse probablement de la définition sur laquelle la communauté s’entend le mieux, c’est aussi une source constante de confusion dans les entreprises.

![Portée des tests unitaires](img/portee_tests_unitaires.png)
