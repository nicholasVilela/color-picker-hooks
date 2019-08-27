import React, { useState } from 'react';
import Slider from './Slider'

const Main = () => {
    const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
    const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
    const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))
    const [alpha, setAlpha] = useState(Math.random().toFixed(1))

    const changeHue = event => {
        setHue(event.target.value)
    }

    const changeSaturation = event => {
        setSaturation(event.target.value)
    }

    const changeLightness = event => {
        setLightness(event.target.value)
    }

    const changeAlpha = event => {
        setAlpha(event.target.value)
    }

    return (
         <div id="container">
            <label htmlFor="hue">Hue</label>
            <Slider name='hue' min='0' max='360' value={hue} change={(e) => changeHue(e)} step="1" />

            <label htmlFor="saturation">Saturation</label>
            <Slider name='saturation' min='0' max='100' value={saturation} change={(e) => changeSaturation(e)} step="1" />

            <label htmlFor="lightness">Lightness</label>
            <Slider name='lightness' min='0' max='100' value={lightness} change={(e) => changeLightness(e)} step="1" />
                
            <label htmlFor="alpha">Alpha</label>
            <Slider name='alpha' min='0' max='1' value={alpha} change={(e) => changeAlpha(e)} step="0.1" />

            {/* <button onClick={randomColor}>RANDOM COLOR</button> */}

            <h1>hsla({hue}, {saturation}%, {lightness}%, {alpha})</h1>

            <div id="color-box" style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})` }}></div>
        </div>
    );
}

export default Main;
