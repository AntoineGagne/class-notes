# Automates à pile

## Correspondance avec les langages

Les langages auxquels les automates à pile correspondent sont les langages qui peuvent être générés par une grammaire *non-contextuelle*. Les règles qui régissent la grammaire d'un langage de programmation sont les règles d'une grammaire non-contextuelle.

## Fonctionnement

Un *automate à pile* possède un *ruban* séparé en cases. Chaque case est une lettre du mot d'entrée. Il y a une tête de lecture (ou *indicateur d'état*) pour se déplacer par la droite sur le ruban. Il y également une pile qui permet de conserver en mémoire un alphabet. Pour accéder au bas de la pile, il faut dépiler la pile jusqu'au symbole.

## Opérations

- Lire (consommer) un symbole (et avancer la tête de lecture)
- Dépiler un symbole
- Empiler un symbole
- Changer d'état

## Notation

On utilise la notation

$$(p, x, y; q, z)$$

où

| $p$ est l'état courant
| $x$ est le symbole à l'entrée
| $y$ est le symbole dépilé
| $q$ est le nouvel état
| $z$ est le symbole empilé

On est pas obligé d'empiler quelque chose. Si on n'empile rien, on met un $\epsilon$ à la place.

## Définition formelle

Un automate à pile est un sixtuplet $(S, \Sigma, \Gamma, T, \iota, F)$ où

| $S$ est un ensemble fini d'états
| $\Sigma$ est l'alphabet d'entrée (alphabet du ruban)
| $\Gamma$ est l'alphabet de la pile
| $T$ est un ensemble fini de transitions $T \subseteq S \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{\epsilon\}) \times S (\Gamma \cup \{\epsilon\})$
| $\iota \in S$ est l'état initial
| $F \subseteq S$ est l'ensemble des états finaux

## Acceptation

Pour qu'une séquence soit acceptée, il faut aboutir à un état résultant après avoir lu une séquence en entier. Contrairement à un automate fini, on peut rester à un état.

## Diagramme d'états

### Notation

Une transition est étiquetée $a, b; c$. Cette notation signifie que

| $a$ est le symbole lu sur le mot d'entrée
| $b$ est le symbole dépilé
| $c$ est le symbole empilé

### Symboles spéciaux

Les symboles suivants ont des significations spéciales:

| $\epsilon$ est le mot vide
| $\#$ est le marqueur de fond de pile. Il indique la fin de la pile.

On ne peut pas dépiler un symbole autre que le symbole précisé par l'étiquette de la transition (par exemple, si on a pas de $a$ et que la transition stipule qu'il faut dépiler un $a$, on ne peut pas procéder).

### Exemple^[Ancienne question d'examen final]


Soit le diagramme d'état suivant:

<div id='exemple-1-pushdown-automaton' style="height: 400px"></div>

<script type="text/javascript">
    (function () {
        const data = {
            "nodes": [
                {
                    "id": "0",
                    "label": "0",
                    "x": 0,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "1",
                    "label": "1",
                    "x": 1,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "2",
                    "label": "2",
                    "x": 2,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "4",
                    "label": "4",
                    "x": 3,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "3",
                    "label": "3 (accepting state)",
                    "x": 4,
                    "y": 0,
                    "size": 5
                }
            ],
            "edges": [
                {
                    "id": "edge-01",
                    "label": "ϵ, ϵ; #",
                    "source": "0",
                    "target": "1",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-12",
                    "label": "ϵ, ϵ; ϵ",
                    "source": "1",
                    "target": "2",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-22",
                    "label": "b, a; ϵ",
                    "source": "2",
                    "target": "2",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-24",
                    "label": "c, a; ϵ",
                    "source": "2",
                    "target": "4",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-42",
                    "label": "ϵ, a; ϵ",
                    "source": "4",
                    "target": "2",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-23",
                    "label": "ϵ, #; ϵ",
                    "source": "2",
                    "target": "3",
                    "size": 4,
                    "type": "curvedArrow"
                }
            ]
        };

        const exemple1AnfEpsilon = new sigma({
            graph: data,
            renderer: {
                container: 'exemple-1-pushdown-automaton',
                type: "canvas"
            },
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    })();
</script>

a) Dites si les séquences suivantes sont acceptées par l'automate à pile ci-dessus:
    1. $ab \to \text{oui}$
    2. $acc \to \text{non}$
    3. $aac \to \text{oui}$
    4. $aaacb \to \text{oui}$
b) Quel est le langage accepté par cet automate ?

Dénotons par $|x|_b$ et $|x|_c$ le nombre de $b$ et de $c$ dans le mot $x$. Le langage accepté par l'automate est

$$K = \{a^n x \mid n \in \mathbb{N} \land n = |x|_b + 2|x|_c\}$$

### Exemple de construction d'automate à pile

Construisez un automate à pile qui accepte les mots de la forme $x\$y$ où $x$ et $y$ appartiennent à $\{a, b\}^*$ et le nombre de $a$ dans $x$ est égal au nombre de $b$ dans $y$.

<div id='exemple-2-pushdown-automaton' style="height: 400px"></div>

<script type="text/javascript">
    (function () {
        const data = {
            "nodes": [
                {
                    "id": "0",
                    "label": "0",
                    "x": 0,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "1",
                    "label": "1",
                    "x": 1,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "2",
                    "label": "2",
                    "x": 2,
                    "y": 0,
                    "size": 5
                },
                {
                    "id": "3",
                    "label": "3 (accepting state)",
                    "x": 3,
                    "y": 0,
                    "size": 5
                }
            ],
            "edges": [
                {
                    "id": "edge-01",
                    "label": "ϵ, ϵ; #",
                    "source": "0",
                    "target": "1",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-11-1",
                    "label": "a, ϵ; a & b, ϵ; ϵ",
                    "source": "1",
                    "target": "1",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-12",
                    "label": "$, ϵ; ϵ",
                    "source": "1",
                    "target": "2",
                    "size": 4,
                    "type": "arrow"
                },
                {
                    "id": "edge-22-1",
                    "label": "a, ϵ; ϵ & b, a; ϵ",
                    "source": "2",
                    "target": "2",
                    "size": 4,
                    "type": "curvedArrow"
                },
                {
                    "id": "edge-23",
                    "label": "ϵ, #; ϵ",
                    "source": "2",
                    "target": "3",
                    "size": 4,
                    "type": "arrow"
                }
            ]
        };

        const exemple1AnfEpsilon = new sigma({
            graph: data,
            renderer: {
                container: 'exemple-2-pushdown-automaton',
                type: "canvas"
            },
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    })();
</script>

# Grammaires régulières

## Définition

Ensemble de règle qui permettent de *construire* les mots d'un langage. Les grammaires permettent de *générer* des langages.

## Définition formelle

Une grammaire est un quadruplet $(V, T, S, R)$ tel que

- $V$ est un ensemble fini de symboles non terminaux (alphabet non terminal)
- $T$ est un ensemble fini de symboles terminaux (alphabet terminal)
- $S \in V$ est le *symbole de départ* qu'on nomme aussi axiome ou symbole initial
- $R$ est un ensemble fini de règles de réécriture (ou productions ou règles de substitution). Elles sont formées d'un terme de gauche, d'une flèche ($\rightarrow$) et d,un terme de droite. Les termes gauche et droite peuvent être n'importe quelle combinaison de symboles de $V$ ou de $T$ pourvu qu'il y ait au moins un symbole de $V$ à gauche. Le côté droit peut être vide, ce qui est indiqué par un $\epsilon$. On parle alors de règle-$\epsilon$.

## Exemple

Voici une grammaire $(V, T, S, R)$ où 

| $V = \{S, A, B, C\}$
| $T = \{a, b, c\}$
| $S$ est le symbole de départ
| $R = \left\{ \begin{align} S &\rightarrow ASC \\ S &\rightarrow B \\ B &\rightarrow bB \\ B &\rightarrow \epsilon \\ A &\rightarrow a \\ C &\rightarrow c \end{align}\right\}$

**Note:** La règle $B \rightarrow \epsilon$ est une règle-$\epsilon$
