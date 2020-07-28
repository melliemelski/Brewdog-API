import React, { Component } from 'react';
import styles from "./App.module.scss";
import NavBar from "./component/NavBar/NavBar";
import Main from "./component/Main/Main";

export default class App extends Component {
  state = {
    beers: []
  };


  fetchBeer = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then((data) => {

        this.setState({
          beers: data
        });
      })
      .catch(error => console.log(error));
    }
    componentDidMount() {
      this.fetchBeer();
    }
    

  render() {
    return (
          <>
            <div className={styles.app}>
            <NavBar />
            <Main beers={this.state.beers}/>
            </div>
          </>
        ) 
    
  }
}