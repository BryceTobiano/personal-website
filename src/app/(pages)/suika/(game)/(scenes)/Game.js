import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';

const fruitDroppable = ['obj0', 'obj1', 'obj2']; 
const fruitAll = ['obj0', 'obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6']; 
const fruitSizes = [0.4, 0.8, 1, 1.4, 1.8, 2.4, 2.8]; 
const fruitShapes = [];

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }
    

    create ()
    {
        this.matter.world.setBounds(0, 0, 1080, 1920);

        let pickFruit = Math.floor(Math.random() * fruitDroppable.length);

        const shapes = this.cache.json.get('shapes');
        for(const shape in shapes) {
            fruitShapes.push(shapes[shape]);
        }

        // Add start to follow cursor
        this.cursor = this.add.image(512, 100, fruitDroppable[pickFruit]).setScale(fruitSizes[pickFruit]);
        this.input.on('pointermove', () => {
            this.cursor.setPosition(this.input.mousePointer.x, 100);
        });


        let lastDropped = -1;
        this.input.on('pointerdown', () => { // Drop on click
            const now = new Date; 
            if((now.getTime() - lastDropped) > 700) { // Prevent spam clicking, only drop fruit if last clicked fruit is now
                this.matter.add.image(this.input.mousePointer.x, 100, fruitDroppable[pickFruit], "", { shape: fruitShapes[pickFruit] }).setScale(fruitSizes[pickFruit]);
                
                pickFruit = Math.floor(Math.random() * fruitDroppable.length);
                lastDropped = now.getTime();

                this.cursor.destroy();
                this.cursor = this.add.image(this.cursor.x, this.cursor.y, fruitDroppable[pickFruit]).setScale(fruitSizes[pickFruit]);
            }
        });


        // Merge Fruit
        this.matter.world.on('collisionstart', (_e, objA, objB) => {
            if(objA.label == objB.label) {
                this.combineObjects(objA, objB);
            }
        }
        );


        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('GameOver');
    }

    combineObjects(bodyA, bodyB) {
        if(bodyA.label == "obj0.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj1', "", { shape: fruitShapes[1] }).setScale(fruitSizes[1]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        } 
        else if(bodyA.label == "obj1.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj2', "", { shape: fruitShapes[2] }).setScale(fruitSizes[2]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        }
        else if(bodyA.label == "obj2.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj3', "", { shape: fruitShapes[3] }).setScale(fruitSizes[3]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        }
        else if(bodyA.label == "obj3.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj4', "", { shape: fruitShapes[4] }).setScale(fruitSizes[4]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        }
        else if(bodyA.label == "obj4.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj5', "", { shape: fruitShapes[5] }).setScale(fruitSizes[5]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        }
        else if(bodyA.label == "obj5.png-fixture-0") {
            this.matter.add.image(bodyA.position.x, bodyA.position.y, 'obj6', "", { shape: fruitShapes[6] }).setScale(fruitSizes[6]);
            bodyA.gameObject.destroy();
            bodyB.gameObject.destroy();
        }
    }
}
