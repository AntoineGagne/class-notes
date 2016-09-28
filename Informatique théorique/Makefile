files = src/introduction.md \
		src/automates_et_langages_reguliers.md \
		src/langages_non_reguliers_et_lemme_de_pompage.md \
		src/annexe.md
latex_flags = -SNs --normalize --listings --chapters

common_html_flags = -SNs --toc --toc-depth=6 --normalize \
					--template=../templates/class_notes.html \
					--to=html5 \
					-A ../templates/html/navbar_animations.html \
					--section-divs
html_flags = --mathjax \
			 -V graph \
			 --css=../../templates/css/notes_style.css
self_contained_html_flags = --self-contained \
							--css=../templates/css/notes_style.css \
							--mathml
js_graph_library = ../templates/scripts/build/sigma.min.js \
				   ../templates/scripts/build/plugins/sigma.parsers.json.min.js \
				   ../templates/scripts/build/plugins/sigma.renderers.edgeLabels.min.js \
				   ../templates/scripts/build/plugins/sigma.renderers.parallelEdges.min.js \
				   ../templates/scripts/build/plugins/sigma.renderers.customEdgeShapes.min.js \
				   ../templates/scripts/build/plugins/sigma.renderers.customShapes.min.js

all: self_contained_html html

html: copy_graphing_library	
	pandoc $(common_html_flags) $(html_flags) $(files) -o ./build/notes.html

self_contained_html: copy_graphing_library
	pandoc $(common_html_flags) $(self_contained_html_flags) $(files) \
		-o ./build/self_contained_notes.html

pdf: create_dir
	pandoc $(latex_flags) $(files) -o ./build/notes.pdf

sort_appendix: 
	cat ./src/annexe.md | ./sort_appendix.py > temp.md \
		&& mv temp.md ./src/annexe.md

copy_graphing_library: create_dir
	cp $(js_graph_library) build/

create_dir:
	mkdir -p build

clean:
	rm -r ./build/
