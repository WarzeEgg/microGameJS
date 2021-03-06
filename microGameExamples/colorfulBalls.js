microGame({
	width: 1000,
	height: 700,
	noscaling: false,
	pixelated: false,
	bodybackground: '#0B8E69',
	gamebackground: '#000000'
})

for (i = 0; i < 100; i ++) {
	new GameElement({
		name: "Ball",
		type: "Circle",
		xvel: Math.random() * 10 - 5,
		yvel: Math.random() * 10 - 5,
		opacity: Math.random(),
		bounciness: 1,
		friction: 1,
		width: Math.random() * 100 + 50,
		height: Math.random() * 100 + 50,
		physics: true,
		collidewalls: true,
		gravityy: 0.15,
		color: randomColor()
	})
}

function draw() {}