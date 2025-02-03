import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

const fruitDroppable = ['obj0', 'obj1', 'obj2', 'obj3', 'obj4']; 
const fruitSizes = [0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]; 
const fruitShapes = [];
let objectsInPlay = new Set();
let customId = 0;

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.matter.world.setBounds(-10, 0, 1090, 1920);
        this.matter.world.setGravity(0, 1.7);
        this.matter.add.rectangle(0, 400, 2160, 50, {
            isSensor: true, // Set it as a sensor to detect overlaps without physical collision
            isStatic: true, // Ensure the area does not move
            label: 'overlapArea'
          });
          
        let currFruit = Math.floor(Math.random() * fruitDroppable.length);
        let nextFruit = Math.floor(Math.random() * fruitDroppable.length);
        let gameOver = 0;

        const shapes = this.cache.json.get('shapes');
        for(const shape in shapes) {
            fruitShapes.push(shapes[shape]);
        }

        this.add.image(550, 420, 'line').setScale(2);

        // Add start to follow cursor
        EventBus.emit('fruit-dropped', nextFruit); // generate initial next fruit
        this.cursor = this.add.image(512, 200, fruitDroppable[currFruit]).setScale(fruitSizes[currFruit]);
        this.input.on('pointermove', () => {
            // if(this.input.mousePointer.x > 40 && this.input.mousePointer.x < 1030 && !gameOver ) {
            if(this.input.mousePointer.x > 10 && this.input.mousePointer.x < 1080 && !gameOver ) {
                this.cursor.setPosition(this.input.mousePointer.x, 200);
            }
        });


        let lastDropped = -1;
        // Drop on click
        this.input.on('pointerdown', () => {
            const now = new Date; 
            if((now.getTime() - lastDropped) > 700 && !gameOver) { // Prevent spam clicking, only drop fruit if last clicked fruit is now
                this.matter.add.image(this.input.mousePointer.x-10, 200, fruitDroppable[currFruit], "", { shape: fruitShapes[currFruit] })
                    .setScale(fruitSizes[currFruit])
                    .setFriction(0.5,0.00,0.2)
                    .setData('customId', customId);
                customId++;
                    
                currFruit = nextFruit;
                nextFruit = Math.floor(Math.random() * fruitDroppable.length);
                EventBus.emit('fruit-dropped', nextFruit);
                lastDropped = now.getTime();

                this.cursor.destroy();
                this.cursor = this.add.image(this.cursor.x, this.cursor.y, fruitDroppable[currFruit]).setScale(fruitSizes[currFruit]);
            }
        });

        this.matter.world.on('collisionstart', (_e, objA, objB) => {
            // Merge Fruit
            if(objA.label == objB.label) {
                this.combineObjects(objA, objB);
            }
            // Check Game Over
            if(objA.label == 'overlapArea') {
                let fruitId = objB.gameObject.getData('customId');
                if(objectsInPlay[fruitId] >= 1) {
                    this.matter.world.pause();
                    this.add.image(512, 600, 'gameOver');
                    gameOver = 1;
                    this.cursor.destroy();
                } else {
                    setTimeout(() => {
                        objectsInPlay[fruitId] = 1;
                    }, 1000);
                }
            }
        });

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('GameOver');
    }


    combineObjects(bodyA, bodyB) {
        let avgPosX = (bodyA.position.x + bodyB.position.x)/2.0;
        let avgPosY = (bodyA.position.y + bodyB.position.y)/2.0;
        let addScore = 0;

        if(bodyA.label == "obj0.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj1', "", { shape: fruitShapes[1] }).setScale(fruitSizes[1]);
            addScore = 1;
        } 
        else if(bodyA.label == "obj1.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj2', "", { shape: fruitShapes[2] }).setScale(fruitSizes[2]);
            addScore = 3;
        }
        else if(bodyA.label == "obj2.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj3', "", { shape: fruitShapes[3] }).setScale(fruitSizes[3]);
            addScore = 6;
        }
        else if(bodyA.label == "obj3.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj4', "", { shape: fruitShapes[4] }).setScale(fruitSizes[4]);
            addScore = 10;
        }
        else if(bodyA.label == "obj4.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj5', "", { shape: fruitShapes[5] }).setScale(fruitSizes[5]);
            addScore = 15;
        }
        else if(bodyA.label == "obj5.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj6', "", { shape: fruitShapes[6] }).setScale(fruitSizes[6]);
            addScore = 21;
        } 
        else if(bodyA.label == "obj6.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj7', "", { shape: fruitShapes[7] }).setScale(fruitSizes[7]);
            addScore = 28;
        } 
        else if(bodyA.label == "obj7.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj8', "", { shape: fruitShapes[8] }).setScale(fruitSizes[8]);
            addScore = 36;
        } 
        else if(bodyA.label == "obj8.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj9', "", { shape: fruitShapes[9] }).setScale(fruitSizes[9]);
            addScore = 45;
        } 
        else if(bodyA.label == "obj9.png-fixture-0") {
            this.matter.add.image(avgPosX, avgPosY, 'obj10', "", { shape: fruitShapes[10] }).setScale(fruitSizes[10]);
            addScore = 55;
        } 
        else if(bodyA.label == "obj10.png-fixture-0") {
            addScore = 66;
        } 
        else {
            return;
        }

        EventBus.emit('score-updated', addScore);
        delete objectsInPlay[bodyA.gameObject.getData('customId')];
        delete objectsInPlay[bodyB.gameObject.getData('customId')];
        bodyA.gameObject.destroy();
        bodyB.gameObject.destroy();
    }
}
