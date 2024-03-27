import React, { useState, useEffect } from "react";
import "./drumMachine.scss";
import clap from "../sounds/clap.wav";
import crashCymbal from "../sounds/crash-cymbal.wav";
import hiHatClosed from "../sounds/hi-hat-closed.wav";
import hiHatOpen from "../sounds/hi-hat-open.wav";
import kickDrum from "../sounds/kick-drum.wav";
import rideCymbal from "../sounds/ride-cymbal.wav";
import snareDrum from "../sounds/snare-drum.wav";
import tomDrum from "../sounds/tom-drum.wav";
import woodBlock from "../sounds/wood-block.wav";

const playSound = (btnId) => {
  const audioElement = document.getElementById(btnId);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
};

function DrumMachine() {
  useEffect(() => {
    const pressKey = (event) => {
      const key = event.key
      const button = document.getElementById(key);
       
      if (button) {
        button.classList.add("pressed");

        setTimeout(() => {
          button.classList.remove("pressed");
        }, 100);
      }

      switch (event.key) {
        case "q":
          playSound("Q");
          break;
        case "w":
          playSound("W");
          break;
        case "e":
          playSound("E");
          break;
        case "a":
          playSound("A");
          break;
        case "s":
          playSound("S");
          break;
        case "d":
          playSound("D");
          break;
        case "z":
          playSound("Z");
          break;
        case "x":
          playSound("X");
          break;
        case "c":
          playSound("C");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", pressKey);

    return () => {
      document.removeEventListener("keydown", pressKey);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="drum-bank">
        <div id="q" className="drum-pad" onClick={() => playSound("Q")}>
          Q<audio id="Q" className="clip" src={clap}></audio>
        </div>
        <div id="w" className="drum-pad" onClick={() => playSound("W")}>
          W<audio id="W" className="clip" src={kickDrum}></audio>
        </div>
        <div id="e" className="drum-pad" onClick={() => playSound("E")}>
          E<audio id="E" className="clip" src={snareDrum}></audio>
        </div>
        <div id="a" className="drum-pad" onClick={() => playSound("A")}>
          A<audio id="A" className="clip" src={hiHatClosed}></audio>
        </div>
        <div id="s" className="drum-pad" onClick={() => playSound("S")}>
          S<audio id="S" className="clip" src={tomDrum}></audio>
        </div>
        <div id="d" className="drum-pad" onClick={() => playSound("D")}>
          D<audio id="D" className="clip" src={crashCymbal}></audio>
        </div>
        <div id="z" className="drum-pad" onClick={() => playSound("Z")}>
          Z<audio id="Z" className="clip" src={hiHatOpen}></audio>
        </div>
        <div id="x" className="drum-pad" onClick={() => playSound("X")}>
          X<audio id="X" className="clip" src={woodBlock}></audio>
        </div>
        <div id="c" className="drum-pad" onClick={() => playSound("C")}>
          C<audio id="C" className="clip" src={rideCymbal}></audio>
        </div>
      </div>
      <div id="drum-control">
        <div className="logo">Drum Machine</div>
        <div id="display">
          <p id="display-text"></p>
        </div>
        <div id="volume">
          <p>Volume</p>
          <input type="range" min={1} max={100} />
        </div>
        <div className="buttons">
          <div className="Power">
            <p>Power</p>
            <button className="button-30" role="button"></button>
          </div>
          <div className="Bank">
            <p>Bank</p>
            <button className="button-30" role="button"></button>
          </div>
        </div>
        <div className="speakers">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
