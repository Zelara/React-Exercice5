import React, { useEffect, useState } from "react";
import { obtenir } from "../code/commentaire-modele";

export default function ListeCommentaires() {
  const [commentaires, setCommentaires] = useState([]);
  const [totalVotesPositifs, setTotalVotesPositifs] = useState(0);
  const [totalVotesNegatifs, setTotalVotesNegatifs] = useState(0);

  async function obtenirCommentaires() {
    const idBandeTest = "1wVeiCGQPyPfPM7ys0c4";
    let comms = await obtenir(idBandeTest);
    setCommentaires(comms);

    // Calcul du total des votes positifs et négatifs
    const votes = comms.map((comm) => comm.votes);
    const valeursVotes = Object.values(votes);
    const totalPositifs = valeursVotes.reduce((acc, val) => (val === 1 ? acc + 1 : acc), 0);
    const totalNegatifs = valeursVotes.reduce((acc, val) => (val === -1 ? acc + 1 : acc), 0);
    setTotalVotesPositifs(totalPositifs);
    setTotalVotesNegatifs(totalNegatifs);
  }

  useEffect(() => {
    obtenirCommentaires();
  }, []);

  return (
    <div className="ListeCommentaires">
      <h2>Statistiques</h2>
      <div>
        <p>Total des votes positifs : {totalVotesPositifs}</p>
        <p>Total des votes négatifs : {totalVotesNegatifs}</p>
      </div>
      <h2>Commentaires associés à la bande quotidienne</h2>
      <ul>
        {commentaires.map((commentaire) => (
          <li key={commentaire.id}>
            ID: {commentaire.id} <br />
            Texte: {commentaire.data().texte} <br />
            ID Utilisateur: {commentaire.data().idUtil} <br />
            Nom Utilisateur: {commentaire.data().nomUtil} <br />
            Timestamp: {commentaire.data().timestamp} <br />
            Votes: {commentaire.votes} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
