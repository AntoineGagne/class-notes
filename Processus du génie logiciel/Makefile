all: self_contained_html html

html: create_dir
	pandoc -S -N -s -B ../web_notes/html/navbar.html -A \
	../web_notes/html/navbar_animations.html --section-divs --mathjax --normalize --to=html5 \
	--toc --toc-depth=6 --css=../../web_notes/css/notes_style.css ./src/practicien.md ./src/annexe.md -o ./build/notes.html

self_contained_html: create_dir
	pandoc -S -N -s --section-divs -B ../web_notes/html/navbar.html -A \
	../web_notes/html/navbar_animations.html --self-contained --normalize --mathml --to=html5 \
	--toc --toc-depth=6 --css=../web_notes/css/notes_style.css ./src/practicien.md ./src/annexe.md -o ./build/self_contained_notes.html

pdf: create_dir
	pandoc -S -N -s --normalize --listings --chapters \
	--toc --toc-depth=6 ./src/practicien.md ./src/annexe.md -o ./build/notes.pdf

sort_appendix: 
	cat ./src/annexe.md | ./sort_appendix.py > temp.md \
		&& mv temp.md ./src/annexe.md

create_dir:
	mkdir -p build

clean:
	rm -r ./build/
