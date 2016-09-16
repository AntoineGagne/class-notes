# Langages non-réguliers et lemme de pompage

## Lemme de pompage

Si $L$ est un langage régulier alors il existe un entier $p \gt 0$ (appelé longueur de pompage) telle que pour tout mot $w$ dans $L$ avec $\lvert w \rvert \ge p$, il existe des mots $x$, $y$ et $z$ tels que $w = xyz$ et

1. $\lvert xy \rvert \le p$
2. $\lvert y \rvert \gt 0 \iff y \neq \epsilon$)
3. Pour tout $i \ge 0$, on a $xy^iz \in L$

### Exemple d'application

Nous souhaitons prouver $K = \{a^nb^n \mid n \in \mathbb{N}\}$ n'est pas régulier. On procède par contradiction. Supposons que $K$ est régulier. On sait donc que $K$ satisfait le lemme de pompage. Il existe donc $p \ge 1$ tel que tous les mots de $K$ dont la longueur est au moins $p$ peuvent être pompés.

Cela doit donc être le cas pour le mot $w = a^pb^p$ et il existe donc un découpage $w = xyz$ tel que $\lvert xy \rvert \le p$ et $\lvert y \rvert \gt 0$ et $xy^iz \in K$ pour tout $i \ge 0$. Puisque $\lvert xy \rvert \le p$, on sait que $xy$ (ainsi que $y$) ne contiennent que des $a$. Si on prend $i = 2$, le mot $xy^2z = xyyz$ est obtenu en insérant une copie de $y$ dans le mot $w$ et donc $xy^2z = a^{p + \lvert y \rvert}b^p$.

Le lemme de pompage nous assure que ce mot appartient à $K$ mais cela n'est pas le cas puisque $p + \lvert y \rvert \gt p$. Cette contradiction montre que $K$ n'est pas régulier.

## Automates finis non-déterministes

### Définition

Un automate fini non-déterministe $M$ (abrégé *AFN*) est défini par un quintuplet ($Q$, $\Sigma$, $\rho$, $q_0$, $F$) où

| $Q$ est un ensemble fini d'états
| $\Sigma$ est l'alphabet de l'automate
| $\rho \subseteq Q \times \Sigma \times Q$ est une relation de transition
| $q_0 \in Q$ est l'état initial
| $F \subseteq Q$ est l'ensemble des états acceptants, aussi appelés états finaux

### Différence avec les automates finis déterministes

Au lieu d'avoir une *fonction* de transition, on a une *relation* de transition.

### Diagrammes non-déterministes

- Un même mot peut correspondre à plusieurs chemin à cause de l'ambiguïté.
- Un mot peut ne correspondre à aucun chemin dans le diagramme si ce dernier n'est pas complètement défini.

### Acceptation

Soit $M = (Q, \Sigma, \rho, q_0, F)$ un automate fini non-déterministe. On dit que $M$ accepte le mot $w = a_1 \dots a_n$ (où $a_i \in \Sigma$) s'il existe une séquence d'états $p_0, p_1, \dots, p_n$ telle que

| $p_0 = q_0$
| $(p_i, a_{i + 1}, p_{i + 1}) \in \rho \qquad{} \forall i = 0, \dots, n - 1$
| $p_n \in F$

$q_0 = p_0 \xrightarrow{a_1} p_1 \xrightarrow{a_2} p_2 \dots p_{n - 1} \xrightarrow{a_n} p_n \in F$

La séquence d'états $p_0, p_1, \dots, p_n$ correspond à un chemin tracé par le mot $w$ dans le diagramme de transitions correspondant à $M$ à partir de l'état initial $q_0$. La définition dit donc que $w$ est accepté s'il existe un chemin étiqueté $w$ qui, à partir de l'état initial, aboutit dans un état acceptant.
