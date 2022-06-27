const Pergolas = require("../pergolas/pergolas.model");

// Réupère tous les Utilisateurs
exports.findAll = (req, res) => {
  Pergolas.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  });
};

// Create un utilisateur
exports.addPergolas = (req, res) => {
  let pergolas_nom = req.body.nom;
  let pergolas_description = req.body.description;
  let pergolas_prix = req.body.prix;
  let pergolas_image = req.body.image;
  let pergolas_materiaux = req.body.materiaux;
  let pergolas_couleur = req.body.couleur;
  let pergolas_fenetres = req.body.fenetres;

  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  Pergolas.addPergolas(
    (err, data) => {
      console.log(err);
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue",
        });
      else res.send(data);
    },
    pergolas_nom,
    pergolas_description,
    pergolas_prix,
    pergolas_image,
    pergolas_materiaux,
    pergolas_couleur,
    pergolas_fenetres,
  );
};

// Read un utilisateur
exports.findOne = (req, res) => {
  let pergolas_id = req.params.id;
  Pergolas.findOne((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, pergolas_id);
};

// Update un utilisateur
exports.update = (req, res) => {
  let pergolas_id = req.params.id;
  let pergolas_nom = req.body.nom;
  let pergolas_description = req.body.description;
  let pergolas_prix = req.body.prix;
  let pergolas_image = req.body.image;
  let pergolas_materiaux = req.body.materiaux;
  let pergolas_couleur = req.body.couleur;
  let pergolas_fenetres = req.body.fenetres;
  Pergolas.update(
    (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue",
        });
      else res.send(data);
    },
    pergolas_id,
    pergolas_nom,
    pergolas_description,
    pergolas_prix,
    pergolas_image,
    pergolas_materiaux,
    pergolas_couleur,
    pergolas_fenetres,
  );
};

// Delete un utilisateur
exports.delete = (req, res) => {
  let pergolas_id = req.params.id;
  Pergolas.delete((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, pergolas_id);
};
