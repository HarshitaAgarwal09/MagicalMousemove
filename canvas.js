let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

var position = {
	x: 0,
	y: 0
}

function to_happen(event){
	position.x = event.clientX;
	position.y = event.clientY;	
}

function resize(){
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
}

document.addEventListener('mousemove',to_happen);
document.addEventListener('resize' , resize)

function Circle(x,y,radius,dx,dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.draw = function(){
		context.beginPath();
		context.arc(this.x,this.y,this.radius,0,2*Math.PI);
		context.stroke();
		context.fillStyle='#FB4B4E'
		context.fill();
	}
	this.update = function(){
		this.x=this.x+this.dx;
		this.y=this.y+this.dy;
		this.radius=this.radius-0.6;
		if(this.radius>=0){
			this.draw();
		}
	}
}

var Circle_array = []

function animate(){
	requestAnimationFrame(animate)
	context.clearRect(0,0,window.innerWidth,window.innerHeight)
	var dx = (Math.random()-0.5)*3.5;
	var dy = (Math.random()-0.5)*3.5;
	Circle_array.push(new Circle(position.x, position.y, 25, dx, dy));
	for(var i in Circle_array){
		Circle_array[i].update();
	}
}

animate()