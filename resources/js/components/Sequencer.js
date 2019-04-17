import React, { Component } from 'react'
import Tone from 'tone';

var synth = new Tone.AMSynth().toMaster();

class Sequencer extends Component {

    constructor () {
        super()
        //Set initial state
        this.state = {
            bpm: 120,
            transportTime: 0,
            isPlaying: false
        }
        //Initialise Tone
        Tone.Transport.bpm.value = this.state.bpm;

        console.log('TONE.TRANSPORT.BPM.VALUE', Tone.Transport.bpm.value);

        //Initialise component methods
        this.handleStartPlayback = this.handleStartPlayback.bind(this);
        this.handleStopPlayback = this.handleStopPlayback.bind(this);
    }

    componentDidMount () {
        this.setState({
            transportTime: Tone.Transport.seconds
        });
    }

    handleStartPlayback() {
        this.setState({
            isPlaying: true
        });
        Tone.Transport.start(); 
    }

    handleStopPlayback() {
        this.setState({
            isPlaying: false
        });
        Tone.transport.stop(); 
    }

    render () {

        return (
            <div className="container">
                <div className='card'>
                    <div className='card-header'>Clock</div>
                    <div>{ this.state.transportTime }</div>
                </div>

                <div className='card'>
                    <div className='card-header'>Sequencer working {this.state.transportTime}</div>
                    <button onClick={this.handleStartPlayback}>{this.state.isPlaying ?'Stop' : 'Play'}</button>
                </div>
            </div>

        )
    }
}

export default Sequencer