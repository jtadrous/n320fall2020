//Application level variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, ball, target, toid, particles, mat1, mat2; //Global variables

//Creating the scene
scene = createScene();
engine.runRenderLoop( function() {
    scene.render();
});

//Function will run whenever the screen is redrawn
scene.registerAfterRender( function() {
    //Checks if the ball touches the target
    if(ball.intersectsMesh(target, false)) {
        //console.log("Ye");
        //Moves the goal again
        target.position.x = (Math.random() * 8) - 4;

        //Add a particle burst
        particles.manualEmitCount = 15;
        particles.start();

        //Position those particles
        particles.minEmitBox = ball.position;
        //particles.maxEmitBox = ball.position;

        //Resets the ball again
        resetBall();
    }
});

//Standard Babylon setup
function createScene() {
    //Scene variable, not referring to the global one
    var scene = new BABYLON.Scene(engine);

    //Creating the camera
    camera = new BABYLON.UniversalCamera("UCamera", new BABYLON.Vector3(0,0,-15), scene);

    //Creating a light
    var light = new BABYLON.DirectionalLight("Light", new BABYLON.Vector3(0,-.5,.6), scene);

    //Enable the physics with cannon.js
    var gravity = BABYLON.Vector3(0, -9.81, 0);
    var physics = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravity, physics);

    //Creating a sphere, physics impostor, and material
    ball = BABYLON.MeshBuilder.CreateSphere("Sphere", {diameter: 1}, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(
        ball, BABYLON.PhysicsImpostor.SphereImpostor,
        {mass: 1, restitution: .2}, scene
    );
    ball.tag = "ball";
    mat1 = new BABYLON.StandardMaterial("Base1", scene);
    mat1.specularColor = new BABYLON.Color3(0.1,0.1,0.5);
    ball.material = mat1;

    //Creating the ground of the scene and physics impostor
    var ground = BABYLON.MeshBuilder.CreateGround("Ground", {height: 20, width: 20, subdivisions: 4}, scene);
    ground.position.y = -3;
    ground.position.z = 7;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
        ground, BABYLON.PhysicsImpostor.BoxImpostor,
        {mass: 0, restitution: .9}, scene
    );

    //Make a goal and material
    target = new BABYLON.MeshBuilder.CreateBox("Goal", {height: 5, width: 5}, scene);
    target.position.z = 7;
    target.position.x = (Math.random() * 8) - 4;
    mat2 = new BABYLON.StandardMaterial("Base2", scene);
    mat2.specularColor = new BABYLON.Color3(0.1,0.1,0.5);
    target.material = mat2;

    //Setup particle system
    particles = new BABYLON.ParticleSystem("Particles", 2000, scene);
    particles.emitter = new BABYLON.Vector3(0,0,0);
    particles.minEmitPower = 1;
    particles.maxEmitPower = 4;
    particles.addVelocityGradient(0,3);
    //particles.start();
    //particles.position.z = 7;

    //Load in the particle texture
    particles.particleTexture = new BABYLON.Texture("img/thumb.png");

    //The function returns the whole scene as a variable
    return scene;
}

//Function to reset the ball to beginning
function resetBall() {
    //Reset ball position
    ball.position = new BABYLON.Vector3();
    //Reset linear velocity
    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
    //Reset rolling velocity
    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

    //Clear the timeout if it is still going
    clearTimeout(toid);
}

//Adding an listener for the click event to the scene
window.addEventListener("click", function() {
    //Retrieves the mesh of the object that was clicked
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    //Null Check
    if(selectedObject) {
        //Makes sure to check that what you clicked is the ball
        if(selectedObject.tag == "ball") {
            console.log("tag");
            //Get the direction away from where the user clicked on the object
            var surfaceNorm = pickResult.getNormal(true);
            var forceDir = surfaceNorm.scale(-700);

            //Applying an upwards force to the selected object
            selectedObject.physicsImpostor.applyForce(
                forceDir, //new BABYLON.Vector3(0,500,0),
                selectedObject.getAbsolutePosition()
            );

            //Timeout: reset the object after 3 seconds
            toid = setTimeout(resetBall, 3000);
        }
    }
});