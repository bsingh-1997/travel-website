import './DestinationStyles.css'
import { Component } from 'react';
class DestinationData extends Component{
    render(){
        return(

            <div className={this.props.classname}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
            <div className="image">
                <img alt="img" src={this.props.img1}></img>
                <img alt="img" src={this.props.img2}></img>
            </div>

</div>
        )
    }
}
export default DestinationData;