//Application level variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, ball; //Global variables

//Creating the scene
scene = createScene();
engine.runRenderLoop( function() {
    scene.render();
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
    ball.physicsImpostor = new BABYLON.physicsImpostor(
        ball, BABYLON.PhysicsImpostor.SphereImpostor,
        {mass: 1, restitution: .2}, scene
    );

    return scene;
}