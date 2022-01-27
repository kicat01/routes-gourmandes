import React from "react";

import Inscription from "./composants/Inscription.js";
import AjoutRecette from "./composants/AjoutRecette.js";
import Home from "./composants/Home.js";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {

  return (
      
    <Router>
      <div id="body">
      <div id="Titre">
                <h1 id="titre">Sans-gourmands</h1>
        </div>

        <nav className="navbar ">
          <ul className="navbar-nav-sp-bt">

          <li className="btn btn-light navbar-brand ">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/Home">Accueil</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/">Recettes</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/">Se connecter</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/Inscription">Inscription</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/AjoutRecette">Ajouter une recette</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/">Modifier mes recettes</Link>
            </li>

            <li className="btn btn-light navbar-brand">
              <Link style={{ textDecoration: 'none', color: "deeppink",fontSize:"30px",fontFamily : 'Homemade Apple'}} to="/">Mon compte</Link>
            </li>

            

          </ul>
        </nav>

        <Switch>



          <Route path="/AjoutRecette">
            <AjoutRecette/>
          </Route>

          <Route path="/Inscription">
            <Inscription/>
          </Route>

        <Route path="/">
            <Home/>
          </Route>





        </Switch>
      </div>
    </Router>
  
  );
}