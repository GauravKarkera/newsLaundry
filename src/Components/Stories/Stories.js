import React, { Component } from 'react'
import Card from "../Card/Card"
import DynamicCard from "../DynamicCard/DynamicCard"
import { MDBCloseIcon } from "mdbreact"


export class Stories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            items: [],
            showDynamicCard: false,
            storyElements: [],
            index: 0,
            isLoading: false
        }
    }

    showDynamicCardFunc = (value, storyElements) => {
        this.setState({
            showDynamicCard: value,
            storyElements
        })
    }


    componentDidMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://ace.qtstage.io/api/v1/collections/entertainment'
        fetch(proxyUrl + targetUrl)
            .then(
                this.setState({ isLoading: true }))

            .then(res => res.json())
            .then((data) => {
                this.setState({ data, items: data.items, isLoading: false })
            })
            .catch(console.log("Error"))
    }


    incrementIndex = () => {

        if (this.state.index !== this.state.storyElements.length - 1) {
            this.setState(prevState => ({
                index: prevState.index + 1
            }))
        }
    }
    decrementIndex = () => {
        if (this.state.index !== 0) {
            this.setState(prevState => ({
                index: prevState.index - 1
            }))
        }
    }

    render() {
        const { items, showDynamicCard, storyElements, isLoading } = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }

        if (showDynamicCard) {
            return <>
                <div className="col-md-12">
                    <MDBCloseIcon className="closeButton" onClick={() => this.showDynamicCardFunc(false)} />
                </div>
                <span className="leftbutton" onClick={this.decrementIndex} >
                    {"<<"}
                </span >

                <span className="rightbutton" onClick={this.incrementIndex}>{">>"}</span>

                <DynamicCard storyElement={storyElements[this.state.index]} />
            </>

        }
        return (
            <>
                <div className="container-fluid">
                    <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><span>^</span></a>

                    <div className="row">
                        {items.map(item => {
                            return <div className="col-md-4">
                                <Card
                                    item={item}
                                    showDynamicCardFunc={this.showDynamicCardFunc}
                                />
                            </div>

                        })}
                    </div>
                </div>
            </>
        )
    }
}


export default Stories
