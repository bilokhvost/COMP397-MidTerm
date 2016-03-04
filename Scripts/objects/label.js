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
 Commit 5: updated labels

*/
var objects;
(function (objects) {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        function Label(labelString, labelFont, labelColour, x, y, isCentered) {
            _super.call(this, labelString, labelFont, labelColour);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map