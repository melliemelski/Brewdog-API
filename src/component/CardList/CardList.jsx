import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss";


class CardList extends Component {
    getCards = (beer) => (
        <div className={styles.card} key={beer.id}>
            <Card beer={beer}/>
        </div>
    );

    render() {
        const { beers } = this.props.beers;
        return (
            <section className={styles.cards}>
                {this.props.beers.map(this.getCards)}
            </section>
        );
    }
}
 
export default CardList;