% Informatique théorique
% Antoine Gagné
% 7 septembre 2016

Ces notes tirées du cours *Informatique théorique* couvriront les sujets suivants:

- Introduction à la théorie des machines abstraites et des langages formels. 
- Classification des machines abstraites : automates finis, automates à pile, machine de Turing. 
- Classification des langages : réguliers, non contextuels, récursifs, récursivement énumérables, non récursivement énumérables. 
- Grammaires : syntaxe, classification de Chomsky, rapports avec les machines abstraites et les langages. 
- Théorie des séquences. 
- Ensembles finis, infinis, dénombrables et non dénombrables.

# Modèles de calcul

## Définition

## Types

- **Automates finis**: Il s'agit de modèles de calcul extrêmement  simple. Ils sont dépourvus de mémoire et sont donc
                       incapables de  savoir si  leur entrée  est un  bloc de  0 suivis  d'un block  1 de  même longueur.
- **Automates à pile**: Il s'agit  de modèles un peu  plus complexes que les  automates finis. Ils disposent  d'une &laquo;
                        pile &raquo; de mémoire. Ils sont liés aux grammaires non-contextuelles utilisées en compilation.
- **Machine de Turing**: Il     s'agit     de     modèles     qui    paraissent     rudimentaires,     mais     qui     sont
                         capables    de     faire    les    mêmes     opérations    que    les     ordinateurs    modernes.
