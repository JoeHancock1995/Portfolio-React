import React, { Component } from 'react'
import * as THREE from 'three'

class Scene extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 50, width / height, 0.1, 1000 )
    const light = new THREE.DirectionalLight( 0xffffff, 5.0 )

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(3, 3, 3)
    const material = new THREE.MeshStandardMaterial({ color: '#00000' })
    const cube = new THREE.Mesh(geometry, material)

    light.position.set( 10, 10, 10 )
    camera.position.z = 10
    scene.add(cube, light)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube
    this.light = light

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.cube.rotation.z += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '600px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene