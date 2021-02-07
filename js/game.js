class Game {
    constructor() {

    }
    readstate()        //db gamestate
    {
        var databaseref = mydatabase.ref("gameState")
        databaseref.on("value", function (data) {
            mygamestate = data.val()
        })


    }

    update(gs) {
        mydatabase.ref("/").update({
            gameState: gs


        })
    }
    async start() 
    {
        if (mygamestate === 0) //0=waiting, 1=play, 2=end
        {        

            myplayer = new Player()
            var playercountref = await mydatabase.ref("playerCount").once("value");

            if (playercountref.exists()) 
            {
                myplayerCount = playercountref.val();
                myplayer.readplayercount()
            }



            myform = new Form()
            myform.display()
        }

Car1=createSprite(100,200)
Car1.addImage(car1)

Car2=createSprite(300,200)
Car2.addImage(car2)

//Car3=createSprite(500,200)
//Car3.addImage(car3)

//Car4=createSprite(700,200)
//Car4.addImage(car4)
//cars=[Car1,Car2,Car3,Car4]
cars=[Car1,Car2]

    }

    play() 
    {

        myform.allhide();

        textSize(30);
        text("GAME START", 120, 100);

        Player.getplayerinfo();     //static function 
        myplayer.readcarsatend()
        if(allplayers !== undefined)
        {
            background("white");
            image(track2,0,-displayHeight*4,displayWidth,displayHeight*5)

            textSize(30)
            text("GAME START", 300,300)
            //var displaypos = 130;

            var index= 0;

            //x y of cars
            var x= 175;
            var y;

            for(var plr in allplayers)
            {
               index=index+1;

               x=x+200;
                
            y = displayHeight - allplayers[plr].distance;  //db distance
            cars[index-1].x=x
            cars[index-1].y=y

                //text(allplayers[plr].name + ":" + allplayers[plr].distance ,120, displaypos);
            if(index===myplayer.pindex)
            {
                strokeWeight(10)
                fill("red")
                ellipse(x,y,60,60)
           cars[index-1].shapeColor=red

    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y

           
            }
        }
    }

        if (keyDown("UP_ARROW") && myplayer.pindex !== null) 
        {

            myplayer.pdistance +=50;
            myplayer.updateplayerInfo();
        }
        if(myplayer.pdistance===3600)
        {

         mygamestate=2
         myplayer.rank+=1
         Player.updatecarsatend(myplayer.rank)
         

        }
drawSprites();
    }
    end()
         {
            //console.log("Game Ended");
            textSize(30)
            text("END STATE",displayWidth/2,displayHeight-100)
            text("PLAYER RANK IS"+myplayer.rank,displayWidth/2,displayHeight/2)
            console.log("Rank"+myplayer.rank)
            myform.greeting.html("PLAYER RANK IS"+myplayer.rank)
            myform.greeting.position(displayWidth/2,displayHeight/2)
        }

   
    
}