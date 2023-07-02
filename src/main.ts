import Phaser, { Scale } from 'phaser'


import GameScene from './scenes/GameScene'
import Preloader from './scenes/PreloaderScene'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 700,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true
		},
	},
	scale: {
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_HORIZONTALLY,
	},
	scene: [
		Preloader, GameScene
	],
}

export default new Phaser.Game(config)
