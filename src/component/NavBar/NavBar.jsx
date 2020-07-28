import React, { Component } from 'react';
import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.jpg"

class NavBar extends Component {
  render() { 
    return ( 
    <>
    <div className={styles.Nav}>
      <img src={logo}/>
      <p>FIND YOUR BEER</p>
      <input className={styles.input}></input>
      <p>FILTER YOUR BEERS</p>
      <form className={styles.form}>
      {/* <FilterItem text={'ABV over 6%'} value={'highABV'}> */}
      </form>
    </div>
    </> 
    );
  }
}
 
export default NavBar;