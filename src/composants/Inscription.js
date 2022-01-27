/*
/src/Inscription.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        // Initialisation du state des zones de saisie et d'affichage
        this.state = {
            nom: "",
            prenom: "",
            pseudo: "",
            email: "",
            mdp: "",
            message: "",
        }
        this.changeNom = this.changeNom.bind(this)
        this.changePrenom = this.changePrenom.bind(this)
        this.changePseudo = this.changePseudo.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.validate = this.validate.bind(this)
    } /// constructor

    changeNom(event) {
        this.setState({ nom: event.target.value })
    }
    changePrenom(event) {
        this.setState({ prenom: event.target.value })
    }
    changePseudo(event) {
        this.setState({ pseudo: event.target.value }) // state de l'enfant
    } /// changePseudo
    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
   changePassword(event) {
        this.setState({ password: event.target.value }) // state de l'enfant
    } /// changeMDP
    /**
 *
 * @param {type} texte
 * @returns {undefined}
 */
    validate() {
        // console.log("validate")
        this.setState({ message: this.state.nom + "/" + this.state.prenom + "/" +this.state.pseudo + "/" + this.state.email + "/" + this.state.password })
        fetch("http://localhost:8081/usersInsertSQL?nom=" +this.state.nom + "&prenom="+ this.state.prenom + "&pseudo=" + this.state.pseudo + "&email="+ this.state.email + "&password=" + this.state.password)
        
            .then(response => {
  
                console.log(response)
                return response.json()
            })
            .then(result => {

        
                console.log(result)
                this.setState({ message: "inscription validée" })
            },
                error => {
      
                    console.log(error)
                    this.setState({ message: "erreur lors de l'inscription" })
                }
            )

    } /// validate

    render() {
        return (
            <div id="divForm">
                <h1>Inscription</h1>
                <p>
                    <textarea type="text" id="nom" value={this.state.nom} placeholder="Votre nom " onChange={this.changeNom} />
                </p>
                <p>
                    <textarea type="text" id="prenom" value={this.state.prenom} placeholder="Votre prénom " onChange={this.changePrenom} />
                </p>
                <p>
                    <textarea type="text" id="pseudo" value={this.state.pseudo} placeholder="Votre pseudo" onChange={this.changePseudo} />
                </p>
                <p>
                    <textarea type="email" id="email" value={this.state.email} placeholder="Votre Email " onChange={this.changeEmail} />
                </p>
                <p>
                    <textarea type="password" id="password" value={this.state.password} placeholder="Votre mot de passe " onChange={this.changePassword} />
                </p>
                <p>
                    <button type="button" id="valider" onClick={this.validate}>Valider</button>
                </p>
                <label id="message">{this.state.message}</label>
            </div>
        )
    } /// render
}

export default Inscription