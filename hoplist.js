import React from "react";
import { timestampToDate } from "./datetime-formatters";
import "./hoplist.css";

// Default SVG Icons
const DefaultStartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

const DefaultStepIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const DefaultEndIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default function HopList({ 
  hopChunks,
  startIconColor = "#6B7280",
  timelineColor = "#6B7280", 
  stepIconColor = "#6B7280",
  endIconColor = "#6B7280",
  startIcon: StartIcon = DefaultStartIcon,
  endIcon: EndIcon = DefaultEndIcon,
  stepIcon: StepIcon = DefaultStepIcon
}) {
  const customStyles = {
    '--start-icon-color': startIconColor,
    '--timeline-color': timelineColor,
    '--step-icon-color': stepIconColor,
    '--end-icon-color': endIconColor
  };

  return (
    <div className="hoplist-container" style={customStyles}>
      {hopChunks.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="hoplist-row">
              {index === 0 && (
                <div className="hoplist-start-icon">
                  <StartIcon />
                </div>
              )}
              {item.map(({ hopTime, name }, i) => (
                <React.Fragment key={i}>
                  <div className="hoplist-item">
                    <div
                      className={`hoplist-timeline-container ${
                        i === item.length - 1 && index < hopChunks.length - 1
                          ? "hoplist-timeline-container--end"
                          : "hoplist-timeline-container--default"
                      }`}
                    >
                      <div
                        className={`hoplist-timeline-line ${
                          index > 0 && i === 0
                            ? "hoplist-timeline-line--short"
                            : "hoplist-timeline-line--long"
                        }`}
                      ></div>
                      
                      <div
                        className={`hoplist-icon ${
                          index === hopChunks.length - 1 && i === item.length - 1
                            ? "hoplist-icon--end"
                            : "hoplist-icon--default"
                        }`}
                      >
                        {index === hopChunks.length - 1 && i === item.length - 1 ? (
                          <EndIcon />
                        ) : (
                          <StepIcon />
                        )}
                      </div>
                      
                      {i === item.length - 1 && index < hopChunks.length - 1 && (
                        <div className="hoplist-timeline-line hoplist-timeline-line--short"></div>
                      )}
                    </div>
                    
                    <div className="hoplist-name">
                      <span>
                        <a>{name}</a>
                      </span>
                    </div>
                    
                    <div className="hoplist-timestamp">
                      <span>{timestampToDate(hopTime)}</span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
