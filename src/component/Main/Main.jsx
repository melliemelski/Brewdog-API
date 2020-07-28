import React, { Component } from 'react';
import CardList from "../CardList/CardList";
import styles from "./Main.module.scss"


class Main extends Component {

  render() { 
    return ( 
    <div className={styles.landing}>
      <CardList beers={this.props.beers}/>
    </div>
    );
  }
}
 
export default Main;