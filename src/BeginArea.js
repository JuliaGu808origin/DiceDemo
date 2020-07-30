import React, { Component } from 'react';
import './style.css';


class BeginArea extends Component {

    handleChooseNum = (event) => {
        event.preventDefault();
        let selected = document.getElementById("number");
        this.props.getDiceNumber(selected.value);
        let buttonDiv1 = document.getElementById("button1");
        buttonDiv1.disabled = true;
        let buttonDiv2 = document.getElementById("button2");
        buttonDiv2.style.visibility = "visible";
    }

    playAgain = () => {
        window.location.reload();
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleChooseNum}>
                <div className="field">
                    <label>Välja tärnings mängd:</label>
                    <select id="number">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <button type="onSubmit" id="button1" className="button" >Okej</button>
                    <button type="button" id="button2" onClick={this.playAgain} className="button" style={{marginLeft: "10px", visibility:"hidden"}} >Spela igen</button>
                </div>
            </form>
        );
    }
}

export default BeginArea;
