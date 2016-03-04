var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
Kateryna Bilokhvost
Last modified by:Kateryna Bilokhvost
Last Modified date: March 4, 2016
Description: Dice Rolling Game
Revision History:
 Commit 1: Initial Commit
 Commit 2: added list of assets to the game.ts
 Commit 3: Added the initialized bitmap array
 Commit 4: Added tha random generation functionality
*/
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // add the Rolling button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            console.log("Add button");
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            this._diceOneText = new objects.Label("1", "20px Consolas", "#4c4c4c", 155, 272, false);
            this.addChild(this._diceOneText);
            this._diceTwoText = new objects.Label("1", "20px Consolas", "#4c4c4c", 455, 272, false);
            this.addChild(this._diceTwoText);
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //PRIVATE METHODS
        // initialize the array of dicers
        Play.prototype._initializeBitmapArray = function () {
            this._dices = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._dices[dice] = new createjs.Bitmap(assets.getResult("DiceOne"));
                console.log(dice);
                this._dices[dice].x = 75 + (dice * 290);
                this._dices[dice].y = 60;
                this.addChild(this._dices[dice]);
                console.log(this._dices[dice]);
            }
        };
        //rolling the dices 
        Play.prototype._rollDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var diceRoll = 0; diceRoll < 2; diceRoll++) {
                outCome[diceRoll] = Math.floor(Math.random() * 6) + 1;
                switch (outCome[diceRoll]) {
                    case 1:
                        betLine[diceRoll] = "DiceOne";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "1";
                        }
                        else
                            this._diceTwoText.text = "1";
                        break;
                    case 2:
                        betLine[diceRoll] = "DiceTwo";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "2";
                        }
                        else
                            this._diceTwoText.text = "2";
                        break;
                    case 3:
                        betLine[diceRoll] = "DiceThree";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "3";
                        }
                        else
                            this._diceTwoText.text = "3";
                        break;
                    case 4:
                        betLine[diceRoll] = "DiceFour";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "4";
                        }
                        else
                            this._diceTwoText.text = "4";
                        break;
                    case 5:
                        betLine[diceRoll] = "DiceFive";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "5";
                        }
                        else
                            this._diceTwoText.text = "5";
                        break;
                    case 6:
                        betLine[diceRoll] = "DiceSix";
                        if (diceRoll == 0) {
                            this._diceOneText.text = "6";
                        }
                        else
                            this._diceTwoText.text = "6";
                        break;
                }
            }
            return betLine;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //Rolling dices click event
        Play.prototype._startOverButtonClick = function (event) {
            console.log("Roll Over Again");
            var bitmap = this._rollDice();
            for (var dice = 0; dice < 2; dice++) {
                this._dices[dice].image = assets.getResult(bitmap[dice]);
            }
            //  this._diceOneText.text = "1";
            // this._diceTwoText.text = "1";
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map