var mydatabase
var mygamestate = 0
var myplayerCount = 0
var mygame, myform, myplayer
var allplayers = [];
var distance = 0
var Car1, Car2, cars;

var car1, car2, car3, car4, ground, track2;
function preload() {
    car1 = loadImage("images/car1.png")
    car2 = loadImage("images/car2.png")
    car3 = loadImage("images/car3.png")
    car4 = loadImage("images/car4.png")
    ground = loadImage("images/ground.png")
    track2 = loadImage("images/track.jpg")


}
function setup() {

    createCanvas(displayWidth - 20, displayHeight - 30);
    mydatabase = firebase.database()
    mygame = new Game()
    mygame.readstate()
    mygame.start()
}

function draw() {


    background("white");

    if (myplayerCount === 2) {
        mygame.update(1)

    }

    if (mygamestate === 1) {
        clear();
        mygame.play();
    }

    if (mygamestate === 2) {
        mygame.update(2)
        mygame.end()


    }
}