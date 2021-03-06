function main(
    G3D,
    { canvas, requestAnimationFrame, controlArcRotateCamera }
) {

    const engine = new G3D.Engine(canvas);

    const scene = new G3D.Scene(engine);

    const camera = new G3D.RotatePerspectiveCamera(scene);
    camera.fov = 60;
    camera.alpha = 45;
    camera.beta = 0;
    camera.radius = 20;

    controlArcRotateCamera(canvas, camera);

    const l1 = new G3D.DirectionalLight(scene);
    const m1 = new G3D.MeshBuilder.createSphere(scene, 0.2);
    m1.materials.default = new G3D.RawMaterial(m1);

    G3D.MeshBuilder.createCylinder(scene, 4, 8, 128);

    function render() {

        const now = Date.now();

        l1.direction = {x: Math.sin(now/500)*18, y: 18, z: 18};
        m1.position = {x: Math.sin(now/500)*9, y: 9, z: 9};
        
        // m1.position.z = l1.position.z = Math.sin(now / 500 + Math.PI * 2 / 3) * 2 + 3;
        // m2.position.z = l2.position.z = Math.sin(now / 500 + Math.PI * 4 / 3) * 2 + 3;
        // m3.position.z = l3.position.z = Math.sin(now / 500) * 2 + 3;

        scene.render();
        requestAnimationFrame(render);
    }
    render();


}

export default main;