const CANVAS_BASE_HEIGHT = 1000;
const CANVAS_BASE_WIDTH = 1000;

const ORIGINAL_REC_WIDTH = 200;
const ORIGINAL_REC_HEIGHT = 100;

const REDRAWN_REC_WIDTH = 300;
const REDRAWN_REC_HEIGHT = 200;

const REDRAWN_REC_ANGLE = 45;

window.addEventListener('load', () => {
	let baseCanvas = document.createElement("canvas");
	baseCanvas.width = CANVAS_BASE_HEIGHT;
	baseCanvas.height = CANVAS_BASE_WIDTH;
	document.querySelector('.js_canvas_base').appendChild(baseCanvas);

	const ctx = baseCanvas.getContext('2d');
	ctx.fillStyle = '#0095DD';
	ctx.fillRect(
		CANVAS_BASE_WIDTH/2 - (ORIGINAL_REC_WIDTH/2),
		CANVAS_BASE_HEIGHT/2 - (ORIGINAL_REC_HEIGHT/2),
		ORIGINAL_REC_WIDTH,
		ORIGINAL_REC_HEIGHT
	);
	
	document.querySelector('.js_canvas_action').addEventListener("click", () => {
		ctx.clearRect(0, 0, CANVAS_BASE_WIDTH, CANVAS_BASE_HEIGHT);

		ctx.fillStyle = '#0095DD';
		ctx.translate(CANVAS_BASE_WIDTH/2, CANVAS_BASE_HEIGHT/2);
		ctx.rotate((Math.PI / 180) * REDRAWN_REC_ANGLE);
		ctx.fillRect(
			-(REDRAWN_REC_WIDTH/2),
			-(REDRAWN_REC_HEIGHT/2),
			REDRAWN_REC_WIDTH,
			REDRAWN_REC_HEIGHT
		);
	});
});