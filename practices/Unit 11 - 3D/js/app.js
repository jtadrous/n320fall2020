var canvas = document.getElementById("myCanvas");

var engine = new BABYLON.Engine(canvas, true); //true means use WebGL
var camera;
var scene;

function createScene() {
    //Create the new scene
    var scene = new BABYLON.Scene(engine);

    //Add a camera to the scene (points to the center)
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    return scene
};

scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});