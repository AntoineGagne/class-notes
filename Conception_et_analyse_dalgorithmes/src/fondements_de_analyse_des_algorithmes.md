# Fondements de l'analyse des algorithmes

- L'espace mémoire est bornée par le temps d'exécution
- On s'intéresse beaucoup à l'accès disque, car il est plus lent
- Temps d'exécution moyen:

$$C_{\mathrm{AVG}}(n) = \sum\limits_{x: \left|x\right| = n}\mathbb{P}[x]C(x)$$

**Exemple:** Recherche séquentielle^[Il y a $n + 1$ instances (élément est dans le tableau et élément pas dans le tableau)]

$$\begin{align*}
    C_{\mathrm{AVG}} &= \sum\limits_{x: \left|x\right| = n} \mathbb{P}[x] C(x) \\
                  &= \underbrace{p C_{\mathrm{AVG}}(n)}_{k \in A} + \underbrace{(1 - p) C_{\mathrm{AVG}}(n)}_{k \not\in A} \\
                  &= p \sum\limits_{j = 0}^{n - 1} \mathbb{P}[A[j] = k] C(A[j] = k) + \underbrace{\left(1 - p\right)C_{\mathrm{AVG}}(n)}_{\text{Il y a une seule instance dans ce cas}} \\
                  &= p \sum\limits_{j = 0}^{n - 1}\frac{1}{n}\left(j + 1\right) + \left(1 - p\right)n \\
                  &= \frac{p}{n}\sum\limits_{j = 0}^{n - 1}\left(j + 1\right) + \left(1 - p\right)n \\
                  &= \frac{p}{n}\sum\limits_{j = 1}^{n}{j} + \left(1 - p\right)n \\
                  &= \frac{pn\left(n + 1\right)}{2n} + \left(1 - p\right)n \\
                  &= \frac{p\left(n + 1\right)}{2n} + \left(1 - p\right)n \\
                  &= \frac{p\left(n + 1\right)}{2} + \left(1 - p\right)n
\end{align*}$$

## Notation O

$$O(n) = \left\{t(n) \mid \exists c \, \exists n_0 \implies t(n) \leq cg(n) \qquad{} \forall n \geq n_0\right\}$$

**Exemple:** Démontrons^[Important !]

**Exemple:** Démontrons

**Exemple:** Démontrons
