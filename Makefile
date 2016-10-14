SUBDIRS = Genie_et_developpement_durable \
		  Informatique_theorique \
		  Modeles_et_langages_de_bases_de_donnees \
		  Probabilites_pour_ingenieurs \
		  Processus_du_genie_logiciel \
		  Qualite_et_metriques_du_logiciel \
		  Systemes_d_exploitation_pour_ingenieurs

BUILDDIRS = $(DIRS:%=build-%)
CLEANDIRS = $(DIRS:%=clean-%)

.PHONY: subdirs $(SUBDIRS)

all: $(SUBDIRS)

$(SUBDIRS):
	$(MAKE) -C $@
