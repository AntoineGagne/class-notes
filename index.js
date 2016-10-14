'use strict';

const express = require('express');
const app = express();

const http = require('http').Server(app);

const port = process.env.PORT || 3000;

const path = __dirname;
app.use('/', express.static(path));
app.use('/genie-developpement-durable', express.static(`${path}/Genie_et_developpement_durable/build/`));
app.use('/informatique-theorique', express.static(`${path}/Informatique_theorique/build`));
app.use('/modeles-et-langages-de-bases-de-donnees', express.static(`${path}/Modeles_et_langages_de_bases_de_donnees/build`));
app.use('/probabilites-pour-ingenieurs', express.static(`${path}/Probabilites_pour_ingenieurs/build`));
app.use('/processus-du-genie-logiciel', express.static(`${path}/Processus_du_genie_logiciel/build`));
app.use('/qualite-et-metriques-du-logiciel', express.static(`${path}/Qualite_et_metriques_du_logiciel/build`));
app.use('/systemes-exploitation-pour-ingenieurs', express.static(`${path}/Systemes_d_exploitation_pour_ingenieurs/build`));


http.listen(port, () => {
    console.log('Listening on: ' + port + '...');
});
