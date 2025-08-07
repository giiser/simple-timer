import TimerDisplay from "../components/TimerDisplay"
import TimerControls from "../components/TimerControls"
import {useRef, useState} from "react";

const Timer = () => {

    const timerRef = useRef(null);

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <>
            <TimerDisplay time={time} />
            <TimerControls timerRef={timerRef} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning}/>
        </>
    )
}
export default Timer;