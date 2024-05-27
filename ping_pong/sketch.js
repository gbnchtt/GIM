let posizioneX, posizioneY
let velX, velY


function setup() {
createCanvas(windowWidth,windowHeight)

	posizioneX=width/2
	posizioneY=height/2

	velX= 20
	velY= 3
	
}

//posizioneX=width/2



function windowResized () {
resizeCanvas (windowWidth, windowHeight)

}

function draw () {

	
	posizioneX=posizioneX + velX
	posizioneY=posizioneY + velY



if (posizioneX>= width|| posizioneX < 0) {
	velX=-velX 
}




if (posizioneY>= height || posizioneY < 0){
	velY=-velY
}

background(200)

circle (posizioneX,posizioneY,30)
}







	











	
	

