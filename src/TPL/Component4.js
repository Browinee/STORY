import React, { Component } from 'react';
import './App.css';
import img_elImageCopy3 from './images/Component4_elImageCopy3_429581.jpg';
import img_elImageCopy from './images/Component8_elImageCopy_560966.jpg';
import img_elImageCopy2 from './images/Component8_elImageCopy_560966.jpg';


export default class Component4 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        boxShadow: '0.0px 6.8px 48px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        boxShadow: '0.0px 6.8px 48px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component4" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImageCopy3' style={style_imageCopy3} />
        </div>
        
       
        <div className="foreground">
          <div className='elImageCopy' style={style_imageCopy} />
        </div>
      </div>
    )
  }
  

}
