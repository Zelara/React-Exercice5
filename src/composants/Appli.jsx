import React from "react";
import Commentaires from "./ListeCommentaires";
import Admin from "./Admin"; // Importez vos autres composants si nécessaire

function Appli() {
  return (
    <div className="Appli">
      <h1>Exercice 5</h1>
      <Commentaires />
      <Admin />
    </div>
  );
}

export default Appli;
