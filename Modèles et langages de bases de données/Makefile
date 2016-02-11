all: self_contained_html html pdf

html: create_dir
	pandoc -S -N -s -B ./html/navbar.html -A ./html/navbar_animations.html --section-divs --mathml --normalize --to=html5 \
	--toc --toc-depth=6 --css=notes_style.css ./src/introduction.md ./src/SGBD_et_modele_relationnel_de_donnees.md \
	./src/normalisation.md ./src/SQL.md ./src/annexe.md -o ./build/notes.html

self_contained_html: create_dir
	pandoc -S -N -s --section-divs -B ./html/navbar.html -A ./html/navbar_animations.html --self-contained --normalize --mathml --to=html5 \
	--toc --toc-depth=6 --css=notes_style.css ./src/introduction.md ./src/SGBD_et_modele_relationnel_de_donnees.md \
	./src/normalisation.md ./src/SQL.md ./src/annexe.md -o ./build/self_contained_notes.html

pdf: create_dir
	pandoc -S -N -s --normalize --listings --chapters \
	--toc --toc-depth=6 ./src/introduction.md ./src/SGBD_et_modele_relationnel_de_donnees.md \
	./src/normalisation.md ./src/SQL.md ./src/annexe.md -o ./build/notes.pdf

create_dir:
	mkdir -p build

clean:
	rm -r ./build/
