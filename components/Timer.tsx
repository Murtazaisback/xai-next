import { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(10 * 60 * 60); // Initial time in seconds (10 hours)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const formatTime = (time: number) => {
        const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;

        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };

    const { hours, minutes, seconds } = formatTime(time);

    return (
        <div className="timer">
            <div className="timer-section">
                <span id="days">00</span>
                <div className="label">DAYS</div>
            </div>
            <div className="timer-section">
                <span id="hours">{hours}</span>
                <div className="label">HOURS</div>
            </div>
            <div className="colon">:</div>
            <div className="timer-section">
                <span id="minutes">{minutes}</span>
                <div className="label">MINUTES</div>
            </div>
            <div className="colon">:</div>
            <div className="timer-section">
                <span id="seconds">{seconds}</span>
                <div className="label">SECONDS</div>
            </div>
        </div>
    );
}
