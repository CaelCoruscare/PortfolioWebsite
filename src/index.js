import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import sun from "./Painting_Sun.jpg";
import bubbles from "./Painting_Bubbles.jpg";
import tred from "./Tred.png";
import vr from "./Icon_VR.png";
import building from "./Cad_Building.png";
import radio from "./Radio_Automation.png";
import radio2 from "./Radio_Automation2.png";
import ghoul from "./Cad_Ghoul.gif";
import barracks from "./Cad_Barracks.gif";
import remy from "./Paint_Remy.png";
import alley from "./Paint_Alley.png";
import orb from "./Paint_Orb.png";
import manequins from "./Paint_Manequins.png";
import capture from "./Hunza_Capture.jpg";
import graph from "./Hunza_Graph.jpg";
import turtle from "./Turtle.jpg";
import board from "./Circadian_Board.jpg";
import strip from "./Circadian_Strip.jpg";
import face from "./CaelProfilePicMay2019.jpg";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const AddTripButton = props => {
    return <button onClick=
    {props.addTrip}>Add a trip</button>
}

export default AddTripButton

class PortfolioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
    }
    
    toggleHover() {
        this.setState({hover : !this.state.hover});
    }

    render(i) {
        var unhoveredStyle = {
            padding: "1vw",
            display: "inline-block",
            width: "30%",
            fontFamily: "monospace"
        };

        var hoveredStyle = {
            padding: "1vw",
            display: "inline-block",
            width: "30%",
            backgroundColor: "grey",
            fontFamily: "monospace",
            cursor: "pointer"
        };

        var styleUsed;

        if (this.state.hover) {
            styleUsed = hoveredStyle
        } else {
            styleUsed = unhoveredStyle
        }


        return (
            <div    onClick={this.props.toggle} 
                    style={styleUsed} 
                    onMouseEnter={this.toggleHover} 
                    onMouseLeave={this.toggleHover}>
                <TitleIcon title={this.props.title}></TitleIcon>
                <img src={this.props.image} alt="Project" style={{ width: "100%",
                                        height: "26vw",
                                        objectFit: "cover"}}></img>
                <UnderIcon underTitle={this.props.underTitle}></UnderIcon>
            </div>
        );
    }
}

class TitleIcon extends React.Component {
    render(){
        return(
            <div style={{fontSize: "2em"}}>{this.props.title}</div>
        );
    }
}

class UnderIcon extends React.Component {
    render(){
        return(
            <div style={{fontSize: "1.5em"}}>{this.props.underTitle}</div>
        );
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        console.log("hi, button");
        super(props);
        this.state = {showMenu: true, projNum: 1};
        console.log("hover is: " + this.state.hover);
        window.location.hash = "#menu";

        this.toggleDiv = this.toggleDiv.bind(this);
        this.clickToProject = this.clickToProject.bind(this);

        window.addEventListener("hashchange", this.toggleDiv, 0);
    }

    

    toggleDiv = () => {
        console.log("toggle");
        if (window.location.hash == "#menu" && this.state.showMenu == false)
        {
            this.setState({showMenu : true});
            console.log("a");
        }
        if (window.location.hash != "#menu" && this.state.showMenu == true)
        {
            function hashMatch(h){
                console.log("h: " + h + " | hash: " + window.location.hash);
                return ("#" + h) == window.location.hash;
            }
            console.log("b");
            this.setState({showMenu : false});
            this.setState({projNum: this.props.hashes.findIndex(hashMatch)});
        }
            
    }

    clickToMenu = () => {
        this.setState({showMenu : true});
        window.location.hash = "#menu";
    }

    clickToProject = (proj) => {
        console.log(proj);
        this.setState({projNum: proj});
        this.setState({showMenu : false});
        window.location.hash = this.props.hashes[proj];
    }

    renderPortfolioButton(number){
        return <PortfolioButton toggle={() => this.clickToProject(number)}
                                    title={this.props.titles[number]} 
                                    image={this.props.images[number]} 
                                    underTitle={this.props.underTitles[number]} />
                
    }

    render(){        

        
        console.log("At render, showMenu:" + this.state.showMenu + "  |  projNum: " + this.state.projNum);

        return(
            <div>
                <div style={{fontSize: "1.8em", width: "25%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                    <h1>Portfolio</h1>
                </div>

                { this.state.showMenu && 
                    <div>
                        <div style={{padding: "0.35%", fontSize: "1.2em", width: "50%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                            <p>These are non-academic projects that I worked on to improve my coding skills. I was paid for the automation software and one website. Aside from one of the VR projects, which I led, I wrote all the code for these projects.</p>
                        </div>
                        <div style={{backgroundImage: "linear-gradient(to bottom, rgb(245, 225, 205), rgb(230, 230, 255))"}}>
                            {this.renderPortfolioButton(0)}
                            {this.renderPortfolioButton(1)}  
                            {this.renderPortfolioButton(2)}  
                            {this.renderPortfolioButton(3)} 
                            {this.renderPortfolioButton(4)} 
                            {this.renderPortfolioButton(5)}  
                        </div>
                    </div>
                }
                { !this.state.showMenu &&
                    <div>
                        { this.state.projNum === 0 && 
                            <div>
                                <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                    <p>WLMC, the radio show at my college, only has live shows about 10% of the time. 
                                        During off-time they used to stream a shuffled playlist of songs and PSAs. 
                                        Often, 4 or more PSAs would play in a row, followed by hours of songs.
                                    </p>

                                    <p>The radio show contracted me to write automation software capable of generating a playlist with a PSA every ~15 minutes, 
                                        playing a station ID at the top of every hour, 
                                        and playing presecheduled events, with options to repeat events daily or weekly.
                                    </p>
                                </div>
                                <img src={radio2} style={{padding: "1%", width: "calc(15vw + 60vh)"}}></img>
                                <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                    <p> The event scheduling surprised me by ending up requiring the majority of the time and effort I put into this project.</p>
                                    
                                    <p> You can find the software, free to use, on my <a href="https://github.com/CaelCoruscare/AutoRadioDJ">github</a></p>

                                    <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                                </div>
                            </div>
                        }
                        { this.state.projNum === 1 && 
                            <div>
                                <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                    <p>This project is a functional 3D model editor, like a very simple AutoCad.
                                        Standard .fbx and .obj files can be loaded, the vertices changed, and result saved to an .fbx or .obj file.</p>
                                </div>
                                <img src={ghoul} style={{padding: "1%", width: "45%"}}></img>
                                <img src={barracks} style={{padding: "1%", width: "45%"}}></img>
                                <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                    <p>I started this project to learn OpenGL specifically, and low level 3D engines in general.
                                    </p>
                                    
                                    <p>I wrote the project 2 years ago in C++ with the OpenGL libraries, however I had not yet properly made the jump from C to C++, so I essentially wrote this project in C and compiled it as C++.
                                    </p>
                                    
                                    <p>You can find the code on my <a href="https://github.com/CaelCoruscare/AutoRadioDJ">github</a></p>

                                    <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                                </div>
                            </div>
                        }
                        { this.state.projNum === 2 && 
                        <div>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>While I attended college, I created 5 virtual reality applications. 
                                    These 3 are the largest projects, each one created in collaboration with at least one other person.
                                </p>
                            </div>

                            <img src={manequins} style={{padding: "1%", width: "47.5%"}}></img>
                            <img src={alley} style={{padding: "1%", width: "47.5%"}}></img>
                            <img src={remy} style={{padding: "1%", width: "39.7%"}}></img>
                            <img src={orb} style={{padding: "1%", width: "55.3%"}}></img>

                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>Painted World I created by applying the paintings and left-over palletes of several art students and friends at my college to a world that I designed. 
                                    The coding portion of this project consisted of the movement system, and some basic ways for the people in the world to interact with the player.
                                </p>
                                
                                <p>If you have a SteamVR headset you can download Painted World off my <a href="https://github.com/CaelCoruscare/AutoRadioDJ">dropbox</a>.</p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                             </div>

                            <img src={capture} style={{padding: "1%", width: "44.7%"}}></img>
                            <img src={graph} style={{padding: "1%", width: "50.3%"}}></img>

                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>Path to Hunza is an educational VR monster hunting game, meant to teach statistics without using vocabulary.
                                    I led a 6 student team in developing Path To Hunza, under the direction of my college's research & training institute, LCIRT.
                                </p>
                                
                                <p>When my team was getting ready to leave college, I passed the project on to younger students.</p>

                                <p>If you have a SteamVR headset you can download the last dev build I made of Path To Hunza off my <a href="https://github.com/CaelCoruscare/AutoRadioDJ">dropbox</a>.</p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                             </div>

                            <img src={turtle} style={{padding: "1%", width: "44.7%"}}></img>

                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>Turtle Lab is a functional proof of concept I made in collaboration with <a href="https://digitallife.org">Digital Life</a>. 
                                    I used their high quality scans of turtles to create a VR app where students could practice taking measurements of a wild animal and determine its species.
                                    Most of the work for this project involved designing, programming, testing, and improving the way the user held and interacted wth objects, particularly tools.
                                </p>

                                <p>If you have a SteamVR headset you can download the proof of concept off my <a href="https://github.com/CaelCoruscare/AutoRadioDJ">dropbox</a>.</p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                             </div>
                         </div>
                        }
                        { this.state.projNum === 3 && 
                        <div>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>TRED, a start-up company created by the entrepreneurship business class at my college, paid me to make a simple informational website for their business.
                                    I created the website with the old ES5 React, compiled with babel.
                                </p>
                            </div>

                            <img src={tred} style={{padding: "1%", width: "calc(15vw + 60vh)"}}></img>

                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>The website has gone down, but you can find a copy at <a href="https://caelhansen.com/tredlocal">caelhansen.com/tredlocal</a>.
                                </p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                            </div>

                            <img src={tred} style={{padding: "1%", width: "calc(15vw + 60vh)"}}></img>

                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>The website you are currently on I wrote using the newer React ES6, compiled by npm.
                                </p>
                                
                                <p>You can find the code for both websites on my <a href="https://github.com/CaelCoruscare/Websites">github</a>.
                                </p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                            </div>
                        </div>
                        }
                        { this.state.projNum === 4 && 
                        <div>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>I created a sunstrip that changes color throughout the day to match the hue and intensity of the sun, to help my circadian clock.</p>
                            </div>
                            <img src={strip} style={{padding: "1%", width: "calc(15vw + 60vh)"}}></img>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
        
                                <p>You can find both the assembly code and my ongoing Arduino version on <a href="https://github.com/CaelCoruscare/AutoRadioDJ">github</a>.</p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                            </div>
                        </div>
                        }
                        { this.state.projNum === 5 && 
                        <div>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
                                <p>I am working on this project to improve my Python skills while searching for a job in Austin.</p>
                            </div>
                            <img src={face} style={{padding: "1%", width: "calc(15vw + 60vh)"}}></img>
                            <div style={{padding: "0.35%", fontSize: "1.2em", width: "60%", backgroundImage: "linear-gradient(to bottom, rgb(209, 101, 38), rgb(170, 80, 30))"}}>
        
                                <p>You can find the ongoing code on <a href="https://github.com/CaelCoruscare/AutoRadioDJ">github</a>.</p>

                                <button style={{padding: "1%"}} onClick={ this.clickToMenu }>Return</button>
                            </div>
                        </div>
                        }
                    </div>

                }         
            </div>
        );
            
    }
}



  

  // ========================================
  
  ReactDOM.render(
    <Portfolio 
        hashes={["radio", "model_editor", "vr", "website", "circadian", "facial_recognition"]}
        titles={["Radio Automation", "3D Model Editor", "3 VR Apps", "2 Budget Websites", "Circadian Strip", "Facial Recognition (Ongoing)"]} 
        images={[radio, building, vr, tred, board, face]}
        underTitles={["C++, Qt", "OpenGL, C", "C#, Unity3D, SteamVR", "React, Javascript, ES5, ES6", "Assembly, Embedded Systems", "Python"]}/>,
    document.getElementById('root')
  );
  

