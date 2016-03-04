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
            //Add Play Label
            /* this._playLabel = new objects.Label(
                 "PLAY SCENE","60px Consolas",
                 "#000000",
                 config.Screen.CENTER_X,config.Screen.CENTER_Y);
             this.addChild(this._playLabel);*/
            // add the Rolling button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            console.log("Add button");
            this.addChild(this._startOverButton);
            this._startOverButton.on("click", this._startOverButtonClick, this);
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //PRIVATE METHODS
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
        //EVENT HANDLERS ++++++++++++++++++++
        //Rolling dices click event
        Play.prototype._startOverButtonClick = function (event) {
            console.log("Roll Over Again");
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map