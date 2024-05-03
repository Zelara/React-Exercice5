import { useEffect, useState } from "react";
import { obtenir } from "../code/commentaire-modele";

export default function ListeCommentaires() {
  const [commentaires, setCommentaires] = useState([]);

  async function obtenirCommentaires() {
    const idBandeTest = "1wVeiCGQPyPfPM7ys0c4";
    let comms = await obtenir(idBandeTest);
    setCommentaires(comms);
  }

  useEffect(() => {
    obtenirCommentaires();
  }, []);

  // Calcul du total des votes positifs et négatifs
  const votesArray = Object.values(commentaires.reduce((acc, commentaire) => {
    const votes = commentaire.votes;
    acc[votes] = (acc[votes] || 0) + 1;
    return acc;
  }, {}));

  const totalVotesPositifs = votesArray.reduce((acc, value, index) => {
    return index > 0 ? acc + value : acc;
  }, 0);

  const totalVotesNegatifs = votesArray.reduce((acc, value, index) => {
    return index < 0 ? acc + value : acc;
  }, 0);

  return (
    <div className="ListeCommentaires">
      <h2>Statistiques</h2>
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
      <h3>Total des votes positifs : {totalVotesPositifs}</h3>
      <h3>Total des votes négatifs : {totalVotesNegatifs}</h3>
    </div>
  );
}
