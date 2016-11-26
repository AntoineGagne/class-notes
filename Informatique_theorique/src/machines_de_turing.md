# Machines de Turing

## Définition

Une machine de Turing est un septuplet $(S, \Sigma, \Gamma, \delta, q_0, q_{\mathrm{acc}}, q_{\mathrm{rej}})$ où

| $S$ est un ensemble fini d'états
| $\Sigma$ est l'alphabet de la machine ou alphabet d'entrée (les séquences d'entrée sont formées avec cet alphabet.) L'espace libre (ou blanc), symbolisé par $‿$ (`U+203F`) ne fait pas partie de $\Sigma$, i.e. qu'on a $‿ \not\in \Sigma$
| $\Gamma$ est l'alphabet du ruban, on a $\Sigma \subseteq \Gamma$ et $‿ \in \Gamma$
| $\delta$ est la fonction de transition tel que

$$\delta : (S \setminus \left\{q_{\mathrm{acc}}, q_{\mathrm{rej}}\right\} \times \Gamma \rightarrow S \times \Gamma \times \left\{L, R\right\})$$

La signification de $\delta$ est la suivante:

| $\delta \left(p, x\right) = \left(q, y, L\right)$ (où $y \in \Gamma$): si dans l'état $p$ le symbole sous la tête est $x$, remplacer $x$ par $y$, passer dans l'état $q$ et déplacer la tête de lecture vers la gauche
| $\delta \left(q, y, R\right)$ (où $y \in \Gamma$): si dans l'état $p$ le symbole sous la tête est $x$, remplacer $x$ par $y$, passer dans l'état $q$ et déplacer la tête de lecture vers la droite

**Note:** Puisque $\delta$ est une fonction, la définition précédente est celle d'une machine déterministe, i.e. non ambiguë et totalement définie (les états $q_{\mathrm{acc}}$ et $q_{\mathrm{rej}}$, d'où n'origine aucune transition, ont été enlevés de $S$ avant de former le produit cartésien qui est le domaine de $\delta$)

| $q_0$ est l'état initial. Dans les diagrammes de transitions, il sera indiqué par une flèche entrante
| $q_{\mathrm{acc}}$ est l'état acceptant. Dans les diagrammes de transitions, il sera indiqué par un double cercle
| $q_{\mathrm{rej}}$ est l'état rejetant. Dans les diagrammes de transitions, il sera indiqué par un cercle plein noir

Les états $q_{\mathrm{acc}}$ et $q_{\mathrm{rej}}$ sont appelés états d'arrêts. Dès qu'un de ces états est atteint, la machine de Turing s'arrête.

## Procédure d'une machine de Turing

1. Lit un symbole
2. Fait une transition d'état (elle peut rester dans le même état)
3. Écrit un symbole (possiblement le même que celui qui était déjà présent)
4. Déplace la tête de lecture d'une case vers la droite ou d'une case vers la gauche

## Diagrammes de transition

Les diagrammes de transition pour les machines de Turing auront donc des flèches étiquetées par des triplets formés

- Du symbole lu sur la case active du ruban
- Du (possible nouveau) symbole que la machine inscrit sur cette case
- De la direction (*Left*, *Right*) du déplacement

### Exemple

Prenons l'alphabet d'entrée $\left\{0, 1\right\}$ et l'alphabet de ruban $\left\{0, 1, \#, ‿\right\}$. Construisons un groupe d'états d'une machine de Turing qui a l'effet suivant:

En partant de la configuration initiale sur un mot non-vide, la machine écrit $\#$ dans la première case puis décale toute la séquence d'entrée d'une case vers la droite.

Voici le diagramme de transitions de cette machine de Turing:

<div id='exemple-1-turing-machine' style="height: 400px"></div>

<script type="text/javascript">
    (function () {
        const data = {
            "nodes": [
                {
                    "id": "q0",
                    "label": "q₀",
                    "x": 0,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "A",
                    "label": "A",
                    "x": 0.5,
                    "y": 0.5,
                    "size": 5
                },
                {
                    "id": "B",
                    "label": "B",
                    "x": 0.5,
                    "y": -0.5,
                    "size": 5
                },
                {
                    "id": "C",
                    "label": "C",
                    "x": 1,
                    "y": 0,
                    "size": 5
                }
            ],
            "edges": [
                {
                    "id": "edge-q0A",
                    "label": "0; #, R",
                    "source": "q0",
                    "target": "A",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-AA",
                    "label": "0; 0, R",
                    "source": "A",
                    "target": "A",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-q0B",
                    "label": "1; #, R",
                    "source": "q0",
                    "target": "B",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-BB",
                    "label": "1; 1, R",
                    "source": "B",
                    "target": "B",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-AB",
                    "label": "1; 0, R",
                    "source": "A",
                    "target": "B",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-BA",
                    "label": "0; 1, R",
                    "source": "B",
                    "target": "A",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-AC",
                    "label": "‿; 0, R",
                    "source": "A",
                    "target": "C",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-BC",
                    "label": "‿; 1, R",
                    "source": "B",
                    "target": "C",
                    "size": 4,
                    "type": "arrow"
                }
            ]
        };

        const exemple1AnfEpsilon = new sigma({
            graph: data,
            renderer: {
                container: 'exemple-1-turing-machine',
                type: "canvas"
            },
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    })();
</script>

La suite de configuration est la suivante:

$$\begin{align}
    &q_0 0  1 0     \\
    &\#  A  1 0     \\
    &\#  0  B 0     \\
    &\#  0  1 A ‿   \\
    &\#  0  1 0 C ‿ 
\end{align}$$

## Différences avec les différents type d'automates

### Différences avec les automates à pile

- La machine de Turing n'a pas accès à une pile
- Son mécanisme de mémoire se trouve sur le ruban
- Il serait possible de simuler la pile avec le ruban

### Différences avec les automates finis

1. La tête peut se déplacer dans les deux sens
2. C'est une tête de lecture/écriture
3. Il y a un seul état acceptant, qui est un état d'arrêt (aussitôt que la machine l'atteint, elle s'arrête)
4. Il y a un état rejetant qui est aussi un état d'arrêt

## Acceptation et rejet

### Définition de l'acceptation

Une machine de Turing accepte l'entrée $w$ s'il existe une série de configurations $C_1, \dots, C_k$ telle que

1. $C_1$ est la configuration initiale $q_0w$
2. Chaque $C_i$ engendre $C_{i + 1}$
3. $C_k$ est une configuration dont l'état est $q_{\mathrm{acc}}$

$L\left(M\right) = \left\{w \mid M \text{ accepte } w \right\}$ est le langage accepté (ou reconnu) par $M$. Si $L = L\left(M\right)$ pour une machine de Turing $M$, on dit que $L$ est *Turing-acceptable*, *Turing-reconnaissable* ou *récursivement énumérable*.

### Définition du rejet

Une machine de Turing rejette (explicitement) l'entrée $w$ s'il existe une série de configurations $C_1, \dots, C_k$ telle que

1. $C_1$ est la configuration initiale $q_0w$
2. Chaque $C_i$ engendre $C_{i + 1}$
3. $C_k$ est une configuration dont l'état est $q_{\mathrm{rej}}$

## Exemple d'un langage Turing-reconnaissable

Nous voulons montrer que le langage $L = \left\{a^nb^nc^n \mid n \in \mathbb{N}\right\}$ est Turing-reconnaissable. 

La stratégie sera la suivante: 

1. S'assurer que le mot est de la bonne forme (bloc de $a$, puis bloc de $b$, puis bloc de $c$)
2. Comparer un par un les symboles existants

La transition $q_0 \rightarrow q_{\mathrm{acc}}$ permet d'accepter le mot vide $\epsilon$.
Le rôle des états 1 à 4 est d'assurer que la séquence d'entrée est bien de la forme $a^kb^nc^m$.

**Note:** Toutes les transitions manquantes vont vers l'état $q_{\mathrm{rej}}$, mais sont omises pour simplifier la présentation de la machine.

<div id='exemple-2-2-turing-machine' style="height: 400px"></div>

<script type="text/javascript">
    (function () {
        const data = {
            "nodes": [
                {
                    "id": "q0",
                    "label": "q₀",
                    "x": 0,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "1",
                    "label": "1",
                    "x": 0.5,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "2",
                    "label": "2",
                    "x": 1,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "3",
                    "label": "3",
                    "x": 1.5,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "4",
                    "label": "4",
                    "x": 1.5,
                    "y": -0.5,
                    "size": 5
                },
                {
                    "id": "5",
                    "label": "5",
                    "x": 1,
                    "y": -0.5,
                    "size": 5
                },
                {
                    "id": "6",
                    "label": "6",
                    "x": 0.5,
                    "y": -0.5,
                    "size": 5
                },
                {
                    "id": "7",
                    "label": "7",
                    "x": 1.25,
                    "y": -1,
                    "size": 5
                },
                {
                    "id": "8",
                    "label": "8",
                    "x": 1.25,
                    "y": -1.5,
                    "size": 5
                },
                {
                    "id": "9",
                    "label": "9",
                    "x": 0.75,
                    "y": -1.5,
                    "size": 5
                },
                {
                    "id": "qacc",
                    "label": "qₐ (état acceptant)",
                    "x": 0,
                    "y": -1.5,
                    "size": 5
                },
            ],
            "edges": [
                {
                    "id": "edge-q01",
                    "label": "a; $, R",
                    "source": "q0",
                    "target": "1",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-11",
                    "label": "a; a, R",
                    "source": "1",
                    "target": "1",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-12",
                    "label": "b; b, R",
                    "source": "1",
                    "target": "2",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-22",
                    "label": "b; b, R",
                    "source": "2",
                    "target": "2",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-23",
                    "label": "c; c, R",
                    "source": "2",
                    "target": "3",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-33",
                    "label": "c; c, R",
                    "source": "3",
                    "target": "3",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-34",
                    "label": "‿; ‿, L",
                    "source": "3",
                    "target": "4",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-44",
                    "label": "a; a, L ⋁ b; b, L ⋁ c; c, L ⋁ B; B, L ⋁ C; C, L",
                    "source": "4",
                    "target": "4",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-47",
                    "label": "A; A, R",
                    "source": "4",
                    "target": "7",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-75",
                    "label": "a; A, R",
                    "source": "7",
                    "target": "5",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-78",
                    "label": "B; B, R",
                    "source": "7",
                    "target": "8",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-88",
                    "label": "B; B, R",
                    "source": "8",
                    "target": "8",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-89",
                    "label": "C; C, R",
                    "source": "8",
                    "target": "9",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-99",
                    "label": "C; C, R",
                    "source": "9",
                    "target": "9",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-9qacc",
                    "label": "‿; ‿, R",
                    "source": "9",
                    "target": "qacc",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-q0qacc",
                    "label": "‿; ‿, R",
                    "source": "q0",
                    "target": "qacc",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-45",
                    "label": "$; A, R",
                    "source": "4",
                    "target": "5",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-55",
                    "label": "a; a, R ⋁ B; B, R",
                    "source": "5",
                    "target": "5",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-56",
                    "label": "b; B, R",
                    "source": "5",
                    "target": "6",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-66",
                    "label": "b; b, R ⋁ C; C, R",
                    "source": "6",
                    "target": "6",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-64",
                    "label": "c; C, L",
                    "source": "6",
                    "target": "4",
                    "size": 4,
                    "type": "curvedArrow"
                },
            ]
        };

        const exemple1AnfEpsilon = new sigma({
            graph: data,
            renderer: {
                container: 'exemple-2-2-turing-machine',
                type: "canvas"
            },
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    })();
</script>

Après avoir traversé le cycle 4, 5 et 6 une fois, le ruban contient une séquence de la forme $Aa^{k - 1}Bb^{n - 1}Cc^{m - 1}$. On veut maintenant remplacer le second $a$ par $A$, le second $b$ par $B$ et le second $c$ par $C$.

La boucle autour de l'état 4 ramène la machine au dernier $A$. La séquence d'états 4, 5 et 7 transforme un nouveau $a$ en $A$. La boucle autour de l'état 5 amène au prochain $b$ à transformer en $B$. Celle autour de l'état 6 amène au prochain $c$ à transformer en $C$.

## Résultats possibles sur une entrée

Pour une entrée $w$, trois résultats sont possibles:

1. Acceptation de la séquence
2. Rejet explicite de la séquence
3. Exécution infinie

Le langage accepté est le langage $L_a$. Le complément de $L_a$ est l'ensemble des mots qui ne sont pas acceptés, c'est-à-dire $L_r \cup L_i$.

**Note:** Notez que l'ensemble des mots acceptés n'est pas le complément de l'ensemble des mots rejetés.

## Avantages et désavantages des MT

- Simplicité du modèle. Chaque instruction est vraiment réduite à sa plus simple expression
- Malgré la simplicité, possède une très grande puissance de calcul
- Défaut résultant: pour décrire avec une machine de Turing un processus compliqué, la machine est forcément très complexe
