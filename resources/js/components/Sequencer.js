import React, { Component } from 'react'
import Tone from 'tone';

var synth = new Tone.AMSynth().toMaster();

class Sequencer extends Component {

    constructor () {
        super()
        this.togglePlaying = this.togglePlaying.bind(this);
        this.state = {
            playing: false
        }
    }

    componentDidMount () {

    }

    togglePlaying() {   
        console.log("toggleplaying"); 
        if (this.state.playing) {
            this.setState({playing: false });
            Tone.Transport.stop();
        } else {
            this.setState({ playing: true });
            Tone.Transport.start('+0.0');
            this.triggerSound();
        }
    }
    

    updateTime() {
        this.setState({
            transportTime: Tone.Transport.seconds.toFixed(2)
        });
    }

    triggerSound (event) {
        //schedule a series of notes to play as soon as the page loads
        synth.triggerAttackRelease('C4', '4n', '8n')
        synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
        synth.triggerAttackRelease('G4', '16n', '2n')
        synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
        synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2)
        synth.triggerAttackRelease('E4', '2n', '0:3')
    }

    render () {

        return (
            <div className="container">
                <div className='card'>
                    <div className='card-header'>Clock</div>
                    <div>{ this.state.transportTime }</div>
                </div>

                <div className='card'>
                    <div className='card-header'>Sequencer working</div>
                    <button onClick={this.togglePlaying}>Sound</button>
                </div>
            </div>

        )
    }
}

export default Sequencer