# Espérance mathématique

**Définition:** L'espérance est l'équivalent de la moyenne. Par symétrie, on peut dire que l'espérance est égale au milieu des valeurs. Nous avons aussi que les propriétés de l'intégrale s'applique à l'espérance.

**Exemple:** Soit $X$

+-----+---------------+
| $x$ | $p(x)$        |
+=====+===============+
| $2$ | $\frac{1}{2}$ |
+-----+---------------+
| $3$ | $\frac{1}{2}$ |
+-----+---------------+

$$\Rightarrow \mathbb{E}(X) = 2 \times \frac{1}{2} + 3 \times \frac{1}{2} = \frac{5}{2}$$

Nous avons aussi que $g(X) = X^{2}$

+-----+---------------+
| $x$ | $p(x)$        |
+=====+===============+
| $4$ | $\frac{1}{2}$ |
+-----+---------------+
| $9$ | $\frac{1}{2}$ |
+-----+---------------+

$$\begin{align}
    \Rightarrow \mathbb{E}[g(X)] &= \sum_x g(x)p_x(x) \\
                       &= 2^2 \times \frac{1}{2} + 3^2 \times \frac{1}{2} \\
                       &= \frac{13}{2}
\end{align}
$$

**Exemple:** Soit $x \rightarrow f(x) = \begin{cases} 1 \text{ si } x \in \left[0, 1\right] \\ 0 \text{ sinon }\end{cases} \Rightarrow g(x) = x^2$

On cherche $\mathbb{E}\left[g\left(x\right)\right]$

1.
$$\begin{align}
    \mathbb{E}\left[X\right] &= \int\limits_0^1 1x \mathrm{d}x \\ 
                  &= \left[\frac{x^2}{2}\right]_0^1 \\ 
                  &= \frac{1}{2}
\end{align}$$
2.
$$
\begin{align}
    \mathbb{E}\left[g\left(x\right)\right] = \mathbb{E}[x^2] &= \int\limits_{-\infty}^{\infty} g(x)f(x)\mathrm{d}x \\
                                       &= \int\limits_0^1 1x^2\mathrm{d}x \\
                                       &= \left[\frac{x^3}{3}\right]_0^1 \\
                                       &= \frac{1}{3}
\end{align}
$$

**Exemple:** Soit $X$ tel que $\mathbb{E}\left(X\right) = 2$. Alors

$$
\begin{align}
    \mathbb{E}\left(X - 2\right) &= \mathbb{E}\left(X\right) + \mathbb{E}\left(-2\right) \\
                      &= \mathbb{E}\left(X\right) - \mathbb{E}\left(2\right) \\
                      &= 2 - 2 \\
                      &= 0
\end{align}
$$

**Théorème:** Si $X$ et $Y$ sont deux variables aléatoires indépendantes. Alors

$$\mathbb{E}\left[XY\right] = \mathbb{E}\left[X\right]\mathbb{E}\left[Y\right]$$

**Exemple:**

## Moments d'une variable aléatoire

## Loi des grands nombres
