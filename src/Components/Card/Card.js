import React, { Component } from 'react'
import Image from "../../assets/Car.jpg"
import Tooltip from "../Tooltip/Tooltip"
import DynamicCard from "../DynamicCard/DynamicCard"


export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tooltip: false,
            showDynamicCard:false
        }
    }


    showTooltip = (value) => {
        this.setState({ tooltip: value })
    }

    showDynamicCard= (value)=>{
        this.setState({
            showDynamicCard:value
        })
    }


    render() {
        const { item } = this.props
        const { tooltip,showDynamicCard } = this.state
        if(showDynamicCard){
            return <DynamicCard/>
        }
        return (
            <div class="card">
                <img className="card-img-top" src={Image} alt="Card image cap" />
                <div className="card-body">
                    <div className="text-boundary">
                        <h6 className="card-title" 
                        onMouseLeave={()=>this.showTooltip(false)}
                        onMouseEnter={()=>this.showTooltip(true)}
                            >{item.story.headline}</h6>
                        <small 
                         title={item.story.subheadline} className="card-text">{item.story.subheadline}</small>
                            {tooltip && <Tooltip tip={item.story.headline}/>}

                    </div>
                    <button  onClick={()=>this.props.showDynamicCardFunc(true,item.story.cards[0]['story-elements'])} closeDynamicCard={()=>this.props.showDynamicCardFunc(false)} className="btn btn-primary card-button">View Cards</button>
                </div>
            </div>
        )
    }
}
