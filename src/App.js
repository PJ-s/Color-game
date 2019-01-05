import React from 'react';
import "../src/index.css"

const colorListEasy = [
  {name: "Czerwony", rgb: "rgb(255, 0, 0)", hex: "#FF0000"},
  {name: "Niebieski", rgb: "rgb(0, 0, 255)", hex: "#0000FF"},
  {name: "Zielony", rgb: "rgb(0, 255, 0)", hex: "#00ff00"},
  {name: "Czarny", rgb: "rgb(0, 0, 0)", hex: "#000000"},
  {name: "Ametystowy", rgb: "rgb(153, 102, 204)", hex: "#9966cc"},
  {name: "Ceglasty", rgb: "rgb(233, 107, 57)", hex: "#e96b39"},
  {name: "Bananowy", rgb: "rgb(254, 254, 51)", hex: "#fefe33"},
  {name: "Bordowy", rgb: "rgb(128, 0, 0)", hex: "#800000"},
  {name: "Buraczkowy", rgb: "rgb(115, 0, 41)", hex: "#730029"},
  {name: "Atramentowy", rgb: "rgb(0, 49, 83)", hex: "#003153"},
  {name: "Beżowy", rgb: "rgb(194, 178, 128)", hex: "#C2B280"},
  {name: "Brązowy", rgb: "rgb(150, 75, 0)", hex: "#964B00"},
  {name: "Brunatny", rgb: "rgb(112, 32, 31)", hex: "#70201F"},
  {name: "Chabrowy", rgb: "rgb(51, 0, 204)", hex: "#3300CC"},
  {name: "Brzoskwiniowy", rgb: "rgb(255, 204, 153)", hex: "#FFCC99"},
  {name: "Cielisty", rgb: "rgb(255, 229, 180)", hex: "#FFE5B4"},
  {name: "Cyjan", rgb: "rgb(0, 255, 255)", hex: "#00FFFF"},
  {name: "Cynamonowy", rgb: "rgb(157, 91, 3)", hex: "#9D5B03"},
  {name: "Cytrynowy", rgb: "rgb(255, 255, 0)", hex: "#FFFF00"},
  {name: "Czekoladowy", rgb: "rgb(139, 71, 38)", hex: "#8B4726"},
  {name: "Ecru", rgb: "rgb(245, 245, 220)", hex: "#F5F5DC"},
  {name: "Fioletowy", rgb: "rgb(184, 3, 255)", hex: "#B803FF"},
  {name: "Fiołkowy", rgb: "rgb(238, 130, 238)", hex: "#EE82EE"},
  {name: "Fuksja", rgb: "rgb(255, 0, 255)", hex: "#FF00FF"},
  {name: "Gołębi", rgb: "rgb(198, 206, 206)", hex: "#C6CECE"},
  {name: "Grafitowy", rgb: "rgb(54, 69, 79)", hex: "#36454F"},
  {name: "Granatowy", rgb: "rgb(0, 0, 128)", hex: "#000080"},
  {name: "Groszkowy", rgb: "rgb(202, 220, 121)", hex: "#CADC79"},
  {name: "Hebanowy", rgb: "rgb(61, 43, 31)", hex: "#3D2B1F"},
  {name: "Herbaciany", rgb: "rgb(204, 93, 43)", hex: "#CC5D2B"},
  {name: "Jagodowy", rgb: "rgb(102, 0, 102)", hex: "#660066"},
  {name: "Jaśminowy", rgb: "rgb(205, 235, 167)", hex: "#CDEBA7"},
  {name: "Kakaowy", rgb: "rgb(144, 96, 48)", hex: "#906030"},
];

const colorListHard = [
  {name: "Burgund", rgb: "rgb(96, 2, 1)", hex: "#600201"},
  {name: "Cyklamen", rgb: "rgb(162, 0, 123)", hex: "#A2007B"},
  {name: "Biskupi", rgb: "rgb(255, 0, 128)", hex: "#FF0080"},
  {name: "Bursztynowy", rgb: "rgb(255, 191, 0)", hex: "#FFBF00"},
  {name: "Bury", rgb: "rgb(107, 86, 54)", hex: "#6B5636"},
  {name: "Cynober", rgb: "rgb(227, 66, 52)", hex: "#E34234"},
  {name: "Eozyna", rgb: "rgb(195, 92, 11)", hex: "#C35C6F"},
  {name: "Feldgrau", rgb: "rgb(77, 93, 83)", hex: "#4D5D53"},
  {name: "Grynszpan", rgb: "rgb(0, 166, 147)", hex: "#00A693"},
  {name: "Indygo", rgb: "rgb(75, 0, 130)", hex: "#4B0082"},
  {name: "Kanarkowy", rgb: "rgb(255, 255, 130)", hex: "#FFFF33"},
  {name: "Amarantowy", rgb: "rgb(230, 28, 102)", hex: "#E61C66"},
  {name: "Antracytowy", rgb: "rgb(54, 65, 53)", hex: "#364135"},
  {name: "Kardynalski", rgb: "rgb(255, 36, 0)", hex: "#FF2400"},

];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      running: false,
      colorsArr: [],
      goodColor: "",
      text: "",

      showAnswer: "",
      points: 0,
      hard: false,

      hardBtnColor: "",
      easyBtnColor: "#61dafb",
      activeRgb: "",
      activeHex: "",
      activeNames: "",
      hint: false,

      gameOver: false,
      gameWin: false,
      endGame: false,

      easyList: colorListEasy,

      hardList: colorListHard,
      winingCounter: colorListEasy.length,
      mode: "",
    }
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  hardMode = () => {

    this.setState({

      hard: true,
      hardBtnColor: "#61dafb",
      easyBtnColor: "",
      running: false,
      activeRgb: "",
      activeHex: "",
      activeNames: "",
    });
  };

  easyMode = () => {

    this.setState({

      hard: false,
      easyBtnColor: "#61dafb",
      hardBtnColor: "",
      running: false,
      activeRgb: "",
      activeHex: "",
      activeNames: "",
    });
  };

  generateColors = () => {

    const randomColor = this.getRandomRgb();
    const randomColorTwo = this.getRandomRgb();
    const randomColorThree = this.getRandomRgb();
    const randomColorFour = this.getRandomRgb();
    const randomColorFith = this.getRandomRgb();

    this.listToChoose = this.state.hard ? this.state.hardList: this.state.easyList;

    const goodColor = this.listToChoose[Math.floor(Math.random() * this.listToChoose.length)];

    const newArr = [];

    !this.state.hard ? newArr.push(randomColor, randomColorTwo, goodColor.rgb) : newArr.push(randomColor, randomColorTwo, goodColor.rgb, randomColorThree, randomColorFour, randomColorFith);

    const filteredArr = this.listToChoose.filter((element) => {

          if (element !== goodColor) {

            return element;
          }

    });

    console.log("filteredArr", filteredArr.length);
    console.log("counter", this.state.winingCounter);

    this.setState({

      colorsArr: this.shuffle(newArr),
      goodColor: goodColor,
      running: true,
      text: "",
      easyList: filteredArr,
      hint: false
    });
  };

  newGame = (mode) => {

    this.generateColors();

    this.setState({
      mode: mode,
      points: 0,
      endGame: false,
      easyList: colorListEasy,
      winingCounter: colorListEasy.length,
      gameOver: false,
      activeRgb: mode === "rgb" ? "#61dafb": "white",
      activeHex: mode === "hex" ? "#61dafb": "white",
      activeNames: mode === "names" ? "#61dafb": "white",
      hint: false,
      gameWin: false
    });
  };

  getRandomRgb = () => {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  checkAnswer = (element) => {


      if (element === this.state.goodColor.rgb) {

        this.state.winingCounter--;

        if (this.state.winingCounter !== 0) {

          this.setState({

            text: "DOBRZE !",
            points: this.state.points + 1,
            gameOver: false,
            hint: false
          });

          setTimeout(() => {

            this.generateColors()

          }, 800);
        }
        else {

          this.setState({
            running: false,
            gameWin: true,
            gameOver: false
          })
        }
      }

      else if (element !== this.state.goodColor.rgb) {

        this.setState({
          gameOver: true,
          gameWin: false
        });

        this.gameOver()
      }
  };

  gameOver = () => {

    this.setState({

      running: false,
      gameOver: true
    })
  };

  gameMode = (mode) => {

    if (mode === "rgb") {


      return this.state.goodColor.rgb
    }
    else if (mode === "names") {

      return this.state.goodColor.name
    }
    else if (mode === "hex") {
      return this.state.goodColor.hex
    }
  };

  handleHint = () => {

    this.setState({

      hint: true
    });

    if (this.state.winingCounter !== 1 ) {

      setTimeout(() => {

        this.generateColors()

      }, 1400);
    }
  };

  render(){

    const randomBoxes = this.state.colorsArr.map((element) => {
      return <div>
          <div onClick={() => this.checkAnswer(element)} className={"colorDiv"}
               style={{
            background: this.state.hint ? this.state.goodColor.rgb : element,
          }}>.</div>
      </div>
    });

    return (<div>
              <nav className={"navBar"}>
                <ul className={"leftBox"}>
                  <li className={"select"}>CHOOSE GAME :  </li>
                  <li><a onClick={() => this.newGame('rgb')} style={{color: this.state.activeRgb}}> | RGB |</a></li>
                  <li><a onClick={() => this.newGame('names')} style={{color: this.state.activeNames}}> | PL NAMES | </a></li>
                  <li><a onClick={() => this.newGame('hex')} style={{color: this.state.activeHex}}>| HEX |</a></li>
                </ul>
                <div className={"centerBox"}>
                  <h1 className={"title"}>CSS Color Game</h1>
                </div>
                <ul className={"difficultyBox"}>
                          <li><a onClick={this.handleHint}>| SHOW ANSWER | </a></li>
                          <li><a onClick={this.hardMode} style={{color: this.state.hardBtnColor}}>| HARD | </a></li>
                          <li><a onClick={this.easyMode} style={{color: this.state.easyBtnColor}}>| EASY | </a></li>
                        {/*<li><a onClick={this.endGame}>| END GAME |</a></li>*/}
                </ul>
              </nav>

            <div className={"container"}>
              {
                this.state.running
                    ?
                    <div>
                      <section className={"canvas"}>
                        <h1 className={"colorName"}>
                          {this.gameMode(this.state.mode)}
                        </h1>
                      </section>
                      <div className={"colorElements"}>

                        {randomBoxes}

                      </div>
                      <div className={"scoreBoard"}>
                        <p>COLORS LEFT: <span>{this.state.winingCounter}</span></p>
                      </div>
                    </div>
                    : null
              }
              {
                this.state.gameOver
                    ? <div className={"gameOver"}>
                      <h1>GAME OVER !</h1>
                      <p>YOU KNEW: {this.state.points} COLORS</p>
                    </div>
                    : null
              }

              {
                this.state.gameWin
                  ?
                    <div className={"winGame"}>
                      <h1>WINNER !</h1>
                    </div>
                    : null
              }
             </div>
          <footer className={"footer"}></footer>
        </div>
    )
  }
}

export default App;
