/** Html Shit */
const container = document.getElementById("container");
const header = document.createElement("div");
header.classList.add("container__header");
header.innerHTML = "3D Demo";
const body = document.createElement("div");
body.classList.add("container__body");
container.appendChild(header);
container.appendChild(body);
const bodyHeight = body.clientHeight - header.clientHeight;

/** 3D Shit */
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(body.clientWidth, bodyHeight);

body.appendChild(renderer.domElement);  // just a heads up, this is not document.body.

const camera = new THREE.PerspectiveCamera(60, body.clientWidth / bodyHeight, 1, 41000); 
camera.position.set(150,150,150);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const geo = new THREE.BoxGeometry(100, 100, 100);
const mat = new THREE.MeshPhongMaterial({ color: 0x00ffff });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(180, 200, 145);
scene.add(light);

animate(0);

/** Functions */
function animate(timestamp) {
    renderer.animate(render);
    timestamp++;
    render(timestamp);
}

function render(timestamp) {
    mesh.rotation.x += 0.025;
    mesh.rotation.y += 0.025;

    renderer.render(scene, camera);    
}