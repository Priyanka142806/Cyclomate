import React, {useState, useEffect} from 'react';
import Rectangle from '../image/danger-rectangle.svg';
import Frame from '../image/danger-frame.svg';
import Video1 from '../image/project.mp4';
import Video2 from '../image/project.ogv';
function DangerCard(props){

    const [value, setValue] = useState("");

    useEffect(() =>{
        if (props.wind[0]<17){
            setValue(value+"T1.0");
        }
        else if(props.wind[0]>=17 & props.wind[0]<27) {
            setValue(value+"T1.5");
        }
        else if(props.wind[0]>=28 & props.wind[0]<33) {
            setValue(value+"T2.0");
        }
        else if(props.wind[0]>=33 & props.wind[0]<47) {
            setValue(value+"T2.5 & T3.0");
        }
        else if(props.wind[0]>=47 & props.wind[0]<63) {
            setValue(value+"T3.5");
        }
        else if(props.wind[0]>=63 & props.wind[0]<89) {
            setValue(value+"T4.0 & T4.5");
        }
        else if(props.wind[0]>=89 & props.wind[0]<119) {
            setValue(value+"T5.0");
        }
        else{
            setValue(value+"T6.0");
        }
    },[]);

    return(
        <div>
        <div className="card">
          <div className="card-body">
            <div className="container card1">
            <div className="row">
                    <div className="column rectangle">
                        <img className='image' src={Rectangle}></img>
                    </div>
                    <div className="column text">
                        <h4><b>Danger</b></h4> 
                        <p>Threat is there near the ocean</p>
                    </div>
                    <div className="column frame">
                        <img className='image' src={Frame}></img>
                    </div>
                </div>
            </div>
          </div>
          <div className="card-body">
            <div className="container card2"> 
                <div className="row">
                    <div className="column">
                        <h4><b>Wind Speed</b></h4> 
                        <p>115kt</p>
                    </div>
                    <div className="column">
                        <h4><b>T number</b></h4> 
                        <p>T6.0</p>
                    </div>
                    <div className="column">
                        <h4><b>See More</b></h4> 
                        <button className='button'>+</button>
                    </div>
                </div>
            </div>
          </div>
            
        </div>
        <video className = "video" width="400" controls>
            <source src={Video1} type="video/mp4"></source>
            <source src={Video2} type="video/ogg"></source>
            Your browser does not support the video element.
        </video>
        </div>
    );
}
export default DangerCard;