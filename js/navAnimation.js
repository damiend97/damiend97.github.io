var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.strokeStyle = 'rgba(0,0,0,0)';

const colors = [
	'rgba(0,255,0,.3)',
	'rgba(0,0,255,.3)',
	'rgba(255,0,127,.3)',
	'rgba(255,128,0,.3)',
	'rgba(0,255,0,.3)',
	'rgba(0,0,255,.3)',
	'rgba(255,0,127,.3)',
	'rgba(255,128,0,.3)',
	'rgba(0,255,0,.3)',
	'rgba(0,0,255,.3)',
	'rgba(255,0,127,.3)'
];

function step() {
	setTimeout(function() {
		c.clearRect(0, 0, canvas.width, canvas.height);

		for (let i=0; i<15; i++) {
			var rand = Math.random() * 10;
			rand = Math.round(rand);
			let color = colors[rand];
			c.fillStyle = color;

			c.beginPath()
			c.arc((125 * (Math.random() * 10)), (100 * (Math.random() * 10)), 50, 0, Math.PI * 2, false);
			c.stroke();
			c.closePath();
			c.fill();
		}
		window.requestAnimationFrame(step);
	}, 1000);
}

window.requestAnimationFrame(step);