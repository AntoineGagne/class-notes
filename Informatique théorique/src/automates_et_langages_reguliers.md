# Automates et langages réguliers

## Alphabets

### Définition

Un alphabet est un ensemble fini non-vide de symboles. On le dénote généralement par $\Sigma$. Chaque élément d'un alphabet est appelé lettre, symbole ou caractère.

### Exemples

$\Sigma = \{a, b, c\}$ est un alphabet.

## Mots

### Définition

Un mot ou une séquence est une suite finie de lettres de l'alphabet.
La longueur d'un mot $w$ est dénoté $|w|$

### Concaténation

La concaténation de deux mots $x$ et $y$ qu'on dénote par $xy$ est le mot obtenu en mettant bout à bout les deux séquences.

Aussi, si $x$ est un mot et $k \in \mathbb{N}$, on dénote par $x^k$ le mot obtenu en concaténant $k$ copies de $x$. Notez que $x^0 = \epsilon$ pour tout mot $x$.

### Mot vide

Le mot vide, dénoté $\epsilon$, est le mot de longueur 0. Le mot vide a aussi comme propriété que

$$
\epsilon x = x\epsilon = x
$$

## Clôture

### Définition

Si $\Sigma$ est un alphabet, la clotûre de $\Sigma$ dénotée par $\Sigma^*$ est l'ensemble des mots de **longueur finie** sur l'alphabet $\Sigma$. Par définition, $\epsilon \in \Sigma^*$ pour n'importe quel alphabet $\Sigma$.

### Exemple

Soit l'alphabet $\Sigma = \{a, b, c\}$. Alors,

$$
\Sigma^* = \{\epsilon, a, b, c, aa, ab, ac,\dots, aaa, aab, \dots, aaaa, aaab, \dots, aaaaa, \dots\}
$$

## Langage

### Définition

Un langage est un sous-ensemble de $\Sigma^*$. Autrement dit, un langage est un ensemble de mots sur un alphabet donné.

## Principe des tiroirs

Le principe des tiroirs stipule que si on répartit les éléments d'un ensemble $A$ avec les éléments d'un ensemble $B$ et que $A < B$ alors il va y avoir des éléments de $B$ qui vont être jumelés plusieurs fois avec des éléments de $A$ différents. 

Plus formellement, si nous avons $n, k \in \mathbb{N}^+$ et que nous répartissons $n$ paires de chaussettes dans $k$ tiroirs, alors un des tiroirs contient au moins deux paires de chaussettes. Plus généralement, un des tiroirs contient au moins $\frac{n}{k}$ paires de chaussettes.

### Exemple

Dans tout ensemble d'au moins 367 personnes, il existe toujours deux personnes qui ont la même date d'anniversaire.

## Automates finis

### Définition

Un automate fini est une machine qui reçoit un mot en entrée lettre par lettre. Il a une mémoire extrêmement limitée. Plus formellement, un automate fini déterministe $M$ est défini par un quintuplet $(Q, \Sigma, \delta, q_0, F)$ tel que

| $Q$ est un ensemble fini d'états
| $\Sigma$ est l'alphabet de l'automate
| $\delta: Q \times \Sigma \rightarrow Q$ est une fonction de transition
| $q_0 \in Q$ est l'état initial
| $F \subseteq Q$ est l'ensemble des états acceptants, aussi appelés états finaux

Pour un même langage $L$, il peut y avoir plusieurs automates possibles pour reconnaître $L$ (il n'y en a toutefois qu'un seul de taille minimale).

### Diagrammes d'état

Un diagramme d'état est un diagramme qui montre les différentes transitions entre les différents états possibles. Ils sont composés de plusieurs éléments:

- États: Les sphères
- Transitions: Les flèches
- Étiquettes: Les lettres au dessus des transitions
- États acceptants: Les sphères qui sont doublement bordés

Pour chaque transition entre deux états $A$ et $B$, il y a seulement **une** transition $A \rightarrow B$.

### Acceptation

Un mot est accepté si et seulement s'il aboutit à un état acceptant. Plus formellement, si $M = (Q, \Sigma, \delta, q_0, F)$ est un automate fini déterministe, on dit que $M$ accepte le mot $w = a_1\dots a_n$ où $a_i \in \Sigma$ s'il existe une séquence d'états $p_0,p_1,\dots,p_n$ telle que

1. $p_0 = q_0$
2. $\delta(p_i, a_{i + 1}) = p_{i + 1} \qquad{} \forall i \in \{0,1,\dots,n\}$
3. $p_n \in F$

### Fonction $\delta^*$

Soit $M = (Q, \Sigma, \delta, q_0, F)$ un automate fini déterministe. La fonction de transition étendue, dénotée $\delta^*$ est la fonction de $Q \times \Sigma^*$ dans $Q$ définie récursivement comme suit:

$$
\delta^*(p, a_1a_2\dots a_n) =
\begin{cases}
p                                                  & \text{si $n = 0$} \\
\delta(p, a_1)                                     & \text{si $n = 1$} \\
\delta(\delta^*(p, a_1,a_2\dots a_{n - 1}, a_n)    & \text{si $n \ge 2$}
\end{cases}
$$

En d'autres mots, $\delta^*(p, w)$ ressemble à la fonction $\delta$, mais elle lit un mot au lieu de simplement une lettre.

### Langage accepté par $M$

Le langage accepté (aussi appelé langage reconnu) par un automate fini déterministe $M$, dénoté $L(M)$ est l'ensemble $\{w \mid M~\text{accepte}~w\}$.

### Langage régulier

Un langage $K \subseteq \Sigma^*$ est un langage régulier s'il existe un automate fini déterministe tel que $L(M) = K$.

### Exemple de construction d'automate fini déterministe

Sur l'alphabet $\{0, 1\}$, soit $L$ l'ensemble des mots dans lesquels chaque $0$ est suivi d'un $1$. Montrons que $L$ est régulier.

- Il faut accepter le mot vide, car il est possible que la première lettre soit un 1.
- Il faut que le premier état soit un état acceptant parce que si on reçoit juste un $1$, l'automate s'arrête.
- Il va également falloir avoir un état poubelle pour les cas où un $0$ est suivi d'un autre $0$.


