import React from 'react';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class MainAPP extends React.Component {
  state = {
    options: ['Golden State Warriors', 'Cleveland Cavaliers',
  'Minnesota Timberwolves','Atlanta Hawks','Detroit Pistons','New York Knicks',
'Chicago Bulls','Charlotte Hornets','Washington Wizards','Phoenix Suns',
'San Antonio Suns','Sacramento Kings','New Orleans Pelicans','Portland Trailblazers'],
    selectedOption: undefined
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handlePick = () => {
    let option = '';
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    //Used to reflect real odds for worst records in lottery
    if (randomNum <= 140) {
      option = this.state.options[0];
    }
    else if (randomNum <= 280) {
      option = this.state.options[1];
    }
    else if (randomNum <= 420) {
      option = this.state.options[2];
    }
    else if (randomNum <= 545) {
      option = this.state.options[3];
    }
    else if (randomNum <= 650) {
      option = this.state.options[4];
    }
    else if (randomNum <= 740) {
      option = this.state.options[5];
    }
    else if (randomNum <= 815) {
      option = this.state.options[6];
    }
    else if (randomNum <= 875) {
      option = this.state.options[7];
    }
    else if (randomNum <= 920) {
      option = this.state.options[8];
    }
    else if (randomNum <= 950) {
      option = this.state.options[9];
    }
    else if (randomNum <= 970) {
      option = this.state.options[10];
    }
    else if (randomNum <= 985) {
      option = this.state.options[11];
    }
    else if (randomNum <= 995) {
      option = this.state.options[12];
    }
    else if (randomNum <= 1000) {
      option = this.state.options[13];
    }
    this.setState(() => ({
      selectedOption: option
    }));
  };
  render() {

    return (
      <div>
        <Header/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
