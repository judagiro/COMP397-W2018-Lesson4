module objects {
    export class Label extends createjs.Text {
        // Private Instance Variables

        //Public Properties

        //Constructor
        constructor(labelString:string, fontSize:string, fontFamily:string, fontColour:string, x: number, y:number, isCentered: Boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            if(isCentered){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }

        //Private Methods
        
        //Public Methods
    }
}