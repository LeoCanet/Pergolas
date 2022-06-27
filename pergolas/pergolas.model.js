const db = require("../db");

// Constructor des utilisateurs
const Pergolas = function (id, nom, description, prix, image, materiaux, couleur, dimension, fenetres) {
  this.id = id;
  this.nom = nom;
  this.description = description;
  this.prix = prix;
  this.image = image;
  this.materiaux = materiaux;
  this.couleur = couleur;
  this.dimension = dimension;
  this.fenetres = fenetres;
};

// Récupère tous les Pergolas
Pergolas.findAll = (result) => {
  db.query(`SELECT * FROM pergolas`, (err, res) => {
    // if (!user_id) {res.400}
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("Pergolas: ", res);
    result(null, res);
  });
};

// Create une pergolas
Pergolas.addPergolas = (result, nom, description, prix, image, materiaux, couleur, dimension, fenetres) => {
  db.query(
    `INSERT INTO pergolas (id, nom, description, prix, image, materiaux, couleur, dimension, fenetres) VALUES (NULL, '${nom}', '${description}', '${prix}', '${image}', '${materiaux}', '${couleur}', '${dimension}', '${fenetres}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Pergolas: ", res);
      result(null, res);
    }
  );
};

// Read un utilisateur
Pergolas.findOne = (result, id) => {
  db.query(`SELECT * FROM pergolas where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Pergolas: ", res);
    result(null, res);
  });
};

// Update un utilisateur
Pergolas.update = (result, id, nom, description, prix, image, materiaux, couleur, dimension, fenetres) => {
  db.query(
    `UPDATE pergolas SET Nom = '${nom}', description = '${description}', prix = '${prix}', image = '${image}', materiaux = '${materiaux}', couleur = '${couleur}', dimension = '${dimension}', fenetres = '${fenetres}' WHERE pergolas.id = ${id};`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Pergolas: ", res);
      result(null, res);
    }
  );
};

// Delete un utilisateur
Pergolas.delete = (result, id) => {
  db.query(`DELETE FROM pergolas WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Pergolas: ", res);
    result(null, res);
  });
};

module.exports = Pergolas;
