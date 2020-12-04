//Application level variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene; //Global variables

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
    camera = new BABYLON.UniversalCamera("UCamera", new BABYLON.Vector3(0,0,0), scene);

    return scene;
}