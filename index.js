'use strict';

const express = require('express');
const app = express();

const http = require('http').Server(app);

const port = process.env.PORT || 3000;

const path = __dirname;
const routes = [
    ['/genie-developpement-durable', 'Genie_et_developpement_durable'],
    ['/informatique-theorique', 'Informatique_theorique'],
    ['/modeles-et-langages-de-bases-de-donnees', 'Modeles_et_langages_de_bases_de_donnees'],
    ['/probabilites-pour-ingenieurs', 'Probabilites_pour_ingenieurs'],
    ['/processus-du-genie-logiciel', 'Processus_du_genie_logiciel'],
    ['/qualite-et-metriques-du-logiciel', 'Qualite_et_metriques_du_logiciel'],
    ['/systemes-exploitation-pour-ingenieurs', 'Systemes_d_exploitation_pour_ingenieurs'],
    ['/ethique-et-professionnalisme', 'Ethique_et_professionnalisme'],
    ['/conception-et-analyse-dalgorithmes', 'Conception_et_analyse_dalgorithmes'],
    ['/projet-de-conception-multidisciplinaire', 'Projet_de_conception_multidisciplinaire'],
    ['/sante-et-securite-au-travail', 'Sante_et_securite_au_travail'],
    ['/architecture-logicielle', 'Architecture_logicielle'],
    ['/interface-personne-machine', 'Interface personne-machine']
];

app.use('/', express.static(path));
for (let [route, filePath] of routes) {
    app.use(route, express.static(`${path}/${filePath}/build/`));
}

http.listen(port, () => {
    console.log('Listening on: ' + port + '...');
});
