import React, { useEffect, useState } from "react";
import ProgressBar from "react-progressbar";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the interval when it reaches 100%
          return 100;
        }
        return prevProgress + 2.5; // Increment by 2.5% each 100ms to complete in 4 seconds
      });
    }, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-transparent rounded-lg shadow-xl w-full max-w-md">
        {/* Title */}
        <h1 className="text-4xl tridon font-extrabold text-amber-600">
          <span className="text-amber-500 lavis">S</span>ifat
        </h1>
        
        {/* Progress Bar and Percentage */}
        <div className="w-full mt-5">
          <ProgressBar
            completed={progress}
            color="#f59e0b" // Amber color for the progress bar
            height="12px"
            isLabelVisible={false} // Hide the default label
            bgColor="#d1d5db" // Light gray for the background bar
            labelColor="#000000" // Black for the label color
            transitionDuration="0.3s"
          />
          {/* Percentage Text */}
          <div className="text-xl flex justify-center items-center font-semibold text-amber-600 mt-2">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
