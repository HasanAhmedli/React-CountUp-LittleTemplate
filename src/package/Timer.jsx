import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import "../package/Timer.css"
export default function Timer() {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        start: 0,
        end: 50,
        ref: countUpRef,
        duration: 1,
    })
    return (
        <div className='timer'>
            <div className="boxs">
                <div className="box box1">{<CountUp end={100} duration={2} delay={2} />}</div>
                <div className="box box2" ref={countUpRef}>0</div>
                <div className="box box3"> {<CountUp end={500} duration={2} prefix="&#36;" />}</div>
            </div>
            <div className="buttons">
                <div className="btn btn-primary" onClick={start}>Start</div>
                <div className="btn btn-primary" onClick={pauseResume}>PauseResume</div>
                <div className="btn btn-primary" onClick={reset}>Reset</div>
                <div className="btn btn-primary" onClick={() => update(120)}>Update</div>
            </div>
        </div>
    )
}
