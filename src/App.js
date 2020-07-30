import React, { Component } from 'react';
import BeginArea from './BeginArea';
import PlayArea from './PlayArea';

class App extends Component {
  state={
    diceNumber: 0,
    tempNum: 1,
    showList: [],
    extraDice: 0,
    extraTempNum: 1,
  }

  getDiceNumber = (num) => {
    this.setState({ diceNumber: +num })
  }

  addList = (random) => {
    let lists = this.state.showList;
    let num = this.state.tempNum;
    if(num <= this.state.diceNumber) {
      lists.push({num, random, extra:false});
      if(random === 1){
        let setExtraDice = this.state.extraDice + 2;
        this.setState({extraDice: setExtraDice});
      }
      this.setState({showList: lists, tempNum: ++num});
    } 
    
  }
  addExtraList = (random) => {
    let lists = this.state.showList;
    let num = this.state.extraTempNum;
    if(this.state.extraDice>0) {
      lists.push({num, random, extra: true});
      if(random === 1){
        let setExtraDice = this.state.extraDice - 1 + 2;
        this.setState({extraDice: setExtraDice});
      }else{
        let setExtraDice = this.state.extraDice - 1;
        this.setState({extraDice: setExtraDice});
      }
      this.setState({showList: lists, extraTempNum: ++num});
    } 
    
  }

  render() {
    let showLists = this.state.showList;
    return (
      <div className="ui container" id="main">
        <h1>Julia Gu React Tärning Demo</h1>
        <BeginArea getDiceNumber={this.getDiceNumber} />
        <PlayArea diceNumber={this.state.diceNumber >0 ? this.state.tempNum : 0} 
                  gameOver={ this.state.extraDice >0 ? false : (this.state.diceNumber < this.state.tempNum ? true : false)} 
                  showList={this.addList} 
                  extraDice={this.state.extraDice >0 ? this.state.extraTempNum : 0} 
                  showExtraList={this.addExtraList} 
                  resultList={showLists} />
        { showLists.length >0 && showLists.map(each => (
          <div className="ui grid" key={each.extra ? "extra"+each.num : each.num}>
                    <div className="row">
                        <div className="six wide column"> {each.extra ? "Extra tärning Nr: " : "Tärning Nr: " }{each.num}</div>
                        <div className="three wide column">Result: {each.random}</div>
                        <div className="three wide column"> {each.random === 1 && "räknas inte men två nya extra tärningar"} </div>
                    </div>
                </div>
          )
        ) }
      </div>
    );
  }
}

export default App;
