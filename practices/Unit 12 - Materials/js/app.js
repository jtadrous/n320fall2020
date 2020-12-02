var canvas = document.getElementById("myCanvas");

var engine = new BABYLON.Engine(canvas, true); //true means use WebGL
var camera, scene, sphere, light, mat1, mat2;
var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();

function createScene() {
    //Create the new scene
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);

    //Add a camera to the scene (points to the center)
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //Add lights to scene
    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);

    //Add and manipulate meshes in the scene
    //Ice Cream Sphere
    sphere = BABYLON.MeshBuilder.CreateSphere("Sphere1", {diameter: 1}, scene);
    sphere.position.y = 2;
    mat1 = new BABYLON.StandardMaterial("Base1", scene);
    mat1.diffuseTexture = new BABYLON.Texture("img/cream3.jpg", scene);
    mat1.specularColor = new BABYLON.Color3(0.1,0.1,0.5);
    sphere.material = mat1;
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);
    sphere.physicsImpostor.physicsBody.linearDamping = .5;
    sphere.physicsImpostor.physicsBody.angularDamping = .5;

    //Ice Cream Cone
    const cylinder = BABYLON.MeshBuilder.CreateCylinder("Cone", {diameterBottom: 0});
    cylinder.position.y = -1;
    mat2 = new BABYLON.StandardMaterial("Base2", scene);
    mat2.diffuseTexture = new BABYLON.Texture("img/cone.jpg", scene);
    mat2.specularColor = new BABYLON.Color3(0.2,0.1,0.1);
    cylinder.material = mat2;
    cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.9}, scene);
    cylinder.physicsImpostor.friction = 6;

    return scene;
};

scene = createScene();
//Render
engine.runRenderLoop(function () {
    mat1.diffuseTexture.uOffset += 0.001;
    scene.render();
});

//Pick Action
window.addEventListener("click", function() {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    console.log(pickResult.pickedMesh);
    var pushDir = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;
    pushDir = pushDir.scale(3);
    console.log(pushDir);

    //Applying a Force
    pickResult.pickedMesh.physicsImpostor.applyForce(
        pushDir,
        pickResult.pickedMesh.getAbsolutePosition()
    );
});