SHELL := /bin/bash

SUBDIRS = Genie_et_developpement_durable \
		  Informatique_theorique \
		  Modeles_et_langages_de_bases_de_donnees \
		  Probabilites_pour_ingenieurs \
		  Processus_du_genie_logiciel \
		  Qualite_et_metriques_du_logiciel \
		  Systemes_d_exploitation_pour_ingenieurs \
		  Ethique_et_professionnalisme \
		  Conception_et_analyse_dalgorithmes \
		  Projet_de_conception_multidisciplinaire \
		  Sante_et_securite_au_travail

BUILDDIRS = $(SUBDIRS:%=build-%)
CLEANDIRS = $(SUBDIRS:%=clean-%)

all: $(BUILDDIRS)
$(SUBDIRS): $(BUILDDIRS)
$(BUILDDIRS):
	$(MAKE) -C $(@:build-%=%)

clean: $(CLEANDIRS)
$(CLEANDIRS): 
	$(MAKE) -C $(@:clean-%=%) clean

.PHONY: subdirs $(SUBDIRS)
.PHONY: subdirs $(BUILDDIRS)
.PHONY: subdirs $(CLEANDIRS)
.PHONY: all clean
