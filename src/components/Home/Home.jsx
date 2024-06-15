import React from 'react';
import bgvideo from '../../assets/particles.mp4';
import {ReactComponent as LogoIcon} from '../../assets/analytics.svg';
import bar from '../../assets/bar-chart.svg';
import graph from '../../assets/graph.svg';
import './Home.css';

const Home = () => {
  return (
        <div className="back">
        <div id="bgVideo">
            <video id="background-video" loop autoPlay muted>
            <source src={bgvideo} type='video/mp4'/>
            </video>
        </div>
        <div className="box title">
                    
                <h1 className="main-title center">
                            <div className="logo">
                            <LogoIcon/>
                            </div>
                            ALGORITHM <strong><br></br>VISUALIZER</strong>
                </h1>
                <div>
                    <p className="description-title center">
                    Algorithm Visualizer is an interactive online platform that visualizes algorithms from code.
                    
                    </p>
                </div>
                <ul className="mt-5 mb-0" style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>

                        <li className="list-inline-item ml-5 mr-5 " style={{cursor:"pointer"}} onClick={()=> window.location.href="https://manmeet2607.github.io/Sorting-Visualizer/sorting"}>
                        <div className="card" style={{width: "16rem"}}>
                            <img className="card-img-top img algo-image" src={bar} alt="Card image cap"/>
                            <div style ={{backgroundColor:"transparent"}} className="card-body">
                                <h3 className="card-text algo-name">Sorting</h3>
                            </div>
                        </div>
                        </li>
                        {/* <li className="list-inline-item ml-5 mr-5 " style={{cursor:"pointer"}} onClick={()=>window.location.href="/pathfind"}>
                        <div className="card" style={{width: "16rem"}}>
                            <img className="card-img-top img algo-image" src={graph} alt="Card image cap"/>
                            <div style ={{backgroundColor:"transparent"}} className="card-body">
                                <h3 className="card-text algo-name">Pathfinding</h3>
                            </div>
                        </div>
                        </li> */}
                
                </ul>
  </div>
  </div>
  )
}

export default Home