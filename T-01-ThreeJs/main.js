import * as THREE from 'three';

const scene = new THREE.Scene()//This line is to create a new virtual world.


const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);//Creating the camera THREE.PerspectiveCamera(fov,aspect ratio,near,far)
scene.add(camera);//Camera added inside the scene
camera.position.z=5

// MESH --> shape + material
const cubeGeometry = new THREE.BoxGeometry(1,1,1)//Width,Height and depth
const cubeMaterial = new THREE.MeshBasicMaterial({
  color:0x00FF00
})

const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cube)

const light = new THREE.DirectionalLight(0xFFFFFF,1)// Without light we can't see anything {clolr,intensity}
scene.add(light);
light.position.y=4

// All the calculations is done by renderer like light kaise aae ge.

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)

document.body.appendChild(renderer.domElement)

function animate(){//This will render light and final image 16 times in a minute.
  cube.rotation.y += 0.05
  cube.rotation.x += 0.05
  cube.rotation.z += 0.05
  renderer.render(scene,camera)
}

renderer.setAnimationLoop(animate)

console.log(camera.position,cube.position,light.position);//by default its value is x:0,y:0,z:0 except light because it's position is x:0,y:1,z:0