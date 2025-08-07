import TimerDisplay from "../components/TimerDisplay"
import TimerControls from "../components/TimerControls"
import {useRef, useState, useEffect} from "react";

const Timer = () => {

    const timerRef = useRef(null);

    const [time, setTime] = useState(()=>{
        let lsValue = localStorage.getItem("time");
        if (lsValue){
            return Number(lsValue);
        } else{
            return 0;
        }
    });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        localStorage.setItem("time", time);
    }, [time])

    return (
        <>
            <TimerDisplay time={time} />
            <TimerControls timerRef={timerRef} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning}/>
        </>
    )
}
export default Timer;