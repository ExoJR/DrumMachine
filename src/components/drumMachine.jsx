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

function DrumMachine() {
  const [soundsName, setSoundsName] = useState("");
  const [btnPressed, setBtnPressed] = useState(true);
  const [volume, setVolume] = useState('100');

  const playSound = (btnId) => {
    if (btnPressed) {
      const audioElement = document.getElementById(btnId);
      if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.volume = volume / 100;
        audioElement.play();
      }
    } else {
      console.log("Wrong");
      setSoundsName("");
    }
  };

  const toggleBtn = () => {
    setBtnPressed(!btnPressed);
    const display = document.getElementById("display");
    const btns = document.querySelectorAll(".drum-pad");
    const volumeInput = document.getElementById("volume-input");


    if (btnPressed) {
      display.style.background = "rgb(156, 154, 7)";
      setSoundsName('');
      volumeInput.classList.add('power-off');
      btns.forEach((btn) => {
        btn.classList.add("power-off");
      });
    } else {
      display.style.background = "yellow";
      volumeInput.classList.remove('power-off');
      btns.forEach((btn) => {
        btn.classList.remove("power-off");
      });
    }
  };

  useEffect(() => {
    const pressKey = (event) => {
      const key = event.key;
      const button = document.getElementById(key);

      if (button && btnPressed) {
        button.classList.add("pressed");

        setTimeout(() => {
          button.classList.remove("pressed");
          setSoundsName("");
        }, 100);
      }

      if (btnPressed) {
      switch (event.key) {
        case "q":
          playSound("Q");
          setSoundsName("clap");
          break;
        case "w":
          playSound("W");
          setSoundsName("kick-drum");
          break;
        case "e":
          playSound("E");
          setSoundsName("snare-drum");
          break;
        case "a":
          playSound("A");
          setSoundsName("hi-hat-closed");
          break;
        case "s":
          playSound("S");
          setSoundsName("tom-drum");
          break;
        case "d":
          playSound("D");
          setSoundsName("crash-cymbal");
          break;
        case "z":
          playSound("Z");
          setSoundsName("hi-hat-open");
          break;
        case "x":
          playSound("X");
          setSoundsName("wood-block");
          break;
        case "c":
          playSound("C");
          setSoundsName("ride-cymbal");
          break;
        default:
          break;
      }}
    };

    document.addEventListener("keydown", pressKey);

    return () => {
      document.removeEventListener("keydown", pressKey);
    };
  }, [btnPressed,volume]);

  const handleVolumeChange = (event) => {
    const volumeInput = document.querySelector('#volume-input')
    if(btnPressed){
      setVolume(event.target.value);
      setSoundsName(`${event.target.value}%`)  ;
      volumeInput.classList.remove('power-off')
    }else{
      volumeInput.classList.add('power-off')
    }
  };

  return (
    <div id="drum-machine">
      <div id="drum-bank">
        <div
          id="q"
          className="drum-pad"
          onClick={() => {
            setSoundsName("clap");
            playSound("Q");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          Q<audio id="Q" className="clip" src={clap}></audio>
        </div>
        <div
          id="w"
          className="drum-pad"
          onClick={() => {
            setSoundsName("kick-drum");
            playSound("W");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          W<audio id="W" className="clip" src={kickDrum}></audio>
        </div>
        <div
          id="e"
          className="drum-pad"
          onClick={() => {
            setSoundsName("snare-drum");
            playSound("E");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          E<audio id="E" className="clip" src={snareDrum}></audio>
        </div>
        <div
          id="a"
          className="drum-pad"
          onClick={() => {
            setSoundsName("hi-hat-closed");
            playSound("A");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          A<audio id="A" className="clip" src={hiHatClosed}></audio>
        </div>
        <div
          id="s"
          className="drum-pad"
          onClick={() => {
            setSoundsName("tom-drum");
            playSound("S");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          S<audio id="S" className="clip" src={tomDrum}></audio>
        </div>
        <div
          id="d"
          className="drum-pad"
          onClick={() => {
            setSoundsName("crash-cymbal");
            playSound("D");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          D<audio id="D" className="clip" src={crashCymbal}></audio>
        </div>
        <div
          id="z"
          className="drum-pad"
          onClick={() => {
            setSoundsName("hi-hat-open");
            playSound("Z");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          Z<audio id="Z" className="clip" src={hiHatOpen}></audio>
        </div>
        <div
          id="x"
          className="drum-pad"
          onClick={() => {
            setSoundsName("wood-block");
            playSound("X");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          X<audio id="X" className="clip" src={woodBlock}></audio>
        </div>
        <div
          id="c"
          className="drum-pad"
          onClick={() => {
            setSoundsName("ride-cymbal");
            playSound("C");
            setTimeout(() => {
              setSoundsName("");
            }, 1000);
          }}
        >
          C<audio id="C" className="clip" src={rideCymbal}></audio>
        </div>
      </div>
      <div id="drum-control">
        <div className="logo">Drum Machine</div>
        <div id="display">
          <p id="display-text">{soundsName}</p>
        </div>
        <div id="volume">
          <p>Volume</p>
          <input id="volume-input" onChange={handleVolumeChange} value={volume} type="range" min={0} max={100} />
        </div>
        <div className="buttons">
          <div className="Power">
            <p>Power</p>
            <button
              id="power-btn"
              className="button-30"
              role="button"
              onClick={toggleBtn}
            ></button>
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
