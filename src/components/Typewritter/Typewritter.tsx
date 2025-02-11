import React, { useState, useEffect } from "react";
import { IMessage } from "../../services/chats/interfaces";

const hasTenSecondsPassed = (startDate: string) => {
  const startTime = new Date(startDate.replace(/[a-zA-Z]/g, ' ')).getTime();
  const currentTime = new Date(new Date().toISOString().replace(/[a-zA-Z]/g, ' ')).getTime();
  return (currentTime - startTime) >= 10000;
};

const Typewriter: React.FC<Pick<IMessage, 'response' | 'created_at'>> = ({ response, created_at }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!hasTenSecondsPassed(created_at)) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < response.length - 1) {
          setDisplayText((prev) => prev + response[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    } else {
      setDisplayText(response);
    }
  }, [response]);

  return <>{displayText}</>;
}

export default Typewriter;