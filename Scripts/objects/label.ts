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
module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number, isCentered:boolean) {
            super(labelString, labelFont, labelColour);
           if (isCentered){
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            
        }
    }
} 