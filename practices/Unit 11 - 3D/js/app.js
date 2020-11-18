var canvas = document.getElementById("myCanvas");

var engine = new BABYLON.Engine(canvas, true); //true means use WebGL
var camera, scene;

function createScene() {
    //Create the new scene
    var scene = new BABYLON.Scene(engine);

    //Add a camera to the scene (points to the center)
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //Add lights to scene
    var light = BABYLON.DirectionalLight("Light1", new BABYLON.Vector3(0, -0.5, 1.0), scene);

    //Add in a mesh shape
    var torus = BABYLON.MeshBuilder.CreateTorus("Torus", {thickness: 0.5, diameter: 3}, scene);
    
    //Add and manipulate meshes in the scene
    var ground = BABYLON.MeshBuilder.CreateGround("Ground", {height: 2, width: 2, subdivisions: 4}, scene);

    return scene
};

scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});