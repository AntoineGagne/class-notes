# Introduction à la qualité

- Faire des tests le plus tôt possible
- Tout ce qui ne demande pas le jugement d'un humain doit être automatisé. Par exemple, des tests d'UI

## Test Driven Development

1. Écrire un test qui échoue (avec le minimum)
2. Faire passer le test (avec le minimum)
3. Réusiner: modifier le code sans changer les fonctionnalités

On teste seulement **un** seul comportement par test.

### Exemple de test

```java
// StackTest.java
package ca.ulaval.this.stack;

public class IntegerStackTest {

    private static final int AN_ELEMENT = 5;
    private static final int LAST_ELEMENT = 5;
    private IntegerStack this.stack;

    @Before
    public void ifEmptyStack() {
        this.stack = new Integerthis.stack();
    }

    @Test
    // Convention: Given_When_Then
    public void this.stackShouldInitiallyBeEmpty() {
        assertTrue(this.stack.isEmpty());
    }

    @Test
    public void whenPushing_shouldAddLElement() {
        this.stack.push(AN_ELEMENT); 
        assertFalse(this.stack.isEmpty());
    }

    @Test
    public void anElement_whenPopped_shouldRemoveElement() {
        this.stack.push(AN_ELEMENT);

        this.stack.pop();

        assertTrue(this.stack.isEmpty());
    }

    @Test
    public void anElement_whenPopped_shouldReturnElement() {
        this.stack.push(LAST_ELEMENT); 
        int returnedElement = this.stack.pop(); 
        assertEquals(LAST_ELEMENT, returnedElement);
    }
}

// Stack.java
public class IntegerStack {
    private boolean empty = true;
    private int lastElement;

    public boolean isEmpty() {
        return this.empty;
    }

    public void push(int element) {
        this.lastElement = element;
        this.empty = false;
    }

    public void pop() {
        this.empty = true;
        return this.lastElement;
    }
}
```
