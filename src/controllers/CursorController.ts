import { Scene, Types } from "phaser";

class CursorController {
  cursor: Types.Input.Keyboard.CursorKeys | undefined;
  
  constructor(scene: Scene) {
    this.cursor = scene.input?.keyboard?.createCursorKeys()
  }

  get up() {
    return this.cursor && this.cursor.up.isDown;
  }

  get down() {
    return this.cursor && this.cursor.down.isDown;
  }

  get left() {
    return this.cursor && this.cursor.left.isDown;
  }

  get right() {
    return this.cursor && this.cursor.right.isDown;
  }
}

export default CursorController
