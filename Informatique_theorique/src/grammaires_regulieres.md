# Grammaires

## Définition

Ensemble de règle qui permettent de *construire* les mots d'un langage. Les grammaires permettent de *générer* des langages.

## Définition formelle

Une grammaire est un quadruplet $(V, T, S, R)$ tel que

- $V$ est un ensemble fini de symboles non terminaux (alphabet non terminal)
- $T$ est un ensemble fini de symboles terminaux (alphabet terminal)
- $S \in V$ est le *symbole de départ* qu'on nomme aussi axiome ou symbole initial
- $R$ est un ensemble fini de règles de réécriture (ou productions ou règles de substitution). Elles sont formées d'un terme de gauche, d'une flèche ($\rightarrow$) et d,un terme de droite. Les termes gauche et droite peuvent être n'importe quelle combinaison de symboles de $V$ ou de $T$ pourvu qu'il y ait au moins un symbole de $V$ à gauche. Le côté droit peut être vide, ce qui est indiqué par un $\epsilon$. On parle alors de règle-$\epsilon$.

## Exemple

Voici une grammaire $(V, T, S, R)$ où 

| $V = \{S, A, B, C\}$
| $T = \{a, b, c\}$
| $S$ est le symbole de départ
| $R = \left\{ \begin{align} S &\rightarrow ASC \\ S &\rightarrow B \\ B &\rightarrow bB \\ B &\rightarrow \epsilon \\ A &\rightarrow a \\ C &\rightarrow c \end{align}\right\}$

**Note:** La règle $B \rightarrow \epsilon$ est une règle-$\epsilon$

## Convention

- Les majuscules sont des symboles non terminaux
- Les minuscules sont des symboles terminaux
- $S$ est le symbole initial

Cette convention permet de simplifier la description d'une grammaire en donnant seulement la description de $R$.

## Dérivation

- Une grammaire génère une séquence de symboles terminaux par *dérivation*
- Une dérivation est une suite d'étapes où chaque étape consiste à remplacer (tant que c'est possible) un patron apparaissant du côté gauche d'une règle de $R$ par le côté droit correspondant
- La chaîne initiale est le symbole de départ de la grammaire
- Toute dérivation commence avec le symbole de départ $S$

## Exemple

À partir de l'exemple précédent, on obtient la dérivation suivante:

$$\begin{align}
    &S \\ 
    &\implies \langle \text{Production } S \rightarrow ASC \rangle \\ 
    &ASC \\ &\implies \langle \text{Production } A \rightarrow a \rangle \\ 
    &aSC \\
    &\implies \langle \text{Production } S \rightarrow B \rangle \\
    &aBC \\
    &\implies \langle \text{Production } B \rightarrow bB \rangle \\
    &abBCS \\
    &\implies \langle \text{Production } B \rightarrow \epsilon \rangle \\
    &abC \\
    &\implies \langle \text{Production } C \rightarrow c \rangle \\
    &abc
\end{align}$$

Que nous pourrions réécrire

$$S \implies ASC \implies aSC \implies aBC \implies abBC \implies abC \implies abc$$

## Exemple

On peut dériver la séquence $aabbcc$ comme suit:

$$S \implies abNSc$$

Règles:

| $S \rightarrow abNSc$
| $S \rightarrow \epsilon$
| $bNa \rightarrow abN$
| $bNb \rightarrow bbN$
| $bNc \rightarrow bc$

$$S \implies abNSc \implies abNabNScc \implies abNabNcc \implies aabNbNcc \implies aabbNcc \implies aabbcc$$

## Langages générés par une grammaire

### Définition

Soit $G = (V, T, S, R)$. Si $T \subseteq \Sigma$ où $\Sigma$ est un alphabet, on dit que $G$ est une grammaire sur $\Sigma$. Soit

$$L(G) = \{w \in T^* \mid w \text{ est dérivée de } S\}$$

On dit que $L(G)$ est généré par $G$.

### Exemple

Quel est le langage généré par la grammaire suivante:

$$\begin{align}
    S &\rightarrow AB \\
    A &\rightarrow aA \\
    A &\rightarrow \epsilon \\
    B &\rightarrow Bb \\
    B &\rightarrow b \\
\end{align}$$

$$R: L = \{a^nb^m \mid m \in \mathbb{N}^+ \land n \in \mathbb{N}\}$$

## Grammaires régulières

### Définition

Une grammaire régulière est une grammaire avec les restrictions suivantes:

- Le côté gauche des règles consiste en un seul symbole non terminal
- Le côté droit des règles est
    - soit un symbole terminal suivi d'un symbole non terminal
    - soit un seul symbole terminal
    - soit $\epsilon$

### Exemple

$$\begin{align}
    S &\rightarrow bB \\
    B &\rightarrow aA \\
    A &\rightarrow aS \\
    A &\rightarrow a \\
    B &\rightarrow bA \\
\end{align}$$

est une grammaire régulière. Considérons deux exemples de dérivations.

1.
$$S \implies bB \implies bbA \implies bbaS \implies bbabB \implies bbabaA \implies bbabaa$$
2.
$$S \implies bB \implies baA \implies baaS \implies baabB \implies baabaA \implies baabaa$$

### Exemple

Construire une grammaire régulière générant le langage $\{a^pbc^q \mid p \in \mathbb{N} \land q \in \mathbb{N}^+\}$.

| $S \rightarrow aS$
| $S \rightarrow bA$
| $A \rightarrow cA$
| $A \rightarrow c$

**Note:** On a la règle $A \rightarrow c$ et non la règle $A \rightarrow \epsilon$, car $q \in \mathbb{N}^+$. Pour avoir la règle $A \rightarrow \epsilon$, il aurait fallu avoir $q \in \mathbb{N}$.
