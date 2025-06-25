import React from "react";
import { ArrowRight, Album, BuildRounded } from "@mui/icons-material";
import { timestampToDate } from "./datetime-formatters";
import "./hoplist.css";

export default function HopList({ 
  hopChunks,
  startIconColor = "#6B7280",
  timelineColor = "#6B7280", 
  stepIconColor = "#6B7280",
  endIconColor = "#6B7280",
  startIcon: StartIcon = ArrowRight,
  endIcon: EndIcon = Album,
  stepIcon: StepIcon = BuildRounded
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
