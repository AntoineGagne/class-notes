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
