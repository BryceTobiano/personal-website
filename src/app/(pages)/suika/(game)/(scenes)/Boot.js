import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.setPath('suika');


        this.load.image('gameOver', 'gameOver.png');
        this.load.image('line', 'line.png');
        this.load.image("obj0", 'obj0.png');
        this.load.image("obj1", 'obj1.png');
        this.load.image("obj2", 'obj2.png');
        this.load.image("obj3", 'obj3.png');
        this.load.image("obj4", 'obj4.png');
        this.load.image("obj5", 'obj5.png');
        this.load.image("obj6", 'obj6.png');
        this.load.image("obj7", 'obj7.png');
        this.load.image("obj8", 'obj8.png');
        this.load.image("obj9", 'obj9.png');
        this.load.image("obj10", 'obj10.png');
        this.load.json('shapes', 'shapes.json');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
