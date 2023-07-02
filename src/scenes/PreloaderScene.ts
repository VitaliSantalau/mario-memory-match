import { Scene } from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";


export default class Preloader extends Scene {
  constructor() {
    super(SceneKeys.Preloader)
  }

  preload() {
    this.load.spritesheet(TextureKeys.Sokoban, 'textures/sokoban_tilesheet.png', {
      frameWidth: 64,
    })
  }

  update() {
    this.scene.start(SceneKeys.Game)
  }
}
