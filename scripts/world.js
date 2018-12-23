/*globals Matter */
window.addEventListener('load', function() {

var myCanvas = document.getElementById('world');
var engine = Matter.Engine.create();
var world = engine.world;
var render = Matter.Render.create({
  canvas: myCanvas,
  engine: engine,
  options: {
  	width: window.innerWidth,
  	height: window.innerHeight,
    background: 'blue',
    wireframes: false,
    showAngleIndicator: false
  }
});

world.width = innerWidth;
world.height = innerHeight;

var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
  element: myCanvas,
  constraint: {
    render: {
      visible: true
    },
    stiffness: 0.08
  }
});
Matter.World.add(world, mouseConstraint);

var ball = Matter.Bodies.circle(100, 100, 20, {
  density: 0.04,
  friction: 0.01,
  frictionAir: 0.00001,
  restitution: 0.8,
  render: {
    fillStyle: '#F35e66',
    strokeStyle: 'black',
    lineWidth: 1
  }
});
Matter.World.add(world, ball);

var floor = Matter.Bodies.rectangle(world.width/2, world.height+20, world.width, 40, {
  isStatic: true,
  render: {
    visible: false
  }
});
Matter.World.add(world, floor);

var leftWall = Matter.Bodies.rectangle(-20, world.height/2, 40, world.height, {
	isStatic: true,
	render: {
		visible: false
	}
});
Matter.World.add(world, leftWall);

var rightWall = Matter.Bodies.rectangle(world.width+20, world.height/2, 40, world.height, {
	isStatic: true,
	render: {
		visible: false
	}
});
Matter.World.add(world, rightWall);

var ceiling = Matter.Bodies.rectangle(world.width/2, -20, world.width, 40, {
	isStatic: true,
	render: {
		visible: false
	}
});
Matter.World.add(world, ceiling);

mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

Matter.Engine.run(engine);
Matter.Render.run(render);

});
