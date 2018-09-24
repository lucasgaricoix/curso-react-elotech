import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Configuracao from './Configuracao';
import Perfil from './Perfil';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logado: true
    }
  }

  onLogin = () => {
    this.setState({logado: true});
  }

  onLogout = () => {
    this.setState({logado: false});
  }


  render() {

    const {logado} = this.state;

    return (
      <div className="App">

        <Header logado={logado} onLogin={this.onLogin} onLogout={this.onLogout}></Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/configuracao" component={Configuracao} />
          <Route path="/perfil" component={Perfil} />
        </Switch>


      </div>
    );
  }
}



export default withRouter(App);

