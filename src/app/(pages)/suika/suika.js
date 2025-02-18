"use client"
import { useRef, useState } from 'react';
import styles from "./suika.module.css";
import Button from "@/app/(components)/Button/button"
import Heading1 from '@/app/(components)/Texts/heading1';
import Heading2 from '@/app/(components)/Texts/heading2';
import Heading3 from '@/app/(components)/Texts/heading3';
import Image from 'next/image';

import * as Phaser from 'phaser';
import { PhaserGame } from './(game)/PhaserGame';


export default function Suika()
{
    // The sprite can only be moved in the MainMenu Scene
    const [gameStarted, setGameStarted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();
    const [score, setScore] = useState(0);
    const [nextFruitIndex, setNextFruitIndex] = useState(-1);


    const changeScene = () => {
        setIsVisible(false);
        const scene = phaserRef.current.scene;

        if (scene)
        {
            scene.changeScene();
        }
    }

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {
        setGameStarted(scene.scene.key === 'Game');
    }

    const addScore = (addScore) => {
        setScore(score + addScore)
    }

    const setNextFruit = (nextFruit) => {
        setNextFruitIndex(nextFruit)
    }

    const FruitImage = ({ index }) => {
        const images = [
          '/suika/obj0.png',
          '/suika/obj1.png',
          '/suika/obj2.png',
          '/suika/obj3.png',
          '/suika/obj4.png',
        ];
        
        if(index < 0) {
            return ( 
                <>
                    <div className={styles.nextFruit_container}>
                        <Heading2 className={styles.nextText}>NEXT</Heading2>
                        <div className={styles.nextFruit_bg}></div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className={styles.nextFruit_container}>
                        <Heading2 className={styles.nextText}>NEXT</Heading2>
                        <div className={styles.nextFruit_bg}>
                            <Image src={images[index]} alt={`Image ${index}`} width="75" height="75"/>
                        </div>
                    </div>
                </>
            )

        }
    };

    const FruitImageMobile = ({ index }) => {
        const images = [
          '/suika/obj0.png',
          '/suika/obj1.png',
          '/suika/obj2.png',
          '/suika/obj3.png',
          '/suika/obj4.png',
        ];
        

        return (
            <>
                <div className={styles.mobile_nextFruit}>
                    <Heading3>NEXT</Heading3>
                    <div className={styles.mobile_nextFruit_bg}>
                        <Image src={images[index]} alt={`Image ${index}`} width="50" height="50"/>
                    </div>
                </div>
            </>
        )

    };


    return (
        <div className={styles.app}>
            <div className={styles.section_container}>
                <Heading1>SUIKA<br />GAME</Heading1>
                <p>This is a quick web version of the fun little Japanese game called Suika game that I put together.</p> <br />
                <p style={{paddingBottom: "1em"}}>Built on PhaserJS</p>
                <Button style={{marginBottom: "0.5em"}} variant="primary" onClick={changeScene} disabled={gameStarted}>Start Game</Button>
                {/* <Button variant="secondary">How To Play</Button> */}
            </div>
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} score={addScore} nextFruitIndex={setNextFruit}/>
            <div className={styles.section_container}>
                <div className={styles.score_container}>
                    <Heading2 className={styles.scoreText}>SCORE<br/> </Heading2>
                    <div className={styles.scoreNum}>
                        <Heading2>{score}</Heading2>
                    </div>
                </div>
                <FruitImage index={nextFruitIndex}/>
            </div>
            
            {/* MOBILE UI */}
            <div className={styles.mobile_menu}>
                {isVisible && (
                    <Button style={{borderColor: "black" }} variant="primary" onClick={changeScene} disabled={gameStarted}>Start Game</Button>
                )}
            </div>
            <div className={styles.mobile_gameUI}>
                {gameStarted && (
                    <div  className={styles.mobile_scoreContainer}> 
                        <Heading3>SCORE<br/></Heading3>
                        <Heading2 className={styles.mobile_scoreNum}>{score}</Heading2>
                    </div>

                )}
                {gameStarted && (
                    <FruitImageMobile index={nextFruitIndex}/>
                )}
            </div>
        </div>
    )
}

