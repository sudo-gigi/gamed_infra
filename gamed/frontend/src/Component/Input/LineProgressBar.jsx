import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, color = '#4CAF50', height = 10, rounded = true, width = '100%' }) => {
  const containerStyle = {
      backgroundColor: '#f1f1f1',
      borderRadius: rounded ? height / 2 : 0,
      height: height,
      position: 'relative',
      width: width, // Use the width prop
      overflow: 'hidden',
  };

  const progressBarStyle = {
      backgroundColor: color,
      borderRadius: rounded ? height / 2 : 0,
      height: height,
      width: `${progress}%`,
      transition: 'width 0.4s ease-in-out',
      position: 'absolute',
      top: 0,
      left: 0,
  };

  const labelStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: progress > 50 ? 'white' : 'white',
      fontSize: height * 0.7,
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
  };

  return (
      <div style={containerStyle}>
          <div style={progressBarStyle}>
              <span style={labelStyle}>{`${Math.round(progress)}%`}</span>
          </div>
      </div>
  );
};

const LineProgressBar = () => {
  const [barWidth, setBarWidth] = useState('117px');
  // const [backendProgress, setBackendProgress] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProgress = async () => {
  //     try {
  //       // Replace '/api/progress' with your actual API endpoint
  //       const response = await fetch("/api/progress");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();

  //       // Assuming your API returns a JSON object with a 'progress' property
  //       // Example: { progress: 75 }
  //       if (typeof data.progress !== "number") {
  //         throw new Error(
  //           "API response is missing the 'progress' property or it is not a number."
  //         );
  //       }
  //       setBackendProgress(data.progress);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProgress();
  // }, []); // Empty dependency array means this effect runs only once on mount

  // if (loading) {
  //   return (
  //     <div style={{ padding: "20px" }}>
  //       <p>Loading progress...</p>
  //       {/* Consider adding a loading spinner here */}
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
  // }

  return (
    <div id="cc-progress-bar">
      {/* <ProgressBar progress={backendProgress} color="#007bff" height={16} rounded={true} /> */}
      <ProgressBar progress={70} color="#3C0099" height={8} rounded={true} width={barWidth}/>
    </div>
  );
};

export default LineProgressBar;
