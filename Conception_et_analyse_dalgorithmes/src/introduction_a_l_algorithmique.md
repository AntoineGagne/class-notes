% Conception et analyse d'algorithmes
% Antoine Gagné

Les objectifs du cours sont les suivants:

- Maîtriser les outils mathématiques indispensables à l'analyse des algorithmes comme la notation asymptotique.
- Maîtriser les différentes techniques d'analyse de l'efficacité des algorithmes comme l'analyse en pire cas, en meilleur cas, en cas moyen et l'analyse amortie.
- Maîtriser les différentes techniques de conception d'algorithmes comme l'approche diviser pour régner, diminuer pour régner, transformer pour régner, programmation dynamique, approche vorace.
- Connaître les limitations de l'approche algorithmique.

# Introduction à l'algorithmique

## Le concept d'algorithme

### Plus grand commun diviseur

#### Force brute

```python
if n = 0:
    return m
else:
    t = n
    while m mod t != 0 or n mod t != 0:
        t = t - 1
    return t
```

| $T_{BEST} = 0$
| $T_{WORST} = n = 2^{\log_{2}(n + 1)} \geq \frac{1}{2} 2^{\log_{2}n} + 1 = \frac{1}{2}2^{b}$

Plus petit nombre à $b$ bits:

$100000 = 2^{b - 1}$

Plus grand nombre à $b$ bits

$111111 = 2^b - 1$

$$\begin{align}
2^{b -  1} \leq n < 2^b \\
b - 1 \leq \log_{2}n < b \\
\log_{2}n = b - 1 \\
b = \left\lfloor \log_{2}(n + 1) \right\rfloor
\end{align}$$

$$\begin{align}
2^{b - 1} \leq n \leq 2^b - 1 \\
2^{b - 1} < n + 1 \leq 2^b \\
b - 1 < \log_2(n + 1) \leq b \\
b = \left\lceil \log_{2}(n + 1) \right\rceil = \left\lfloor \log_{2}(n + 1) \right\rfloor
\end{align}$$

#### Approche plus intelligente

**Théorème**
:   $\mathrm{PGCD}(m, n) = \mathrm{PGCD}(n, m \mod n)$

**Démonstration:** Soit $d$ est un diviseur de $m$ et $n$. 

1.
$$\exists s, t \in \mathbb{N} \implies \frac{m}{d} = s \iff m = sd \land \frac{n}{d} = t \iff n = td$$
$$\begin{align}
m \bmod n &= m - \left\lfloor \frac{m}{n} \right\rfloor n \\
m \bmod n &= sd - \left\lfloor \frac{m}{n} \right\rfloor td \\
m \bmod n &= d\left(s - \left\lfloor \frac{m}{n} \right\rfloor t\right)
\end{align}$$

Alors $t$ est diviseur de $m \mod n$.

2.
$$\exists p, q \in \mathbb{N} \implies m \bmod n = pe \land n = qe$$
$$\begin{align}
m \bmod n &= m - \left\lfloor \frac{m}{n} \right\rfloor n \\
m &= m \bmod n + \left\lfloor \frac{m}{n} \right\rfloor n \\
m &= pe + \left\lfloor \frac{m}{n} \right\rfloor qe \\
m &= e\left(p + \left\lfloor \frac{m}{n} \right\rfloor q\right)
\end{align}$$

Alors $e$ est diviseur de $m$.

##### Temps d'exécution

$\forall m \geq n \land m \bmod n < \frac{m}{2}$

1.
$$\begin{align}
n &> \frac{m}{2} \land m &\geq n \\
2 &> \frac{m}{n} \land \frac{m}{n} &\geq 1
\end{align}$$

$\implies 1 \leq \frac{m}{n} < 2 \land \left\lfloor \frac{m}{n} \right\rfloor = 1$

$m \bmod n = m - \left\lfloor \frac{m}{n} \right\rfloor n = m - n < m - \frac{m}{2} = \frac{m}{2}$

2. $n \leq \frac{m}{2}$

$$m \bmod n \leq n - 1 < n \leq \frac{m}{2}$$
