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

### Exemples d'utilisation curseurs

#### Exemple 1

```SQL
declare
    V_NUM_PROPRIETE PROPRIETE_A_LOUER.NUM_PROPRIETE%type;
    V_RUE PROPRIETE_A_LOUER.RUE%type;
    V_VILLE PROPRIETE_A_LOUER.VILLE%type;
    V_CODE_POSTAL PROPRIETE_A_LOUER.CODE_POSTAL%type;
    cursor PROPRIETE_CURSEUR is
        select NUM_PROPRIETE, RUE, VILLE, CODE_POSTAL
            from PROPRIETE_A_LOUER
            where NUM_PERSONNEL = 'EM14'
            order by NUM_PROPRIETE;

begin
    open PROPRIETE_CURSEUR;
    loop
-- Prendre la ligne suivante
        fetch PROPRIETE_CURSEUR
        into V_NUM_PROPRIETE, V_RUE, V_VILLE,
             V_CODE_POSTAL;
        exit when PROPRIETE_CURSEUR%notfound;
        dbms_output.put_line('No de propriete: ' || V_NUM_PROPRIETE);
        dbms_output.put_line('Rue: ' || V_RUE);
        if V_CODE_POSTAL is not null then
            dbms_output.put_line('Code postal: ' || V_CODE_POSTAL);
        else
            dbms_output.put_line('Code postal: ' || 'NULL');
        end if;
    end loop;
    if PROPRIETE_CURSEUR%isopen then
        close PROPRIETE_CURSEUR
    end if;

-- Si condition d'erreur, alors afficher l'erreur
exception
    when others then
        dbms_output.put_line('Erreur detectee.');
        if PROPRIETE_CURSEUR%isopen then
            close PROPRIETE_CURSEUR
        end if;
end;
```

#### Exemple 2

```SQL
declare 
    V_TOTAL_VAL number(6);

    cursor C1 is
        select REVENU_MENSUEL_EM
            from EMPLOYE
            where NOM_EN = 'King';

begin
    V_TOTAL_VAL := 0;

-- L'equivalent d'un "for each"
    for ENR_EMPLOYE in C1 loop
        V_TOTAL_VAL := V_TOTAL_VAL +
            ENR_EMPLOYE.REVENU_MENSUEL_EM;
    end loop;
end;
```

## Procédures et fonctions

Il est possible de définir des procédures et des fonctions en PL/SQL. Il existe toutefois une différence
entre les deux. Une **procédure** ne possède pas de retour alors qu'une fonction en possède un.

### Procédures

On définit une procédure de la façon suivante:

```SQL
create [or replace] procedure NOM_PROCEDURE
    [(ARGUMENT_1 ... [,ARGUMENT_N)] is
    -- Pas de mot clé "declare"
        [Section de déclaration de variable]

begin
    -- Section exécutable

[Section gestion exception]

end [nom_procedure];
/
```

où `ARGUMENT_1 .. ARGUMENT_N` sont définis comme

```SQL
-- U pour out et I pour in
P[U | I]_NOM_ARGUMENT [in | out] type [{:= | default} valeur]
```

#### Exécution

Pour exécuter une procédure, on exécute les commandes suivantes:

```SQL
-- Permet d'afficher les dbms_output.putline
set serveroutput on; 
execute nom_procedure(...);
```

#### Exemple

```SQL
create procedure SP_SALUT_LE_MONDE is
    V_SALUTATION varchar2(20);
    
begin
    V_SALUTATION := 'Salut le monde';
    dbms_output.put_line(V_SALUTATION);

end SP_SALUT_LE_MONDE;
/
```

### Fonctions

On définit une fonction de la façon suivante:

```SQL
create [or replace] function NOM_FONCTION
    [(ARGUMENT_1 ... [,ARGUMENT_N)]
    -- On spécifie le type du retour
    return type is
        [Section de déclaration de variable]

begin
    -- Section exécutable
    {return NOM_VARIABLE;}

[Section gestion exception]

end [NOM_FONCTION];
/
```

#### Exemple

```SQL
create or replace function 
    -- IMPORTANT: On ne precise pas de format pour les types
    FCT_BALANCE(P_I_NO_COMPTE number)
    return number
    is
        V_BALANCE_COMPTE number(8, 2);

begin
    select BALANCE_COMPTE into
        V_BALANCE_COMPTE from COMPTE
        where NO_COMPTE = P_I_NO_COMPTE;
    return V_BALANCE_COMPTE;

end FCT_BALANCE;
/
```

## Packages

Les packages sont des collections de procédres, fonctions, variables et requêtes SQL regroupées et
stockées dans une seule unité. La spécification d'un package déclare tous les objets publics du
package. Le corps définit les objets publics et privés du package. Pour utiliser un objet d'un
package, on utilise la notation suivante:

```SQL
nomDuPackage.NomDeLObjet();
```

## Déclencheurs

Un déclencheur définit une action que la base de données devrait entreprendre lorsque certains
événements se produisent dans l'application. Le format général d'un déclencheur est le suivant:

```SQL
CREATE [OR REPLACE] TRIGGER TriggerName
-- Moment at which the trigger is executed
    {BEFORE | AFTER | INSTEAD OF}
-- On which action the trigger is executed
    INSERT | DELETE | UPDATE [of TriggerColumnList]
    ON TableName
    [REFERENCING {OLD | NEW} AS {OldName | NewName}
    [FOR EACH {ROW | STATEMENT}]
    [WHEN Condition]
    <trigger action>

-- PL/SQL block

END;
```

### `BEFORE`/`AFTER`/`INSTEAD OF`

Les mots clés `BEFORE`/`AFTER`/`INSTEAD OF` spécifient le moment où le déclencheur sera effectué.

#### `BEFORE`

Le déclencheur sera exécuté avant l'action. On peut s'en servir pour:

- Champs qui sont à calculer avant l'action
- Faire des vérifications sans considérer les nouvelles valeurs

#### `AFTER`

Le déclencheur sera exécuté après l'action. On peut s'en servir pour:

- Considérer une nouvelle valeur dans le calcul

### `:OLD`/`:NEW`

Les mots clés `:OLD`/`:NEW` font référence aux anciennes et nouvelles valeurs respectivement. Elles
sont seulement utilisables dans les déclencheurs qui utilisent `for each row`. Ils peuvent seulement
être utilisés sur certains déclencheurs:

- `update`: `:NEW.<colonne>`, `:OLD.<colonne>`
- `insert`: `:NEW.<colonne>`
- `delete`: `:OLD.<colonne>`

### Exemples

#### Exemple 1

```SQL
create or replace trigger TRG_EMPRUNT_AIU after
    insert or update of DATE_RET on EMPRUNT

declare
    V_NB_MAX_EMPRUNTE number;
    V_NB_MAX_EXEMPLAIRE number;

begin
-- Cherche la quantite maximal des livres empruntes par l'adherent
-- On ne peut pas aller lire la table qu'on modifie
select max(count(*)) into V_NB_MAX_EMPRUNTE
    from EMPRUNT
    where DATE_RET is null
    group by NO_ADH;

-- S'il existe un adherent qui emprunte plus 
-- de 5 livres, l'insertion sera interdite
if V_NB_MAX_EMPRUNTE > 5 then
    raise application_error(-20056, 'On ne ' || 
        'peut emprunter plus de 5 livres');
end if;

-- Chercher le plus grand nombre d'exemplaires
-- empruntés par un adherent
select max(count(*)) into
    V_NB_MAX_EXEMPLAIRE from EMPRUNT, LIVRE
    where (EMPRUNT.COTE = LIVRE.COTE) and
        (DATE_RET is null)
    group by NO_ADH, TITRE;

-- S'il existe un titre qui est emprunté deux fois,
-- l'insertion est interdite
if V_NB_MAX_EXEMPLAIRE > 1 then
    raise application_error(-20057, 'Ce ' ||
        'titre est deja emprunte');
end if;
end;
/
```

#### Exemple 2

```SQL
create or replace trigger TRG_AU_LIVRE_EMPRUNTE
    after update on LIVRE for each row

declare
    V_NB_EMPRUNT number;

begin
-- Verifier si ce livre est deja emprunte
    select count(*) into V_NB_EMPRUNT
        from EMPRUNT
        where COTE = :OLD.COTE;

    if V_NB_EMPRUNT > 0 then -- Si oui, refuser la MAJ
        raise application_error(-20052, 'Ce livre a ' ||
            'ete emprunte. La MAJ est interdite.');
    end if;
end;
```

#### Exemple 3

```SQL
-- BI pour before insert
create or replace trigger TRG_ENSEIGNANT_BI
before insert on ENSEIGNANT
for each row

declare
    V_CODE_POSTAL char(1);

begin
    :NEW.CREE_PAR := user;
    :NEW.DATE_CREATION := sysdate;
    :NEW.MODIFIE_PAR := user;
    :NEW.DATE_MODIFICATION := sysdate;

end;
```

## Récursivité

Il est possible de faire des requêtes récursives.

### Exemple

#### Exemple 1

```SQL
with recursive
TOUT_GESTIONNAIRE(NO_EMPLOYE, NO_EMPLOYE_GESTION) as 
    (select NO_EMPLOYE, NO_EMPLOYE_GESTION 
    from EMPLOYE

    union

    select IN.NO_EMPLOYE, OUT_NO_EMPLOYE_GESTION
    from TOUT_GESTIONNAIRE IN, EMPLOYE OUT
    where IN.NO_EMPLOYE_GESTION = OUT.NO_EMPLOYE);
```

#### Exemple 2

```SQL
select lpad(' ', LEVEL * 2, ' ') || LAST_NAME as ARBRE,
    EMPLOYEE_ID,
    MANAGER_ID,
    sys_connect_by_path(LAST_NAME, '/') as CHEMIN,
    LEVEL as NIVEAU
from EMPLOYEES
connect by prior EMPLOYEE_ID = MANAGER_ID
start with MANAGER_ID is null;
```

Ce qui donne le résultat suivant:

Arbre             EMPLOYEE_ID         MANAGER_ID          CHEMIN                                NIVEAU
--------------    ---------------     --------------      ---------------------------------     ----------
King              100                                     /King                                 1
  Kochhar         101                 100                 /King/Kochhar                         2
    Greenberg     108                 101                 /King/Kochhar/Greenberg               3
      Faviet      109                 108                 /King/Kochhar/Greenberg/Faviet        4
      Chen        110                 108                 /King/Kochhar/Greenberg/Chen          4
      Sciarra     111                 108                 /King/Kochhar/Greenberg/Sciarra       4
      Urman       112                 108                 /King/Kochhar/Greenberg/Urman         4
      Popp        113                 108                 /King/Kochhar/Greenberg/Popp          4
    Whalen        200                 101                 /King/Kochhar/Whalen                  3
    Mavris        203                 101                 /King/Kochhar/Mavris                  3
    Baer          204                 101                 /King/Kochhar/Baer                    3
    Higgins       205                 101                 /King/Kochhar/Higgins                 3
      Gietz       206                 205                 /King/Kochhar/Higgins/Gietz           4
--------------    ---------------     --------------      ---------------------------------     ----------
