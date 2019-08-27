import React from 'react';

const Slider = (props) => {
    return (
        <input type="range"
            id={props.name}
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={props.change}
            step={props.step}
            />
    );
}

export default Slider;
