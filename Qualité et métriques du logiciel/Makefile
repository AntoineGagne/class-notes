files = src/presentation_du_cours.md \
		src/annexe.md
latex_flags = -SNs --normalize --listings --chapters

common_html_flags = -SNs --toc --toc-depth=6 --normalize \
					--template=../templates/class_notes.html \
					--to=html5 \
					-A ../templates/html/navbar_animations.html \
					--section-divs
html_flags = --mathjax \
			 --css=../../templates/css/notes_style.css
self_contained_html_flags = --self-contained \
							--css=../templates/css/notes_style.css \
							--mathml

all: self_contained_html html

html: create_dir
	pandoc $(common_html_flags) $(html_flags) $(files) -o ./build/notes.html

self_contained_html: create_dir
	pandoc $(common_html_flags) $(self_contained_html_flags) $(files) \
		-o ./build/self_contained_notes.html

pdf: create_dir
	pandoc $(latex_flags) $(files) -o ./build/notes.pdf

sort_appendix: 
	cat ./src/annexe.md | ./sort_appendix.py > temp.md \
		&& mv temp.md ./src/annexe.md

create_dir:
	mkdir -p build

clean:
	rm -r ./build/
