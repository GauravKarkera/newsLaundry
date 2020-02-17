import React, { Component } from 'react'
import Image from "../../assets/centralPark.jpg"
import { MDBCloseIcon } from "mdbreact"

const styles = {

    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

}
export default class DynamicCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <div className="dynamicCard" style={styles}>
                
                <div className="col-md-12">
                <div className="dynamicCard" dangerouslySetInnerHTML={{ __html: this.props.storyElement.text }} />;
                   
                </div>
            </div>
        )
    }
}
