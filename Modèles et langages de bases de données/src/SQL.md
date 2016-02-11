# SQL

## Exemple

```SQL
    create table PROPRIETE_A_LOUER
    (NUM PROPRIETE varchar(5) not null,
        PIECES number(2) not null default 4,
        LOCATION number(6,2) not null default 600, 
        NUM_PROPRIETAIRE varchar(5) not null,
        NUM_PERSONNEL varchar(5)
        NUM_FILIALE char(4) not null,
        constraint PK_PROPRIETE_A_LOUER primary key
        (NUM_PROPRIETE),
        constraint FK_PROPRIETE_NUM_PERSONNEL foreign key
        (NUM PERSONNEL) references PERSONNEL on delete set null,
        constraint CK_PIECES_RANGE check (PIECES between 1 and 15),
        constraint CK_LOCATION_RANGE check(LOCATION between 0  and 
        9999.99);
```

```SQL
    from         /* Table(s) à utiliser */
    where       /* Filtre rangées */
    group by    /* Forme des groupes de rangées avec 
                même valeur de colonne */
    having      /* Filtre les groupes */
    order by    /* Ordre d'affiche */
```
