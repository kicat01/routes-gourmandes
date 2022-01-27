/*
/src/AjoutRecette.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

class AjoutRecette extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation du state des zones de saisie et d'affichage
    this.state = {
      id_categorie: this.props.id_categorie,
      nom_categorie: this.props.nom_categorie,

      id_type: this.props.id_type,
      type: this.props.type,
      typeDeRecette: [],

      id_ingredient: this.props.id_ingredient,
      nom_ingredient: this.props.nom_ingredient,
      tousLesIngredients: [],

      categorie: [],
      nom_produit: "",
      preparation: "",
      etape_recette: "",
      message: "",
    };
    this.changeNom_produit = this.changeNom_produit.bind(this);

    this.changeId_categorie = this.changeId_categorie.bind(this);
    this.changeNom_categorie = this.changeNom_categorie.bind(this);

    this.changeId_type = this.changeId_type.bind(this);
    this.changeType = this.changeType.bind(this);

    this.changeId_ingredient = this.changeId_ingredient.bind(this);
    this.changeNom_ingredient = this.changeNom_ingredient.bind(this);

    this.changePreparartion = this.changePreparartion.bind(this);
    this.changeEtape_recette = this.changeEtape_recette.bind(this);
    this.validate = this.validate.bind(this);
  } /// constructor

  changeNom_produit(event) {
    this.setState({ nom_produit: event.target.value });
  }
  changeId_categorie(event) {
    this.setState({ id_categorie: event.target.value });
  }
  changeNom_categorie(event) {
    this.setState({ nom_categorie: event.target.value });
  }

  changeId_type(event) {
    this.setState({ id_type: event.target.value });
  }
  changeType(event) {
    this.setState({ type: event.target.value });
  }

  changeId_ingredient(event) {
    this.setState({ id_ingredient: event.target.value });
  }
  changeNom_ingredient(event) {
    this.setState({ nom_ingredient: event.target.value });
  }

  changePreparartion(event) {
    this.setState({ preparation: event.target.value });
  }
  changeEtape_recette(event) {
    this.setState({ etape_recette: event.target.value });
    // state de l'enfant
  }

  // le componentDidMount s'execute quand la page est complètement construite après le constructor.
  componentDidMount() {
    ////////////////////////categories/////////////////////////////////
    fetch("http://localhost:8081/categoriesSQL")
      //execution de la promesse avec la fonction callback
      .then((response) => {
        // resultat de la promesse
        console.log(response);
        //on retourne la promesse au format json
        return response.json();
        //recuperation du result dans une fonction callback
      })
      .then((result) => {
        this.setState({ categorie: result });

        //affichage de du resultat sous forme de tableau d'objet
        console.log(result);
      });
    //////////////////////////////typerecette///////////////////////////
    fetch("http://localhost:8081/typerecetteSQL")
      //execution de la promesse avec la fonction callback
      .then((response) => {
        // resultat de la promesse
        console.log(response);
        //on retourne la promesse au format json
        return response.json();
        //recuperation du result dans une fonction callback
      })
      .then((result) => {
        this.setState({ typeDeRecette: result });

        //affichage de du resultat sous forme de tableau d'objet
        console.log(result);
      });
    //////////////////////////ingredients///////////////////////////////////
    fetch("http://localhost:8081/ingredientsSQL")
      //execution de la promesse avec la fonction callback
      .then((response) => {
        // resultat de la promesse
        console.log(response);
        //on retourne la promesse au format json
        return response.json();
        //recuperation du result dans une fonction callback
      })
      .then((result) => {
        this.setState({ tousLesIngredients: result });

        //affichage de du resultat sous forme de tableau d'objet
        console.log(result);
      });
  } //componentDidMount

  /**
   *
   * @param {type} texte
   * @returns {undefined}
   */
  validate() {
    // console.log("validate")
    this.setState({
      message:
        this.state.nom_produit +
        "/" +
        this.state.id_categorie +
        "/" +
        this.state.nom_categorie +
        "/" +
        this.state.id_type +
        "/" +
        this.state.type +
        "/" +
        this.state.id_ingredient +
        "/" +
        this.state.nom_ingredient +
        "/" +
        this.state.preparation +
        "/" +
        this.state.etape_recette,
    });

    fetch(
      "http://localhost:8081/produitsInsertSQL?nom_produit=" +
        this.state.nom_produit +
        "&preparation=" +
        this.state.preparation +
        "&etape_recette=" +
        this.state.etape_recette
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(
        (result) => {
          console.log(result);
          this.setState({ message: "recette enregistrée" });
        },
        (error) => {
          console.log(error);
          this.setState({ message: "erreur lors de l'enregistrement" });
        }
      );
  } /// validate

  render() {
    return (
      <div id="divForm">
        <h1>Ajouter une recette</h1>
        <p>
          <textarea
            type="text"
            id="nom_produit"
            value={this.state.nom_produit}
            placeholder="Nom de la recette : "
            onChange={this.changeNom_produit}
          />
        </p>

        <div id="combo">
          <select id="typerecette">
            <option>Type de recette</option>

            {this.state.typeDeRecette.map((element) => (
              <option onChange={this.changeNom_produit} key={element.id_type}>
                {element.type}
              </option>
            ))}
          </select>

          <p id="cat">
            Catégories
          </p>
          <select id="categorie" multiple>
            {this.state.categorie.map((element) => (
              <option
                onChange={this.changeNom_categorie}
                key={element.id_categorie}
              >
                {element.nom_categorie}
              </option>
            ))}
          </select>
        </div>
        <select id="ingredident">
          <option>Ingrédients</option>

          {this.state.tousLesIngredients.map((element) => (
            <option
              onChange={this.changeNom_ingredient}
              key={element.id_ingredient}
            >
              {element.nom_ingredient}
            </option>
          ))}
        </select>

        <textarea
          type="text"
          id="nom_ingredient"
          value={this.state.nom_ingredient}
          placeholder="Ajouter un ingrédient : "
          onChange={this.changeNom_ingredient}
        />
        <p></p>

        <p>
          <textarea
            type="text"
            id="preparation"
            value={this.state.preparation}
            placeholder="Temps de préparation et de cuisson :"
            onChange={this.changePreparartion}
          />
        </p>
        <p>
          <textarea
            type="text"
            id="etape_recette"
            value={this.state.etape_recette}
            placeholder="Votre recette :"
            onChange={this.changeEtape_recette}
          />
        </p>

        <p>
          <button type="button" id="valider" onClick={this.validate}>
            Enregistrer
          </button>
        </p>
        <label id="message">{this.state.message}</label>
      </div>
    );
  } /// render
}

export default AjoutRecette;
