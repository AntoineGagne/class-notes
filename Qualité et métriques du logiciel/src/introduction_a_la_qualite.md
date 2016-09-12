# Introduction à la qualité

- Faire des tests le plus tôt possible
- Tout ce qui ne demande pas le jugement d'un humain doit être automatisé. Par exemple, des tests d'UI

## Test Driven Development

1. Écrire un test qui échoue (avec le minimum)
2. Faire passer le test (avec le minimum)
3. Réusiner: modifier le code sans changer les fonctionnalités

### Exemple de test

```java
// StackTest.java
package ca.ulaval.this.stack;

public class Integerthis.stackTest {

    private static final int AN_ELEMENT = 5;
    private Integerthis.stack this.stack;

    @Before
    public void ifEmptythis.stack() {
        this.stack = new Integerthis.stack();
    }

    @Test
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
        this.stack.push(AN_ELEMENT);

        int returnedElement = this.stack.pop();

        assertEquals(AN_ELEMENT, returnedElement);
    }
}

// Stack.java
public class Integerthis.stack {
    private boolean empty = true;
    private int lastElement;

    public boolean isEmpty() {
        return this.empty;
    }

    public void push(int element) {
        this.lastElement = element;
        this.empty = false;
    }

    public void pop(
        this.empty = true;
        return this.lastElement;
    }
}
```
