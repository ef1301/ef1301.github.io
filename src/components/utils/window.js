import React, {Component} from 'react';
import Carousel from './carousel';
import '../../styles/windowCarousel.css';

import {shootLines} from './basic-utils';

class Window extends Component {
    componentDidMount() {
	
    }
    render() {
        return(
        <div id="window">
            <div id="header">
                <div onMouseEnter={shootLines} className="circle"></div>
                <div onMouseEnter={shootLines} className="circle"></div>
                <div onMouseEnter={shootLines} className="circle"></div>
            </div>  
            <div className="thumbs">
                <div className="thumb"></div>
            </div>
            <Carousel/>
            <div id="espose">
                <p>1</p>
                <p>1</p>
                <p></p>
                <p></p>	
            </div>
        </div>
        );
    }
};

export default Window;
