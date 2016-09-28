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

### Autre exemple

On souhaite démontrer que $K = \{xx \mid x \in \{a, b\}^*\}$ n'est pas régulier. Supposons que $K$ est régulier et donc que $K$ satisfait le lemme de pompage pour une certaine longueur de pompage $p \gt 0$. 

Quel que soit $p$, considérons le mot $w = a^pb^pa^pb^p$. Ce mot est de longueur $4p$ et appartient à $K$ donc il peut être &laquo; pompé &raquo; (c'est-à-dire décomposé selon les conditions du lemme de pompage).

Plus précisément, il existe $w = xyz$ tel que

1. $\lvert xy \rvert \le p$
2. $\lvert y \rvert \gt 0$
3. $xy^iz \in K$

Puisque $\lvert xy \rvert \le p$ et puisque les $p$ premiers symboles de $w$ sont des $a$, on sait que $y$ ne contient que des $a$ (Notez qu'on ne sait pas exactement combien de $a$ sont contenus dans $y$, on sait seulement qu'il y en a $j$ pour un certain $j$ compris entre $1$ et $p$).

Prenons $i = 2$. On a $xy^2z = xyyz = a^{p + j}b^pa^pb^p$, mais ce mot ne fait clairement pas partie du langage puisque $j > 0$. Cela contredit le lemme de pompage, donc $K$ n'est pas régulier.

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

Tant que la séquence est capable d'atteindre l'état acceptant, on dit que la séquence est acceptée et même si le mot fini sur un état non-acceptant.

### Déterminisation des AFN

Pour tout automate fini non-déterministe $N$, il existe un automate fini déterministe $D$ tel que $L(N) = L(D)$.

## Automates non-déterministes avec transitions $\epsilon$

### Définition

Un automate fini non-déterministe avec transitions $\epsilon$ (abrégé $\epsilon$-AFN) est un automate fini non-déterministe auquel on rajoute des transitions de la forme ($p$, $\epsilon$, $q$). Ces transitions peuvent être utilisées à volonté et permettent de « sauter » d'un état $p$ à un état $q$.

### Théorème

Pour tout $\epsilon$-AFN $N$, il existe un automate fini déterministe $D$ tel que $L(N) = L(D)$.

### Exemple

<div id='exemple-1-epsilon-afn' style="height: 400px"></div>

<script type="text/javascript">
    (function () {
        const data = {
            "nodes": [
                {
                    "id": "a",
                    "label": "A",
                    "x": 0,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "b",
                    "label": "B",
                    "x": 1,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "c",
                    "label": "C",
                    "x": 2,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "d",
                    "label": "D",
                    "x": 0,
                    "y": 1,
                    "size": 5
                }
            ],
            "edges": [
                {
                    "id": "edge-ab",
                    "label": "a, ϵ",
                    "source": "a",
                    "target": "b",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-bc",
                    "label": "b",
                    "source": "b",
                    "target": "c",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-cb",
                    "label": "a",
                    "source": "c",
                    "target": "b",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-ad",
                    "label": "b",
                    "source": "a",
                    "target": "d",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-bd",
                    "label": "a",
                    "source": "b",
                    "target": "d",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-dd",
                    "label": "a, b",
                    "source": "d",
                    "target": "d",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-bb",
                    "label": "a",
                    "source": "b",
                    "target": "b",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-cc",
                    "label": "b",
                    "source": "c",
                    "target": "c",
                    "size": 4,
                    "type": "curvedArrow"
                }
            ]
        };

        const exemple1AnfEpsilon = new sigma({
            graph: data,
            renderer: {
                container: 'exemple-1-epsilon-afn',
                type: "canvas"
            },
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    })();
</script>

Le mot $bb$ est accepté car on peut passer de l'état initial $A$ à l'état $B$ en utilisant la $\epsilon$-transition.
