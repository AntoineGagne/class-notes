# Variable aléatoire et distribution: le cas multidimensionnel

**Exemple:** Une urne contient trois boules blanches et quatre boules noires. On tire deux boules de l'urne. Soit les variables aléatoires suivantes:

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
