//Application level variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, ball, target, toid; //Global variables

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
    var light = new BABYLON.DirectionalLight("Light", new BABYLON.Vector3(0,-.5,1), scene);


    //Enable the physics with cannon.js
    var gravity = BABYLON.Vector3(0, -9.81, 0);
    var physics = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravity, physics);

    //Creating a sphere and physics impostor
    ball = BABYLON.MeshBuilder.CreateSphere("Sphere", {diameter: 1}, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(
        ball, BABYLON.PhysicsImpostor.SphereImpostor,
        {mass: 1, restitution: .2}, scene
    );

    //Creating the ground of the scene and physics impostor
    var ground = BABYLON.MeshBuilder.CreateGround("Ground", {height: 20, width: 20, subdivisions: 4}, scene);
    ground.position.y = -3;
    ground.position.z = 7;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
        ground, BABYLON.PhysicsImpostor.BoxImpostor,
        {mass: 0, restitution: .9}, scene
    );

    //Make a goal
    target = new BABYLON.MeshBuilder.CreateBox("Goal", {height: 5, width: 5}, scene);
    target.position.z = 7;
    target.position.x = (Math.random() * 8) - 4;

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
}

//Adding an listener for the click event to the scene
window.addEventListener("click", function() {
    //Retrieves the mesh of the object that was clicked
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    //Null Check
    if(selectedObject) {
        //Get the direction away from where the user clicked on the object
        var surfaceNorm = pickResult.getNormal(true);
        var forceDir = surfaceNorm.scale(-700);

        //Applying an upwards force to the selected object
        selectedObject.physicsImpostor.applyForce(
            forceDir, //new BABYLON.Vector3(0,500,0),
            selectedObject.getAbsolutePosition()
        );

        //Timeout: reset the object after 3 seconds
        this.setTimeout(resetBall, 3000);
    }
});