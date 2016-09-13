# Introduction à la qualité

- Faire des tests le plus tôt possible
- Tout ce qui ne demande pas le jugement d'un humain doit être automatisé. Par exemple, des tests d'UI

## Test Driven Development

1. Écrire un test qui échoue (avec le minimum)
2. Faire passer le test (avec le minimum)
3. Réusiner: modifier le code sans changer les fonctionnalités

On teste seulement **un** seul comportement par test, mais il peut y avoir plusieurs `assert` dans le test. Selon le CQS, une méthode devrait seulement être soit une *query/request* ou une commande.

### Exemple de test

```java
// StackTest.java
package ca.ulaval.IntegerStack;

public class IntegerStackTest {

    private static final int ONE_ELEMENT = 5;
    private static final int LAST_ELEMENT = 5;
    private static final int FIRST_ELEMENT = 4;
    private IntegerStack stack;

    @Before
    public void ifEmptyStack() {
        this.stack = new Integerthis.stack();
    }

    @Test
    public void stackShouldInitiallyBeEmpty() {
        assertTrue(this.stack.isEmpty());
    }

    @Test
    public void whenPushing_shouldAddLElement() {
        this.stack.push(ONE_ELEMENT); 
        assertFalse(this.stack.isEmpty());
    }

    @Test
    // Convention: Given_When_Then
    public void anElement_whenPopped_shouldRemoveElement() {
        this.stack.push(ONE_ELEMENT);

        this.stack.pop();

        assertTrue(this.stack.isEmpty());
    }

    @Test
    public void anElement_whenPopped_shouldReturnElement() {
        this.stack.push(FIRST_ELEMENT);
        this.stack.push(LAST_ELEMENT); 

        int firstPop = this.stack.pop(); 
        int secondPop = this.stack.pop();

        assertEquals(LAST_ELEMENT, firstPop);
        assertEquals(FIRST_ELEMENT, secondPop);
    }

    @Test(expected = NoElementException.class)
    public void empty_whenPopped_throwNoElementException() {
    }
}

// Stack.java
public class IntegerStack {
    private boolean empty = true;
    private int lastElement;
    private List<Integer> elements = new ArrayList<>();

    public boolean isEmpty() {
        return this.empty;
    }

    public void push(int element) {
        this.lastElement = element;
        this.empty = false;
    }

    public void pop() {
        this.vide = true;
        int index = this.elements.size() - 1;
        Integer element = this.elements.get(index);
        this.elements.remove(0);
        return this.elements;
    }
}
```

## Tests unitaires

### Définition

- Vide à répondre à la question: est-ce que le produit est construit correctement
- Test ciblé et bas-niveau d'une unité
- Un test unitaire est isolé
