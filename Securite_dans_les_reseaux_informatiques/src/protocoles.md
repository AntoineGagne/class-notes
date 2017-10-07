# Protocoles

## Couche Internet

### ARP

Sert à convertir les adresses IP en adresse MAC ou l'inverse. S'il y a deux
adresses correspondants à deux adresses MAC ou l'inverse, quelqu'un essaie de
se faire passer pour quelqu'un d'autre. Si l'adresse n'est pas dans le même
réseau, la communication se fait en relayant l'information d'ordinateur à
ordinateur jusqu'au bon.

#### Commandes

```sh
# Affiche le contenu du cache ARP
arp -a
```

```sh
# Affichage le cache associé à une seule @ip dans le cas où il y en a plusieurs
arp -a ${ip}
```

```sh
# Ajout manuel une entrée statique permanente dans le cache (réduire le trafic
# et le risque)
arp -s ${ip} ${mac}
```

### ICMP

- Permet de comprendre ce qui se passe dans le réseau
    -  Un paquet qui ne se rend pas, pourquoi ?
- Appartient à la couche réseau, mais est encapsulé dans un paquet IP
- Chaque question possède un numéro qui est le même que celui de la réponse

## Couche transport

### UDP

- Très léger
- Aucune garantie de transmission
- Aucun contrôle du trafic
- Support _unicast_, _broadcast_ et _multicast_
- Port source peut être mis à zéro si on n'attends pas de réponse

### TCP

- Connexions bidirectionnelles
- Protocole fiable
- Connexion point à point (_unicast_)
