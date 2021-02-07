class Form {
        constructor() {
                this.title = createElement("h2")
                this.input = createInput("name")
        
                this.button = createButton("play")
                this.greeting = createElement('h3');
                this.reset=createButton("reset")
        }

        allhide() {


                this.input.hide()
                this.button.hide()
                this.greeting.hide();
        }
        display() {

                this.title.html("CAR RACING GAME")
                this.title.position(displayWidth / 2 - 50, 0);
this.reset.position(displayWidth-150,20)
                this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
                this.button.position(displayWidth / 2 + 30, displayHeight / 2);
                this.button.mousePressed(() => {

                        this.input.hide();
                        this.button.hide();

                        myplayer.pname = this.input.value();
                        myplayerCount += 1;
                        myplayer.pindex= myplayerCount
                        myplayer.updateplayerInfo()
                        myplayer.updateCount(myplayerCount);

                        this.greeting.html("Hello " + myplayer.pname)
                        this.greeting.position(displayWidth/2-70,displayHeight/4)
                });
     this.reset.mousePressed(()=>{
    myplayer.updateCount(0)
    mygame.update(0)


     })
        }
}