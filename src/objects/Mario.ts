import { Physics, Scene } from "phaser";
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";
import CursorController from "../controllers/CursorController";


export default class Mario extends Physics.Arcade.Sprite {
  private speed = 200;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, TextureKeys.Sokoban)

    scene.add.existing(this)
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);

    this.animationCreate();

    this.setSize(40, 16).setOffset(12, 38)

    // play default animation
    this.play(AnimationKeys.DownIdle);
  }

  private animationCreate() {
    this.anims.create({
      key: AnimationKeys.DownIdle,
      frames: [{
        key: TextureKeys.Sokoban,
        frame: 52,
      }]
    })

    this.anims.create({
      key: AnimationKeys.DownWalk,
      frames: this.anims.generateFrameNames(TextureKeys.Sokoban, {
        start: 52,
        end: 54,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: AnimationKeys.UpIdle,
      frames: [{
        key: TextureKeys.Sokoban,
        frame: 55,
      }]
    })

    this.anims.create({
      key: AnimationKeys.UpWalk,
      frames: this.anims.generateFrameNames(TextureKeys.Sokoban, {
        start: 55,
        end: 57,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: AnimationKeys.RightIdle,
      frames: [{
        key: TextureKeys.Sokoban,
        frame: 78,
      }]
    })

    this.anims.create({
      key: AnimationKeys.RightWalk,
      frames: this.anims.generateFrameNames(TextureKeys.Sokoban, {
        start: 78,
        end: 80,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: AnimationKeys.LeftIdle,
      frames: [{
        key: TextureKeys.Sokoban,
        frame: 81,
      }]
    })

    this.anims.create({
      key: AnimationKeys.LeftWalk,
      frames: this.anims.generateFrameNames(TextureKeys.Sokoban, {
        start: 81,
        end: 83,
      }),
      frameRate: 10,
      repeat: -1,
    })
  }

  moveLeft() {
    this.setVelocity(-this.speed, 0);
    this.play(AnimationKeys.LeftWalk, true);
  }

  moveRight() {
    this.setVelocity(this.speed, 0);
    this.play(AnimationKeys.RightWalk, true);
  }

  moveUp() {
    this.setVelocity(0, -this.speed);
    this.play(AnimationKeys.UpWalk, true);
  }

  moveDown() {
    this.setVelocity(0, this.speed);
    this.play(AnimationKeys.DownWalk, true);
  }

  toStand() {
    this.setVelocity(0, 0);
    const key = this.anims.currentAnim?.key;
    const direction = key?.split('-')[0];
    this.play(`${direction}-idle`);
  }

  update(cursor: CursorController) {
    if (cursor.left) {
      this.moveLeft();
    } else if (cursor.right) {
      this.moveRight(); 
    } else if (cursor.up) {
      this.moveUp();
    } else if (cursor.down) {
      this.moveDown();
    } else {
      this.toStand();
    }
  }
}
