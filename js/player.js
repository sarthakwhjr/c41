class Player
{
    constructor()
    {
    this.pname=null;
    this.pindex=0;
    this.pdistance=0
    this.rank=null;
    }

    readplayercount()  //read playercount from db
    {        
        var databaseref=mydatabase.ref("playerCount")
        databaseref.on("value",function (data) {
        myplayerCount=data.val() 
        })
    }
    updateplayerInfo()
    {

        var playerIndex= "players/player" + this.pindex;   // players/player1 player2
        mydatabase.ref(playerIndex).set({
            name: this.pname,
            distance: this.pdistance 
        })
    
    }

    updateCount(pcount)
    {
        mydatabase.ref("/").update({
            playerCount: pcount
        })
    }
       
    static getplayerinfo()          //class function
    {            
    var playerinforef=mydatabase.ref("players")
    playerinforef.on("value", (data)=> {
        allplayers= data.val();
    })

    }
   readcarsatend(){
   mydatabase.ref("carsatend").on("value",(data)=>{
  this.rank=data.val()


   })
   


   }
   static updatecarsatend(rank){
    mydatabase.ref("/").update({
    carsatend:rank


    })



   }

    }