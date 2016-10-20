# Variable aléatoire et distribution: le cas multidimensionnel

## Exemple 

Une urne contient trois boules blanches et quatre boules noires. On tire deux boules de l'urne. Soit les variables aléatoires suivantes:

| $$X = \begin{cases}1 & \text{ si la première boule est blanche} \\ 0 & \text{ sinon}\end{cases}$$
| $$Y = \begin{cases}1 & \text{ si la deuxième boule est blanche} \\ 0 & \text{ sinon}\end{cases}$$

Déterminer la loi conjointe de $(X, Y)$ et ses lois marginales. On distingue deux types de tirage: *avec* ou *sans* remise.

*Avec remise:*

| $p(0, 0) = \mathbb{P}[X = 0, Y = 0] = \frac{16}{49}$
| $p(1, 1) = \mathbb{P}[X = 1, Y = 1] = \frac{9}{49}$
| $p(1, 0) = \mathbb{P}[X = 1, Y = 0] = \frac{12}{49}$
| $p(0, 1) = \mathbb{P}[X = 0, Y = 1] = \frac{12}{49}$

+------------------+-----------------+-----------------+------------------+
| $X~~\diagdown~Y$ | $0$             | $1$             | $\mathscr{L}(x)$ |
+==================+=================+=================+==================+
| $0$              | $\frac{16}{49}$ | $\frac{12}{49}$ | $\frac{4}{7}$    |
+------------------+-----------------+-----------------+------------------+
| $1$              | $\frac{12}{49}$ | $\frac{9}{49}$  | $\frac{3}{7}$    |
+------------------+-----------------+-----------------+------------------+
| $\mathscr{L}(Y)$ | $\frac{4}{7}$   | $\frac{3}{7}$   | $1$              |
+------------------+-----------------+-----------------+------------------+

$\mathbb{P}[X = 0] = \mathbb{P}[X = 0, Y = 0] + \mathbb{P}[X = 0, Y = 1] = \frac{16}{49} + \frac{12}{49} = \frac{28}{49} = \frac{4}{7}$

où $\mathscr{L}(X)$ est la loi marginale de $X$ et $\mathscr{L}(Y)$ est la loi marginale de $Y$.

*Sans remise:*

| $p(0, 0) = \frac{4}{7} \cdot \frac{3}{6} = \frac{2}{7}$
| $p(1, 0) = \frac{3}{7} \cdot \frac{4}{6} = \frac{2}{7}$
| $p(0, 1) = \frac{4}{7} \cdot \frac{3}{6} = \frac{2}{7}$
| $p(1, 1) = \frac{3}{7} \cdot \frac{2}{6} = \frac{1}{7}$

+------------------+---------------+---------------+------------------+
| $X~~\diagdown~Y$ | $0$           | $1$           | $\mathscr{L}(x)$ |
+==================+===============+===============+==================+
| $0$              | $\frac{2}{7}$ | $\frac{2}{7}$ | $\frac{4}{7}$    |
+------------------+---------------+---------------+------------------+
| $1$              | $\frac{2}{7}$ | $\frac{1}{7}$ | $\frac{3}{7}$    |
+------------------+---------------+---------------+------------------+
| $\mathscr{L}(Y)$ | $\frac{4}{7}$ | $\frac{3}{7}$ | $1$              |
+------------------+---------------+---------------+------------------+

**Remarque:**

| loi conjointe $\implies$ lois marginales
| lois marginales $\mathrel{\rlap{\hskip .5em/}}\Longrightarrow$ loi conjointe

## Notation

Soit un couple $(X, Y)$. Il y a deux cas possibles: le *cas discret* et le *cas continu.*

### Cas discret

$$\{(x, y) \mid p(x, y) = \mathbb{P}[X = x, Y = y]\}$$

+------------------+---------------+------------------+
| $X~~\diagdown~Y$ | $y_i \dots$   | $\mathscr{L}(x)$ |
+==================+===============+==================+
| $x_i$            | $p(x_i, y_i)$ |                  |
+------------------+---------------+------------------+
| $\vdots$         |               | $\vdots$         |
+------------------+---------------+------------------+
| $\mathscr{L}(Y)$ | $\dots$       | $1$              |
+------------------+---------------+------------------+

$$\mathbb{P}[(X, Y) \in B] = \sum\limits_{i, j: (x_i, y_i) \in B}p_{ij}$$


### Cas continu

$$f(x, y)$$

Densité 

$$\mathbb{R}^2 \to \mathbb{R} \begin{cases} f(x, y) \geq 0 \\ \iint\limits_{\mathbb{R}^2}f(x, y)\mathrm{d}x\mathrm{d}y \end{cases}$$

$$\mathbb{P}[(X, Y) \in [a, b] \times [c, d]] = \int\limits_a^b\int\limits_c^d f(x, y)\mathrm{d}x\mathrm{d}y$$

| Loi marginale de $X$: $f_x(x) = \int\limits_{-\infty}^{\infty}f(x, y)\mathrm{d}y$
| Loi marginale de $Y$: $f_y(y) = \int\limits_{-\infty}^{\infty}f(x, y)\mathrm{d}x$

| $\to F(x, y) = \mathbb{P}[X \leq x, Y \leq y]$

## Loi conditionnelle

### Exemple 

Une urne contient trois boules blanches et quatre boules noires. On tire deux boules. Soit $X$ et $Y$, deux variables aléatoires. Nous avons

| $X = \begin{cases}1 & \text{ si la première boule est blanche} \\ 0 & \text{ sinon}\end{cases}$
| $Y = \begin{cases}1 & \text{ si la deuxième boule est blanche} \\ 0 & \text{ sinon}\end{cases}$

Déterminer la loi conditionnelle de $Y$ sachant $X$.

+------------------+-----------------+-----------------+------------------+
| $X~~\diagdown~Y$ | $0$             | $1$             | $\mathscr{L}(x)$ |
+==================+=================+=================+==================+
| $0$              | $\frac{16}{49}$ | $\frac{12}{49}$ | $\frac{4}{7}$    |
+------------------+-----------------+-----------------+------------------+
| $1$              | $\frac{12}{49}$ | $\frac{9}{49}$  | $\frac{3}{7}$    |
+------------------+-----------------+-----------------+------------------+
| $\mathscr{L}(Y)$ | $\frac{4}{7}$   | $\frac{3}{7}$   | $1$              |
+------------------+-----------------+-----------------+------------------+

Loi conditionnelle de $Y \mid X = 0$:

+----------------+---------------+---------------+-----+
|                | $0$           | $1$           |     |
+================+===============+===============+=====+
| $p_{Y \mid X}$ | $\frac{4}{7}$ | $\frac{3}{7}$ | $1$ |
+----------------+---------------+---------------+-----+

$$\mathbb{P}[Y = 0 \mid X = 0] = \frac{\mathbb{P}[Y = 0, X = 0]}{\mathbb{P}[X = 0]} = \frac{\frac{16}{49}}{\frac{4}{7}} = \frac{4}{7}$$
$$\mathbb{P}[Y = 1 \mid X = 0] = \frac{\mathbb{P}[Y = 1, X = 0]}{\mathbb{P}[X = 0]} = \frac{\frac{12}{49}}{\frac{4}{7}} = \frac{3}{7}$$

Loi conditionnelle de $Y \mid X = 1$:

+----------------------------+---------------+---------------+
| $y_i$                      | $0$           | $1$           |
+============================+===============+===============+
| $\mathbb{P}_{Y \mid X =1}$ | $\frac{4}{7}$ | $\frac{3}{7}$ |
+----------------------------+---------------+---------------+

$$\mathbb{P}[Y = 0 \mid X = 1] = \frac{\mathbb{P}[Y = 0, X = 1]}{\mathbb{P}[X = 1]} = \frac{\frac{12}{49}}{\frac{3}{7}} = \frac{4}{7}$$
$$\mathbb{P}[Y = 1 \mid X = 1] = \frac{\mathbb{P}[Y = 1, X = 1]}{\mathbb{P}[X = 1]} = \frac{\frac{9}{49}}{\frac{3}{7}} = \frac{3}{7}$$

### Exemple

$$f_{Y \mid X = 0}(y) = \begin{cases}4y\mathrm{e}^{-2y} & \text{ si } y \geq 0 \\ 0 & \text{ sinon}\end{cases}$$

$$\mathbb{P}[Y \in {[1, 2]} \mid X = 0] = \int\limits_1^2 4y\mathrm{e}^{-2y}\mathrm{d}y = \dots$$
$$\mathbb{P}[Y = 1,5 \mid X = 0] = 0 \text{ (parce qu'il s'agit d'un cas continu)}$$
