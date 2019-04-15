import React, { Component } from 'react'
import Tone from 'tone';

var synth = new Tone.AMSynth().toMaster();

class Sequencer extends Component {

    constructor () {
        super()
        this.state = {

        }
    }

    componentDidMount () {
        this.updateTime()
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
                    <button onClick={Tone.Transport.toggle}>Sound</button>
                </div>
            </div>

        )
    }
}

export default Sequencer