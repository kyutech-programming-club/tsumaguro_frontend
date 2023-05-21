import React, { useState, useEffect } from "react";

type Params = {
  isCounting: boolean;
  whenZero: () => void;
};

const waitTime = 10

const TimerComponent = (props: any) => {
  const [value, setValue] = useState(waitTime);

  useEffect(() => {
    let intervalId: any = null;

    if (props.isCounting) {
      intervalId = setInterval(() => {
        setValue((prevValue) => prevValue - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [props.isCounting]);

  useEffect(() => {
    if (value === 0) {
      props.whenZero("this is zero");
    }
  }, [value]);

  return <h1>{value}</h1>;
};



export default TimerComponent;
