import { Scene } from "phaser";
import SceneKeys from "../consts/SceneKeys";
import Mario from "../objects/Mario";
import CursorController from "../controllers/CursorController";


export default class GameScene extends Scene {
  mario!: Mario
  cursor!: CursorController

  constructor() {
    super(SceneKeys.Game)
  }

  create() {
    const { width, height } = this.scale

    this.mario = new Mario(this, width * 0.5, height * 0.6)

    this.cursor = new CursorController(this)
  }

  update() {
    this.mario.update(this.cursor)
  }
}
