# Exercice #5 : Données de test pour le TP#2
## Intégration de `Firestore` et `Storage` dans une application `React`. 

## Travail individuel (mais entraide permise et encouragée).

## Objectif/exigences généraux
* Générer des données de test pour l'application `JSE` du TP #2

* Afficher des données en temps réel avec `Firebase/Firestore`

## Étapes à suivre
1. Clonez le dépôt sur votre machine locale et installez les modules de base de l'appli.

1. Dans votre console `Firebase`, utilisez votre projet existant et l'appli nommée `jse-web` (crééz les sinon)

1. Dans votre entrepôt `Storage`, assurez-vous que vous avez un dossier nommé `jse-images` contenant les 10 images des bandes quotidiennes fournis dans le TP #2.

1. Dans votre BD `Firestore`, assurez-vous que vous avez une collection nommée `jse-bandes` et ajustez vos règles de sécurité pour donner accès à cette collection sans aucune restriction en lecture et en écriture. Autrement dit, ajoutez la règle suivante (**et mettez toutes les autres règles en commentaires !**) : 

    <code>
      match /jse-bandes/{document=**} {
          allow read, write : if true        
      }
    </code>

    >Attention : si vous avez déjà des données *précieuses* dans votre collection `jse-bandes` vous les perdrez à la fin de cet exercice (elles seront remplacées par les données de test générées aléatoirement dans l'exercice). Si vous souhaitez garder votre collection intacte, créez une nouvelle collection avec un nom différent.      

1. Copiez votre objet de configuration `Firebase` et intégrez-le de façon approprié (comme vu en classe dans l'application `Signets`) à votre code de l'application.

1. Créez un composant nommé `Admin` dans lequel vous afficher un simple bouton qui lorsque cliqué appellera la fonction `generer` qui se trouve dans le fichier `code/admin.js` ; intégrez ce composant dans le composant `Appli`.

1. Cliquez le bouton pour générer les données de test (:warning: ATTENTION : UNE SEULE FOIS !) : ouvrez la console du navigateur et surveillez les messages d'information, ou d'erreurs :unamused: . Surveillez aussi l'onglet "Network" et assurez-vous que votre script ne tourne pas en rond : vous serez bloquée par `Firebase` si vous faites des appels en boucle à leur API :fearful:

1. Si tout a bien été à l'étape précédente, continuez. Sinon, arrêtez tout ! Appelez-moi à la rescousse :octocat: si vous ne savez comment rectifier la situation.

1. Remettre les règles de sécurité `Firestore` à leur état original sécuritaire (développé en classe au dernier cours).

1. Dans un fichier nommé `code/commentaire-modele.js`, produisez le code JavaScript pour obtenir l'information complète des commentaires d'une bandes quotidienne dans `Firestore` (nommez votre fonction `obtenir`).
    >Indice : ça ressemble à la fonction `lireTout` du fichier `dossier-modele.js` dans notre travail de classe (`Signets`).

1. Créez un composant pour afficher les commentaires associés à une bande quotidienne (choisissez-en une dans les données disponibles que vous avez généré ci-dessus et utiliser son identifiant comme paramètre de la fonction produite à l'étape précédente) ; voici les champs que vous devez prendre en considération dans l'affichage : *id*, *texte*, *idUtil*, *nomUtil*, *timestamp*, *votes* ; intégrez le composant dans `Appli` et testez votre code.
    >Indice : vous allez avoir besoin d'utiliser les deux `hooks` `useState` et `useEffect` (un code similaire a été expliqué en classe pour le composant `PageUtilisateur.jsx` dans le projet `Signets`)

1. Affichez les *votes* en faisant le total des votes positifs et le total des votes négatifs (utilisez la méthode des tableaux *reduce*).

1. Montrez-moi votre travail complété en classe.

1. Synchronisez votre solution complétée avec le dépôt `GitHub` correspondant.

### Gardez une copie personnelle de votre travail : les dépôts de remises sur `582-4PA` seront supprimés une fois les notes publiées.