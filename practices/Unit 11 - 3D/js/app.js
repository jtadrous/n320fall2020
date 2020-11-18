var canvas = document.getElementById("myCanvas");

var engine = new BABYLON.Engine(canvas, true); //true means use WebGL
var camera, scene, sphere, light;
var t = 0;

function createScene() {
    //Create the new scene
    var scene = new BABYLON.Scene(engine);

    //Add a camera to the scene (points to the center)
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //Add lights to scene
    //var light = new BABYLON.DirectionalLight("Light1", new BABYLON.Vector3(0, -0.5, 1.0), scene);

    //Add in a mesh shape
    var torus = BABYLON.MeshBuilder.CreateTorus("Torus", {thickness: 0.2, diameter: 0.5}, scene);
    torus.position.y = -1;

    //Add and manipulate meshes in the scene
    var ground = BABYLON.MeshBuilder.CreateGround("Ground", {height: 2, width: 2, subdivisions: 4}, scene);
    ground.position.y = -1;

    //Something fun
    //Add and manipulate meshes in the scene
    sphere = BABYLON.MeshBuilder.CreateSphere("Sphere1", {diameter: .7}, scene);
    var lesserSphere = BABYLON.MeshBuilder.CreateSphere("Sphere2", {diameter: .2}, scene);
    lesserSphere.position.x = 1;
    sphere.addChild(lesserSphere);

    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(0, 0, 1);
    light.specular = new BABYLON.Color3(0, 0, 0);
    light.groundColor = new BABYLON.Color3(1, 0, 0);

    return scene;
};

scene = createScene();
engine.runRenderLoop(function () {
    t += 0.02;
    light.intensity = 1 + Math.sin(t);
    scene.render();
});