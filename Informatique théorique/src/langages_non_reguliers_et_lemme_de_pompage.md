# Langages non-réguliers et lemme de pompage

## Lemme de pompage

Si $L$ est un langage régulier alors il existe un entier $p \gt 0$ (appelé longueur de pompage) telle que pour tout mot $w$ dans $L$ avec $\lvert w \rvert \ge p$, il existe des mots $x$, $y$ et $z$ tels que $w = xyz$ et

1. $\lvert xy \rvert \le p$
2. $\lvert y \rvert \gt 0$ (ce qui revient à dire $y \neq \epsilon$)
3. Pour tout $i \ge 0$, on a $xy^iz \in L$
