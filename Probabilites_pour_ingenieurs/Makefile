SHELL := /bin/bash

NOW := $(shell date +"%c")

files = src/introduction_a_la_theorie_des_probabilites.md \
		src/analyse_combinatoire.md \
		src/variable_aleatoire_et_distribution_le_cas_multidimensionnel.md \
		src/esperance_mathematique.md \
		src/annexe.md
latex_flags = -SNs --normalize --listings --chapters

common_html_flags = -SNs --toc --toc-depth=6 --normalize \
					--template=../templates/class_notes.html \
					--to=html5 \
					-V date="$(NOW)" \
					-A ../templates/html/navbar_animations.html \
					--section-divs
html_flags = --mathjax \
			 --css=../../templates/css/notes_style.css
self_contained_html_flags = --self-contained \
							--css=../templates/css/notes_style.css \
							--mathml

all: html

html: create_dir
	@pandoc $(common_html_flags) $(html_flags) $(files) -o ./build/index.html

self_contained_html: create_dir
	pandoc $(common_html_flags) $(self_contained_html_flags) $(files) \
		-o ./build/index.html

pdf: create_dir
	pandoc $(latex_flags) $(files) -o ./build/notes.pdf

sort_appendix: 
	cat ./src/annexe.md | ./sort_appendix.py > temp.md \
		&& mv temp.md ./src/annexe.md

create_dir:
	@mkdir -p build

clean:
	@rm -r ./build/
