import React, {Component} from 'react';
import Carousel from './carousel';
import '../../styles/windowCarousel.css';

class Window extends Component {

    state

    componentDidMount() {
	
    }
    closeWindow = (e) => {
        console.log(e);
        e.target.parentElement.parentElement.id = "hidden-animation";
    };
    minWindow = (e) => {

    };
    /*fullWindow = (e) => {
        const styles = {
            width: "100%",
            height: "75%"
        }
        e.target.parentElement.parentElement.style = styles;
    };*/
    render() {
        return(
        <div id="window">
            <div id="header">
                <div onClick={this.closeWindow} className="circle" ></div>
                <div onClick={this.minWindow} className="circle" ></div>
                <div className="circle" ></div>
            </div>  
            <div className="thumbs">
                <div className="thumb"></div>
            </div>
            <Carousel/>
        </div>
        );
    }
};

export default Window;
