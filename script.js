
//because the THREE variable is being imported through the script in the index.html no import is needed above.
const scene = new THREE.Scene(); //creates a new scene for our render

//red cube

const geometry = new THREE.BoxGeometry(1, 1, 1); //1 unit size, the size of the unit is up to me, meter, km, etc.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000}); //threejs color class, the most correct way to use it, 0x then hexadecimals.
const mesh = new THREE.Mesh(geometry, material); //the mesh, aka the visual of the cube is provided by the geometry and the material.
scene.add(mesh);

//Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //first parameter is fov, field of view is vertical not horizontal which is standard.
camera.position.z = 3 //changes the position of the camera backwards, Z is towards us by default. 
camera.position.y = 1 //changes the position of the camera backwards, y is vertical. 
camera.position.x = 1 //changes the position of the camera backwards, x is horizontal. 
//second parameter is aspect ratio.
scene.add(camera)

//the rendered creates a canvas which is a html element where you can draw stuff, basically the rendered draws on the canvas and displays the results.
//You can either create the canvas yourself or let Three.js do it.

// Renderer
const canvas = document.querySelector('.webgl') //gets the class that is webgl
console.log(canvas)
const renderer = new THREE.WebGLRenderer({    //uses the webGL rendered, there is also svg renderer and css rendered but they are less good for performance.
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height) //sets the size of the renderer, aka the viewport on the page.

renderer.render(scene, camera);