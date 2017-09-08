% Architecture logicelle
% Antoine Gagné

Ces notes tirés du cours *Architecture logicielle* traitent des points suivants:

* Expliquer différents patrons de conception et de les mettre en pratique
  lors de la conception et du développement de logiciel.
* Maîtriser une approche méthodologique pour analyser et concevoir un
  logiciel selon les principes architecturaux.
* Mener en équipe un projet de plusieurs mois en préconisant une approche
  Agile et de satisfaire aux exigences d'un client en matière de
  fonctionnalités, de qualité logicielle et d'architecture logicielle.
* Discuter de nouveaux thèmes du génie logiciel qui traitent d'aspects
  architecturaux.
* Développer l'aptitude à poser un regard critique sur la formation reçue
  afin d'assurer une amélioration continue du cours.

# Description du projet

* Gestion de service de taxis
* Commande de taxis via une application mobile
* Gestion de la flotte de véhicules
* Client léger: les calculs vont se faire en grande partie du côté serveur
* Accessible via un serveur `REST`

## Fonctionnalités

* Commande d'un taxi
* Rapports journaliers
* Facturation des clients
* Gestion des chauffeurs et des véhicules

## Domaine

* Une course de taxi est entre un point A et un point B (pas d'arrêts)
* Temps
* Connaître la position de son taxi en temps réel
* Distance
* Tarifs: tarif initial et augmente en fonction du kilométrage (peut augmenter
  en fonction du temps aussi)
* Types de véhicules
