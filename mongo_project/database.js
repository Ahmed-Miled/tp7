// database.js
const mongoose = require("mongoose");
// Connexion à MongoDB (en local ou avec MongoDB Atlas)
mongoose
  .connect("mongodb://localhost:27017/bibliotheque", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));
