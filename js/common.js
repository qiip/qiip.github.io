var setHallCircleArcs = function() {
	var c = $('div.hall-circles'),
		configs = [
		{
			el: c.find('div.hc1 > canvas')[0],
			arcs: [
				{
					radius: 110,
					startingAngle: 1.75 * Math.PI,
					endingAngle: 1.25 * Math.PI,
					lineWidth: 1,
					strokeStyle: '#3cadf9'
				},
				{
					radius: 120,
					startingAngle: 2 * Math.PI,
					endingAngle: 1.5 * Math.PI,
					lineWidth: 1,
					onHover: {
						radius: 115,
						lineWidth: 10
					},
					strokeStyle: '#f15525'
				}
			]			
		},
		{
			el: c.find('div.hc2 > canvas')[0],
			arcs: [
				{
					radius: 110,
					startingAngle: 2.2 * Math.PI,
					endingAngle: 1.75 * Math.PI,
					lineWidth: 1,
					strokeStyle: '#3cadf9'
				},
				{
					radius: 120,
					startingAngle: 2.5 * Math.PI,
					endingAngle: 2 * Math.PI,
					lineWidth: 1,
					onHover: {
						radius: 115,
						lineWidth: 10
					},
					strokeStyle: '#f15525'
				}
			]
		},
		{
			el: c.find('div.hc3 > canvas')[0],
			arcs: [
				{
					radius: 110,
					startingAngle: 1.25 * Math.PI,
					endingAngle: 0.75 * Math.PI,
					lineWidth: 1,
					strokeStyle: '#3cadf9'
				},
				{
					radius: 120,
					startingAngle: 1.5 * Math.PI,
					endingAngle: 1 * Math.PI,
					lineWidth: 1,
					onHover: {
						radius: 115,
						lineWidth: 10
					},
					strokeStyle: '#f15525'
				}
			]
		},
		{
			el: c.find('div.hc4 > canvas')[0],
			arcs: [
				{
					radius: 110,
					startingAngle: 0.75 * Math.PI,
					endingAngle: 0.25 * Math.PI,
					lineWidth: 1,
					strokeStyle: '#3cadf9'
				},
				{
					radius: 120,
					startingAngle: 1 * Math.PI,
					endingAngle: 0.5 * Math.PI,
					lineWidth: 1,
					onHover: {
						radius: 115,
						lineWidth: 10
					},
					strokeStyle: '#f15525'
				}
			]
		}
	], config, canvas, CENTER = 120;

	// Added by Leonid 27.03.2015
	if ($(window).width() <= 800) {
		configs[0].arcs[0].radius = 89;
		configs[1].arcs[0].radius = 89;
		configs[2].arcs[0].radius = 89;
		configs[3].arcs[0].radius = 89;
		configs[0].arcs[1].radius = 98;
		configs[1].arcs[1].radius = 98;
		configs[2].arcs[1].radius = 98;
		configs[3].arcs[1].radius = 98;
		configs[0].arcs[1].onHover.radius = 93;
		configs[1].arcs[1].onHover.radius = 93;
		configs[2].arcs[1].onHover.radius = 93;
		configs[3].arcs[1].onHover.radius = 93;
		CENTER = 98;
	}
	// EndOf Added by Leonid 27.03.2015

	var drawArc = function(ctx, arc, hovered) {
		hovered = hovered === true && 'onHover' in arc;
		ctx.beginPath();
		ctx.arc(CENTER, CENTER, (hovered ? arc.onHover : arc).radius, arc.startingAngle, arc.endingAngle, false);		
		ctx.lineWidth = (hovered ? arc.onHover : arc).lineWidth;
		ctx.strokeStyle = arc.strokeStyle;
		ctx.stroke();
	}

	var drawArcs = function(ctx, arcs, hovered) {
		for (var j in arcs) {
			drawArc(ctx, arcs[j], hovered);
		}
	}

	var setHoverHandler = function(canvas, i) {
		var ctx;

		$(canvas).next().hover(
			function () {
				ctx = canvas.getContext('2d');
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawArcs(ctx, configs[i].arcs, true);
			},
			function () {
				ctx = canvas.getContext('2d');
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawArcs(ctx, configs[i].arcs);
			}
		);
	}

	for (var i in configs) {
		config = configs[i];
		canvas = config.el;
		// Added by Leonid 27.03.2015
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// EndOf Added by Leonid 27.03.2015
		drawArcs(canvas.getContext('2d'), config.arcs);
		setHoverHandler(canvas, i);
	}
	
}

setHallCircleArcs();
    