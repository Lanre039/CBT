import React from "react";
import Countdown from "react-countdown";

const ExamTimer = () => {
  const handleComplete = () => {
    alert("Hey!");
  };

  return (
    <section className="timer mt-auto flex justify-center">
      <h1 className="text-5xl font-bold text-white">17 : 49</h1>
      <Countdown
        date={Date.now() + 20 * 60 * 1000}
        onComplete={handleComplete}
      />
    </section>
  );
};

export default ExamTimer;
