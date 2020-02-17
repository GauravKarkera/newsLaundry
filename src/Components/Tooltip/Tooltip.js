import React, { Component } from 'react'

export default function Tooltip(props) {

    return (
        <div id="tooltip" class="bottom">
            <div class="tooltip-arrow" />
            <div class="tooltip-label">{props.tip}</div>
        </div>
    )

}
