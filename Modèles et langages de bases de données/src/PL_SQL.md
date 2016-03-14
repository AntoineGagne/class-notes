# SQL avancé

Le SQL, contrairement aux autres langages, est un langage déclaratif. Pour introduire des concepts de
langages de programmation, le standard du SQL a été mis à jour. Cette extension ce nomme le **PL/SQL**.
Un programme **PL/SQL** comporte un maximum de trois parties:

- Une partie optionnelle de déclaration dans laquelle les variables, constantes, curseurs et exceptions
sont déclarés
- Une partie d'exécution obligatoire dans laquelle les variables sont manipulées
- Une partie optionnelle pour les exceptions pour gérer les exceptions lancées lors de la partie
d'exécution

Un programme a la structure suivante:

```SQL
[DECLARE             -- Optionnel
    -- Déclarations]
BEGIN                -- Obligatoire
    -- Clauses exécutables
[EXCEPTION           -- Optionnel
    -- Gestionnaire d'exceptions]
END;                 -- Obligatoire
```

## Déclaration

Les variables et constantes doivent être déclarées avant de pouvoir être utilisées dans d'autres
clauses ou déclarations. 

### Les annotations `%TYPE` et `%ROWTYPE`

L'annotation `%TYPE` permet de dire au programme que la variable a le même type qu'une autre variable
ou colonne. De manière similaire, l'annotation `%ROWTYPE` permet de dire qu'une variable a le même
type qu'une rangée entière d'une table.[^1]

[^1]: Il est important de se rappeler que ces annotations sont propres aux bases de données *Oracle*.

### Exemples

Dans cette section, nous allons voir des exemples de déclarations.

#### Exemple de déclarations normales

```SQL
vStaffNo VARCHAR2(5);
vRent NUMBER(6, 2) NOT NULL := 600;
MAX_PROPERTIES CONSTANT NUMBER := 100;
```

#### Exemple d'utilisations de l'annotation `%TYPE`

```SQL
vStaff Staff.staffNo%TYPE;
vStaffNo1 vStaffNo%TYPE;
```

#### Exemple d'utilisations de l'annotation `%ROWTYPE`

```SQL
vStaffRec Staff%ROWTYPE;
```

## Assignation

Les variables peuvent être assignées de deux façons:

1. En utilisant l'opérateur d'assignation (`:=`)
2. En utilisant le résultat d'un `SELECT` ou d'un `FETCH`

Dans le SQL standard, l'assignation se fait en utilisant le mot clé `SET` avec l'opérateur `=`.

### Exemples

Dans cette section, nous allons voir des exemples d'assignation.

#### Exemple d'assignation avec un `SELECT`

```SQL
SELECT COUNT(*) INTO x
  FROM PropertyForRent
  WHERE staffNo = vStaffNo;
```

#### Exemple d'assignations avec l'opérateur `:=`

```SQL
vStaffNo := 'SG14';
vRent := 500;
```

En SQL standard, nous écririons 

```SQL
SET vStaffNo = 'SG14';
SET vRent = 500;
```

## Clauses de contrôle

Le PL/SQL supporte les clauses de contrôle conditionnelles, itératives et séquentielles.

### L'énoncé conditionnel `IF`

L'énoncé conditionnel `IF` a la forme suivante:

```SQL
IF (condition) THEN
    <SQL statement list>
[ELSIF (condition) THEN <SQL statement list>]
[ELSE <SQL statement list>]
END IF;
```

#### Exemple d'utilisation du `IF`

```SQL
IF (position = 'Manager') THEN
    salary := salary * 1.05;
ELSE
    salary := salary * 1.03;
END IF;
```

### L'énoncé conditionnel `CASE`

L'énoncé conditionnel `CASE` permet la sélection d'un chemin d'exécution basé sur un ensemble
d'alternatives. Il a la forme suivante:

```SQL
CASE(operand)
[WHEN (whenOperandList) | WHEN (searchCondition)
    THEN <SQL statement list>]
[ELSE <SQL statement list>]
END CASE;
```

#### Exemple d'utilisation du `CASE`

```SQL
CASE lowercase(x)
    WHEN 'a'        
        THEN x := 1;
    WHEN 'b'        
        THEN x := 2;
             y := 0;
    WHEN 'default'  
        THEN x := 3;
END CASE;
```

```SQL
UPDATE Staff
SET salary = CASE
    WHEN position = 'Manager'
        THEN salary * 1.05
    ELSE
        THEN salary * 1.02
END;
```

### Énoncés itératifs

Dans cette section, nous allons voir les différents énoncés itératifs.

#### Énoncé `LOOP`

L'énoncé `LOOP` a la forme suivante:

```SQL
[labelName:]
LOOP
    <SQL statement list>
    EXIT [labelName] [WHEN (condition)]
END LOOP [labelName];
```

Il est bon de noter que le standard SQL spécifie `LEAVE` au lieu de `EXIT WHEN (condition)`.

##### Exemple

```SQL
x := 1;
myLoop:
LOOP
    x := x + 1;
    IF (x > 3) THEN
        EXIT myLoop; -- Exit loop immediately
END LOOP myLoop;

-- Control resumes here
y := 2;
```

#### Énoncé `WHILE` et `REPEAT`

L'énoncé `WHILE` a la forme suivante:

```SQL
WHILE (condition) LOOP
    <SQL statement list>
END LOOP [labelName];
```

L'énoncé `REPEAT` a la forme suivante:

```SQL
WHILE (condition) DO
    <SQL statement list>
END WHILE [labelName];
REPEAT
    <SQL statement list>
UNTIL (condition)
END REPEAT [labelName];
```

Il est bon de noter que l'énoncé `REPEAT` n'a pas d'équivalent dans le PL/SQL.

#### Énoncé `FOR`

L'énoncé `FOR` a la forme suivante dans le PL/SQL:

```SQL
FOR indexVariable
    IN [REVERSE] lowerBound .. upperBound LOOP
    <SQL statement list>
END LOOP [labelName];
```

Dans le standard SQL, il a la forme suivante:

```SQL
FOR indexVariable
    AS querySpecification DO
    <SQL statement list>
END FOR [labelName];
```

##### Exemple

Voici un exemple d'une boucle `FOR` dans le PL/SQL:

```SQL
DECLARE
    numberOfStaff NUMBER;
SELECT COUNT(*) INTO numberOfStaff
    FROM PropertyForRent
    WHERE staffNo = 'SG14';
myLoop1:
FOR iStaff IN 1 .. numberOfStaff LOOP
    -- Statements
END LOOP myLoop1;
```

Voici un exemple dans le SQL standard:

```SQL
myLoop1:
FOR iStaff AS SELECT COUNT(*)
    FROM PropertyForRent
    WHERE staffNo = 'SG14' DO
    -- Statements
END FOR myLoop1;
```

## Exceptions

Une **exception** dans le PL/SQL est un identifieur lancé lors de l'exécution d'un bloc et qui va terminer
les actions du programme. Un block va toujours se terminer lorsqu'une exception est lancée. Toutefois, un
gestionnaire d'exception peut toutefois exécuter des dernières opérations. Il est possible de soulever des
exceptions en utilisant le mot clé `RAISE`. Une exception est définie dans le bloc déclaratif d'un 
programme PL/SQL.

### Exemple d'exceptions

#### Exemple 1

```SQL
DECLARE
    vpCount NUMBER;
    vStaffNo PropertyForRent.staffNo%TYPE := 'SG14';
-- Define an exception for the enterprise constraint that prevents a member of staff
-- from managing more than 100 properties
    e_too_many_properties EXCEPTION;
    PRAGMA_EXCEPTION_INIT(e_too_many_properties, -20000);
BEGIN
    SELECT COUNT(*) INTO vpCount
    FROM PropertyForRent
    WHERE staffNo = vStaffNo;
    IF vpCount = 100
-- Raise an exception for the general constraint
        RAISE e_too_many_properties;
    END IF;
    UPDATE PropertyForRent 
        SET staffNo = vStaffNo
        WHERE propertyNo = 'PG4';
EXCEPTION
-- Handle the exception for the general constraint
    WHEN e_too_many_properties THEN
        dbms_output.put_line('Member of staff' || staffNo || 'already managing 100 properties');
END;
```

#### Exemple 2

```SQL
DECLARE
    vNameEt VARCHAR2(30);
BEGIN
    SELECT prenomEt || ' ' || nomEt
    INTO vNameEt
    FROM Etudiant
    WHERE idEtudiant = 123456;
    dbms_output.put_line('Le nom de ' || 'l''etudiant est ' || vName);
EXCEPTION
    when no_data_found THEN
    dbms_output.put_line('Il n''y a pas ' || 'd''etudiant avec le numero 123456');
END;
```

## Curseurs

Un `SELECT` ne peut être utilisé que si la requête ne retourne qu'une seule et unique ligne.
Pour gérer une requête qui peut retourner un nombre arbitraire de rangées, le PL/SQL utilise les
**curseurs**. Les curseurs agissent comme des pointeurs sur une rangée particulière d'une 
requête. Un curseur peut être incrémenté pour accéder aux prochaines rangées. Un curseur doit être
*déclaré* et *ouvert* avant de pouvoir être utilisé et il doit être *fermé* après qu'il ne soit plus
utilisé. Les rangées d'une requête peuvent être accédées en utilisant un `FETCH` sur le curseur.

Un curseur possède quelques fonctions tel que:

- `%FOUND`: Retourne vrai si le `FETCH` le plus récent retourne une rangée.
- `%NOTFOUND`: Retourne faux si le `FETCH` le plus récent ne retourne pas de rangée.
- `%ISOPEN`: Retourne vrai si le curseur est ouvert.
- `%ROWCOUNT`: Retourne le nombre total de rangées retournés jusqu'à présent.
