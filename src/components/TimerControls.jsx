import {useEffect, useRef} from "react";

const TimerControls = ({timerRef, setTime, isRunning, setIsRunning}) => {

    const startButtonRef = useRef(null);

    useEffect(() => {
        if (startButtonRef.current) {
            startButtonRef.current.focus();
        }
    },[]);

    const toggleTimer = () => {
        if (isRunning) {
            //clear the interval to stop the timer
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else{
            //start the timer
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        timerRef.current = null;
        localStorage.removeItem("time");
    }



    return (
        <>
            <button
                onClick={toggleTimer}
                ref={startButtonRef}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
                onClick={resetTimer}
                className="mt-3 bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-600">
                Reset Timer
            </button>
        </>
    )
}

export default TimerControls;