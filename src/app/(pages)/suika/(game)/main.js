import { Boot } from './(scenes)/Boot';
import { Game } from './(scenes)/Game';
import { GameOver } from './(scenes)/GameOver';
import { MainMenu } from './(scenes)/MainMenu';
import * as Phaser from 'phaser';
import { Preloader } from './(scenes)/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    parent: '.suika-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT, // Scale the game to fit the screen
        width: 1080,
        height: 1920, 
        // zoom: 0.35,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY, // Center the game in the screen
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ],
    physics: {
        default: 'matter',
        matter: {
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    }
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
