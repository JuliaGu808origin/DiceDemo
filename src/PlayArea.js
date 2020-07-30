import React, { Component } from 'react';
import './style.css';


class PlayArea extends Component {

    handleRandom = () => {
        let num = Math.floor(Math.random() * 6) + 1;
        this.props.showList(num);
    }

    handleExtraRandom = () => {
        let num = Math.floor(Math.random() * 6) + 1;
        this.props.showExtraList(num);
    }

    showResult = () => {
        let showLists = this.props.resultList;
        let realLists = showLists.filter(each => each.random !== 1);
        let count = 0;
        realLists.forEach(each => {
          count = count+each.random;
        } );
        console.log(showLists);
        console.log(count);
        return count;
    }

    render() {
        return (
            this.props.diceNumber >0 && (
                this.props.gameOver ? (
                <div className="ui grid">
                    <div className="row">
                        Game Over
                    </div>
                    <div className="row">
                        Total number: {this.showResult()}
                    </div>
                </div>) : 
                (this.props.extraDice>0 ? (
                    <div className="ui grid">
                    <div className="row">
                        <div className="six wide column">extra tärning Nr {this.props.extraDice} </div>
                        <div className="six wide column">
                            <button onClick={this.handleExtraRandom} className="button">slås</button>                      
                        </div>
                    </div>
                </div>
                ) : 
                (
                    <div className="ui grid">
                    <div className="row">
                        <div className="six wide column">tärning Nr {this.props.diceNumber} </div>
                        <div className="six wide column">
                            <button onClick={this.handleRandom} className="button">slås</button>                      
                        </div>
                    </div>
                </div>)
                )
            )
        );
    }
}

export default PlayArea;