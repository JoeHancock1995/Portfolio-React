import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import './Plume.css';

// import CeilingMaterial from '../Plume/images/V2images/metal2.jpg';
import FloorMaterial from '../Plume/images/V2images/27.jpg';
import BoxMaterial from '../Plume/images/V2images/112.jpg';
import CubeMaterial from '../Plume/images/V2images/concrete4.jpg';
import ColumnTrimMaterial from '../Plume/images/V2images/yb.jpg';
import Pictureimg from '../Plume/images/V2images/5.jpg';
import Picture2img from '../Plume/images/V2images/ss11.png';
import Picture3img from '../Plume/images/V2images/125.png';
import Picture4img from '../Plume/images/V2images/107.png';
import Picture5img from '../Plume/images/V2images/6.jpg';
import Picture6img from '../Plume/images/V2images/blood.jpg';
import Picture7img from '../Plume/images/V2images/city3.jpg';
import Picture8img from '../Plume/images/V2images/73.jpg';
import Picture9img from '../Plume/images/V2images/131.png';
import Picture10img from '../Plume/images/V2images/124.png';
import Picture11img from '../Plume/images/V2images/123.png';
import Picture12img from '../Plume/images/V2images/127.png';
import Picture13img from '../Plume/images/V2images/119.png';
import Picture14img from '../Plume/images/V2images/118.png';
import Picture15img from '../Plume/images/V2images/126.png';
import Picture16img from '../Plume/images/V2images/logoline.jpg';
import Picture17img from '../Plume/images/V2images/h22.jpg';
import Picture18img from '../Plume/images/V2images/h16.png';
import Picture19img from '../Plume/images/V2images/h12.png';
import Picture20img from '../Plume/images/V2images/h20.png';
// import picture21img from '../Plume/images/V2images/h12.jpg';
import Picture22img from '../Plume/images/V2images/h35.jpg';
import Picture23img from '../Plume/images/V2images/album1.3.jpg';
import Picture24img from '../Plume/images/V2images/60.jpg';
import Picture25img from '../Plume/images/V2images/comp3.jpg';
import Picture28img from '../Plume/images/V2images/grade.png';

var scene;


class BabylonScene extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: false };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);
    //Create Scene
    scene = new BABYLON.Scene(this.engine);
    //--Light---
    this.addLight();
    //--Camera---
    this.addCamera();
    //--Ground---
    this.addBuilding();
    // Add Events
    window.addEventListener("resize", this.onWindowResize, false);
    // Render Loop
    this.engine.runRenderLoop(() => {
      scene.render();
    });

    //Animation
    scene.registerBeforeRender(() => {

    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
  }

  onWindowResize = event => {
    this.engine.resize();
  };

  addLight = () => {
    new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);  
};

  addCamera = () => {
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.canvas, true);
  };

  addBuilding = () => {
    var ground = BABYLON.MeshBuilder.CreateBox("ground", {width: 104, height: 126, depth: 2}, scene);
    var ceiling = BABYLON.MeshBuilder.CreateBox("ceiling", {width: 104, height: 126, depth: 2}, scene);

    var box = BABYLON.MeshBuilder.CreateBox("box", {height: 16, width: 31, depth: 2}, scene); //behind the camera
        var picture21 = BABYLON.MeshBuilder.CreateBox("picture21", {height: 12, width: 24 , depth: .2}, scene); 
        var picture5 = BABYLON.MeshBuilder.CreateBox("picture5", {height: 12, width: 20, depth: .2}, scene);
    var box2 =BABYLON.MeshBuilder.CreateBox("box2", {height: 16, width: 2, depth: 86}, scene); //divider wall
        var picture22 = BABYLON.MeshBuilder.CreateBox("picture22", {height: 14 , width: 14, depth: .2}, scene); 
        var picture23 = BABYLON.MeshBuilder.CreateBox("picture23", {height: 14 , width: 14, depth: .2}, scene); 
        var picture24 = BABYLON.MeshBuilder.CreateBox("picture24", {height: 14, width: 14, depth: .2}, scene); 
    var box3 = BABYLON.MeshBuilder.CreateBox("box3", {height: 16, width: 100, depth: 2}, scene); //behind camera
        var picture = BABYLON.MeshBuilder.CreateBox("picture", {height: 10, width: 20, depth: .2}, scene); 
        var picture2 = BABYLON.MeshBuilder.CreateBox("picture2", {height: 10, width:20 , depth: .2}, scene);
        var picture3 = BABYLON.MeshBuilder.CreateBox("picture3", {height: 10 , width: 20, depth: .2}, scene); 
        var picture4 = BABYLON.MeshBuilder.CreateBox("picture4", {height: 10, width: 20, depth: .2}, scene); 
    var box4 = BABYLON.MeshBuilder.CreateBox("box4", {height: 16, width: 2, depth: 124}, scene); //camera left
        var picture6 = BABYLON.MeshBuilder.CreateBox("picture6", {height: 24, width: .2, depth: 12}, scene); //left front quadrant
        var picture7 = BABYLON.MeshBuilder.CreateBox("picture7", {height: 24, width: .2, depth: 12}, scene); 
        var picture8 = BABYLON.MeshBuilder.CreateBox("picture8", {height: 12, width: 17, depth: .2}, scene); 
        var picture25 = BABYLON.MeshBuilder.CreateBox("picture25", {height: 12 , width: 17, depth: .2}, scene); 
        var picture28 = BABYLON.MeshBuilder.CreateBox("picture21", {height: 12, width: 24 , depth: .2}, scene); // behind the quadrant
        var picture9 = BABYLON.MeshBuilder.CreateBox("picture9", {height: 17, width: .2, depth: 10}, scene); //left back quadrant
        var picture10 = BABYLON.MeshBuilder.CreateBox("picture10", {height: 10, width: 17, depth: .2}, scene);
        var picture11 = BABYLON.MeshBuilder.CreateBox("picture11", {height: 10, width: 17, depth: .2}, scene); 
    var box5 = BABYLON.MeshBuilder.CreateBox("box5", {height: 16, width: 2, depth: 124}, scene); // far right wall
        var picture17 = BABYLON.MeshBuilder.CreateBox("picture17", {height: 10, width: 18, depth: .2}, scene); 
        var picture18 = BABYLON.MeshBuilder.CreateBox("picture18", {height: 10, width: 18, depth: .2}, scene); 
        var picture19 = BABYLON.MeshBuilder.CreateBox("picture19", {height: 10 , width: 18, depth: .2}, scene); 
        var picture20 = BABYLON.MeshBuilder.CreateBox("picture20", {height: 10, width: 18, depth: .2}, scene); 
    var box6 = BABYLON.MeshBuilder.CreateBox("box6", {height: 16, width: 100, depth: 2}, scene);  // back wall
        var picture12 = BABYLON.MeshBuilder.CreateBox("picture12", {height: 10, width: 20, depth: .2}, scene); 
        var picture13 = BABYLON.MeshBuilder.CreateBox("picture13", {height: 10, width:20 , depth: .2}, scene); 
        var picture14 = BABYLON.MeshBuilder.CreateBox("picture14", {height: 10 , width: 20, depth: .2}, scene); 
        var picture15 = BABYLON.MeshBuilder.CreateBox("picture15", {height: 10, width: 20, depth: .2}, scene); 
    var box7 = BABYLON.MeshBuilder.CreateBox("box7", {height: 16, width: 38, depth: 2}, scene); // back quadrant divider wall
        var picture16 = BABYLON.MeshBuilder.CreateBox("picture16", {height: 12, width: 24, depth: .2}, scene); 

    var galleryCube = BABYLON.MeshBuilder.CreateBox("galleryCube", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim2 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
    var galleryCube2 = BABYLON.MeshBuilder.CreateBox("galleryCube2", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim3 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim4 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
    var galleryCube3 = BABYLON.MeshBuilder.CreateBox("galleryCube", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim5 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim6 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
    var galleryCube4 = BABYLON.MeshBuilder.CreateBox("galleryCube2", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim7 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim8 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
    var galleryCube5 = BABYLON.MeshBuilder.CreateBox("galleryCube2", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim9 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim10 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
    var galleryCube6 = BABYLON.MeshBuilder.CreateBox("galleryCube2", {height: 15, width: 2.5, depth: 2.5}, scene);
        var columnTrim11 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);
        var columnTrim12 = BABYLON.MeshBuilder.CreateBox("columnTrim", {height: .5, width: 3, depth: 3}, scene);


    //Walls location
    ground.position = new BABYLON.Vector3(-26, -9, -38);
    ceiling.position = new BABYLON.Vector3(-26, 8, -38);
    box.position = new BABYLON.Vector3(7.5, 0, -36);
        picture5.position = new BABYLON.Vector3(7, -1, -37);
        picture21.position = new BABYLON.Vector3(9, -1, -35);
    box2.position = new BABYLON.Vector3(-8, 0, -36);
        picture22.position = new BABYLON.Vector3(-9, -.5, -13);
        picture23.position = new BABYLON.Vector3(-9, -.5 , -39);
        picture24.position = new BABYLON.Vector3(-9, -.5 , -65);
    box3.position = new BABYLON.Vector3(-26.5, 0, 22.5);
        picture.position = new BABYLON.Vector3(10, -1, 21.5);
        picture2.position = new BABYLON.Vector3(-14, -1, 21.5);
        picture3.position = new BABYLON.Vector3(-38, -1, 21.5);
        picture4.position = new BABYLON.Vector3(-62, -1, 21.5);
    box4.position = new BABYLON.Vector3(24, 0, -38);
        picture6.position = new BABYLON.Vector3(23, -1, 10);
        picture7.position = new BABYLON.Vector3(23, -1 ,-20);
        picture8.position = new BABYLON.Vector3(-7, -1, -25);
        picture25.position = new BABYLON.Vector3(-7, -1 , -5);
        picture28.position = new BABYLON.Vector3(-7, -1 , -60);
        picture9.position = new BABYLON.Vector3(23, -1, -48);
        picture10.position = new BABYLON.Vector3(23, -1 ,-67.5);
        picture11.position = new BABYLON.Vector3(23, -1, -87);
    box5.position = new BABYLON.Vector3(-76, 0, -38);
        picture17.position = new BABYLON.Vector3(-75, -1, 10);
        picture18.position = new BABYLON.Vector3(-75, -1, -15);
        picture19.position = new BABYLON.Vector3(-75, -1, -60);
        picture20.position = new BABYLON.Vector3(-75, -1, -85);
    box6.position = new BABYLON.Vector3(-26.5, .1, -98.5);
        picture12.position = new BABYLON.Vector3(10, -1, -97.5);
        picture13.position = new BABYLON.Vector3(-14, -1, -97.5);
        picture14.position = new BABYLON.Vector3(-38, -1, -97.5);
        picture15.position = new BABYLON.Vector3(-62, -1, -97.5);
    box7.position = new BABYLON.Vector3( -40, 0, -80);
        picture16.position = new BABYLON.Vector3(-40, -.5, -79);

    galleryCube.position = new BABYLON.Vector3( -56, 0, 0);
        columnTrim.position = new BABYLON.Vector3(-56, 6.75, 0);
        columnTrim2.position = new BABYLON.Vector3(-56, -7.5, 0);
    galleryCube2.position = new BABYLON.Vector3( -56, 0, -50);
        columnTrim3.position = new BABYLON.Vector3(-56, 6.75, -50);
        columnTrim4.position = new BABYLON.Vector3(-56, -7.5, -50);
    galleryCube3.position = new BABYLON.Vector3( -24, 0, 0);
        columnTrim5.position = new BABYLON.Vector3(-24, 6.75, 0);
        columnTrim6.position = new BABYLON.Vector3(-24, -7.5, 0);
    galleryCube4.position = new BABYLON.Vector3( -24, 0, -50);
        columnTrim7.position = new BABYLON.Vector3(-24, 6.75, -50);
        columnTrim8.position = new BABYLON.Vector3(-24, -7.5, -50);
    galleryCube5.position = new BABYLON.Vector3( -56, 0, -25);
        columnTrim9.position = new BABYLON.Vector3(-56, 6.75, -25);
        columnTrim10.position = new BABYLON.Vector3(-56, -7.5, -25);
    galleryCube6.position = new BABYLON.Vector3( -24, 0, -25);
        columnTrim11.position = new BABYLON.Vector3(-24, 6.75, -25);
        columnTrim12.position = new BABYLON.Vector3(-24, -7.5, -25);

    ground.rotation.z = Math.PI/2;
    ground.rotation.x = Math.PI/2;
    ground.rotation.y = Math.PI/2;
    ceiling.rotation.z = Math.PI/-2;
    ceiling.rotation.x = Math.PI/2;
    ceiling.rotation.y = Math.PI/-2;
    picture6.rotation.x = Math.PI/-2;
    picture7.rotation.x = Math.PI/-2;
    picture8.rotation.y = Math.PI/2;
    picture9.rotation.x = Math.PI/-2;
    picture10.rotation.y = Math.PI/2;
    picture11.rotation.y = Math.PI/2;
    picture12.addRotation(0, 0, Math.PI/2).addRotation(0, 0, Math.PI/2);
    picture13.addRotation(0, 0, Math.PI/2).addRotation(0, 0, Math.PI/2);
    picture14.addRotation(0, 0, Math.PI/2).addRotation(0, 0, Math.PI/2);
    picture15.addRotation(0, 0, Math.PI/2).addRotation(0, 0, Math.PI/2);
    picture16.addRotation(0, 0, Math.PI/2).addRotation(0, 0, Math.PI/2);
    picture17.rotation.y = Math.PI/-2;
    picture18.rotation.y = Math.PI/-2;
    picture19.rotation.y = Math.PI/-2;
    picture20.rotation.y = Math.PI/-2;
    // picture21.rotation.y = Math.PI/2;
    picture22.rotation.y = Math.PI/2;
    picture23.rotation.y = Math.PI/2;
    picture24.rotation.y = Math.PI/2;
    picture25.rotation.y = Math.PI/-2;
    picture28.rotation.y = Math.PI/-2;


    //Textures
    // var ceilingMaterial = new BABYLON.StandardMaterial("ceilingMaterial", scene);
    //     ceilingMaterial.ambientTexture = new BABYLON.Texture("..//images/V2images/metal2.jpg", scene);
    var floorMaterial = new BABYLON.StandardMaterial("floorMaterial", scene);
        floorMaterial.ambientTexture = new BABYLON.Texture(FloorMaterial, scene);
    var boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
        boxMaterial.ambientTexture = new BABYLON.Texture(BoxMaterial, scene);
    var cubeMaterial = new BABYLON.StandardMaterial("cubeMaterial", scene);
      cubeMaterial.ambientTexture = new BABYLON.Texture(CubeMaterial, scene);
    var columnTrimMaterial = new BABYLON.StandardMaterial("columnTrimMaterial", scene);
        columnTrimMaterial.ambientTexture = new BABYLON.Texture(ColumnTrimMaterial);
    var pictureimg = new BABYLON.StandardMaterial("pictureimg", scene);
        pictureimg.ambientTexture = new BABYLON.Texture(Pictureimg)
    var picture2img = new BABYLON.StandardMaterial("picture2img", scene);
      picture2img.ambientTexture = new BABYLON.Texture(Picture2img);
    var picture3img = new BABYLON.StandardMaterial("picture3img", scene);
        picture3img.ambientTexture = new BABYLON.Texture(Picture3img);
    var picture4img = new BABYLON.StandardMaterial("picture4img", scene);
        picture4img.ambientTexture = new BABYLON.Texture(Picture4img);
    var picture5img = new BABYLON.StandardMaterial("picture5img", scene);
        picture5img.ambientTexture = new BABYLON.Texture(Picture5img);
    var picture6img = new BABYLON.StandardMaterial("picture6img", scene);
        picture6img.ambientTexture = new BABYLON.Texture(Picture6img);
    var picture7img = new BABYLON.StandardMaterial("picture7img", scene);
        picture7img.ambientTexture = new BABYLON.Texture(Picture7img);
    var picture8img = new BABYLON.StandardMaterial("picture8img", scene);
        picture8img.ambientTexture = new BABYLON.Texture(Picture8img);
    var picture9img = new BABYLON.StandardMaterial("picture9img", scene);
        picture9img.ambientTexture = new BABYLON.Texture(Picture9img);
    var picture10img = new BABYLON.StandardMaterial("picture10img", scene);
        picture10img.ambientTexture = new BABYLON.Texture(Picture10img);
    var picture11img = new BABYLON.StandardMaterial("picture11img", scene);
        picture11img.ambientTexture = new BABYLON.Texture(Picture11img);
    var picture12img = new BABYLON.StandardMaterial("picture12img", scene);
        picture12img.ambientTexture = new BABYLON.Texture(Picture12img);
    var picture13img = new BABYLON.StandardMaterial("picture13img", scene);
        picture13img.ambientTexture = new BABYLON.Texture(Picture13img);
    var picture14img = new BABYLON.StandardMaterial("picture14img", scene);
        picture14img.ambientTexture = new BABYLON.Texture(Picture14img);
    var picture15img = new BABYLON.StandardMaterial("picture15img", scene);
        picture15img.ambientTexture = new BABYLON.Texture(Picture15img);
    var picture16img = new BABYLON.StandardMaterial("picture16img", scene);
        picture16img.ambientTexture = new BABYLON.Texture(Picture16img);

    var picture17img = new BABYLON.StandardMaterial("picture17img", scene);
        picture17img.ambientTexture = new BABYLON.Texture(Picture17img);
    var picture18img = new BABYLON.StandardMaterial("picture18img", scene);
        picture18img.ambientTexture = new BABYLON.Texture(Picture18img);
    var picture19img = new BABYLON.StandardMaterial("picture19img", scene);
        picture19img.ambientTexture = new BABYLON.Texture(Picture19img);
    var picture20img = new BABYLON.StandardMaterial("picture20img", scene);
        picture20img.ambientTexture = new BABYLON.Texture(Picture20img);
    var picture21img = new BABYLON.StandardMaterial("picture21img", scene);
        picture21img.ambientTexture = new BABYLON.Texture(picture21img);
    var picture22img = new BABYLON.StandardMaterial("picture22img", scene);
        picture22img.ambientTexture = new BABYLON.Texture(Picture22img);
    var picture23img = new BABYLON.StandardMaterial("picture23img", scene);
        picture23img.ambientTexture = new BABYLON.Texture(Picture23img);
    var picture24img = new BABYLON.StandardMaterial("picture24img", scene);
        picture24img.ambientTexture = new BABYLON.Texture(Picture24img);
    var picture25img = new BABYLON.StandardMaterial("picture25img", scene);
        picture25img.ambientTexture = new BABYLON.Texture(Picture25img);
    var picture28img = new BABYLON.StandardMaterial("picture28img", scene);
        picture28img.ambientTexture = new BABYLON.Texture(Picture28img);
    
    //rendering the textures to the object
    ground.material = floorMaterial;
    // ceiling.material = ceilingMaterial;
    box.material = boxMaterial;
    box2.material = boxMaterial;
    box3.material = boxMaterial;
    box4.material = boxMaterial;
    box5.material = boxMaterial;
    box6.material = boxMaterial;
    box7.material = boxMaterial;
    galleryCube.material = cubeMaterial;
    galleryCube2.material = cubeMaterial;
    galleryCube3.material = cubeMaterial;
    galleryCube4.material = cubeMaterial;
    galleryCube5.material = cubeMaterial;
    galleryCube6.material = cubeMaterial;
    columnTrim.material = columnTrimMaterial;
    columnTrim2.material = columnTrimMaterial;
    columnTrim3.material = columnTrimMaterial;
    columnTrim4.material = columnTrimMaterial;
    columnTrim5.material = columnTrimMaterial;
    columnTrim6.material = columnTrimMaterial;
    columnTrim7.material = columnTrimMaterial;
    columnTrim8.material = columnTrimMaterial;
    columnTrim9.material = columnTrimMaterial;
    columnTrim10.material = columnTrimMaterial;
    columnTrim11.material = columnTrimMaterial;
    columnTrim12.material = columnTrimMaterial;

    picture.material = pictureimg;
    picture2.material = picture2img;
    picture3.material = picture3img;
    picture4.material = picture4img;
    picture5.material = picture5img;
    picture6.material = picture6img;
    picture7.material = picture7img;
    picture8.material = picture8img;
    picture9.material = picture9img;
    picture10.material = picture10img;
    picture11.material = picture11img;
    picture12.material = picture12img;
    picture13.material = picture13img;
    picture14.material = picture14img;
    picture15.material = picture15img;
    picture16.material = picture16img;
    picture17.material = picture17img;
    picture18.material = picture18img;
    picture19.material = picture19img;
    picture20.material = picture20img;
    picture21.material = picture21img;
    picture22.material = picture22img;
    picture23.material = picture23img;
    picture24.material = picture24img;
    picture25.material = picture25img;
    picture28.material = picture28img;

    //collisions
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    // camera.applyGravity = true;
    // camera.ellipsoid = new BABYLON.Vector3(2, 4, 2);
    // scene.collisionsEnabled = true;
    // camera.checkCollisions = true;

    ground.checkCollisions = true;
    ceiling.checkCollisions = true;
    box.checkCollisions = true;
    box2.checkCollisions = true;
    box3.checkCollisions = true;
    box4.checkCollisions = true;
    box5.checkCollisions = true;
    box6.checkCollisions = true;
    box7.checkCollisions = true;
    galleryCube.checkCollisions = true;
    galleryCube2.checkCollisions = true;
    galleryCube3.checkCollisions = true;
    galleryCube4.checkCollisions = true;
    galleryCube5.checkCollisions = true;
    galleryCube6.checkCollisions = true;
  };


  render() {
    return (
      <canvas
        style={{ width: window.innerWidth, height: window.innerHeight }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
export default BabylonScene;