import React, { Component } from 'react';
import styles from "./Card.module.scss";

class Card extends Component {
  shortenDescrip = (description) =>
  description.length < 300
    ? description
    : description.substring(0, 90) + "...";
  
  render() { 
    const {
      name,
      description,
      image_url
    } = this.props.beer;
    return ( 
    <>
      <div className={styles.Card}>
        <img src={image_url} alt="Beer image"/>
        <section>
          <h3>{name}</h3>
          <p>
            {<span>{description}</span>}
          </p>
        </section>
      </div>
    </>
    );
  }
}

export default Card;