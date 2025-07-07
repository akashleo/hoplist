import React from "react";
import "./hoplist.css";
import { timestampToDate } from "./datetime-formatters";

// Default SVG Icons
const DefaultStartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "block" }}
  >
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

const DefaultStepIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "block" }}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const DefaultEndIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "block" }}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default function HopList({
  hops,
  startIconColor = "#6B7280",
  timelineColor = "#6B7280",
  stepIconColor = "#6B7280",
  endIconColor = "#6B7280",
  startIcon: StartIcon = DefaultStartIcon,
  endIcon: EndIcon = DefaultEndIcon,
  stepIcon: StepIcon = DefaultStepIcon,
}) {
  const customStyles = {
    "--start-icon-color": startIconColor,
    "--timeline-color": timelineColor,
    "--step-icon-color": stepIconColor,
    "--end-icon-color": endIconColor,
  };

  if (!hops || hops.length === 0) {
    return null;
  }


  return (
    <div className="hoplist-container" style={customStyles}>
      <div className="hoplist-scroll-container">
        <div className="hoplist-timeline">
          {/* Start Icon */}
          <div className="hoplist-item">
            <div className="hoplist-timeline-start">
              <div className="hoplist-icon hoplist-start-icon">
                <StartIcon />
              </div>
            </div>
          </div>

          {hops.map((hop, index) => {
            return (
              <React.Fragment key={index}>
                <div className="hoplist-item">
                  <div className="hoplist-timeline-elements">
                    {index < hops.length && (
                      <div className="hoplist-timeline-line"></div>
                    )}
                    <div
                      className={`hoplist-icon ${
                        index === hops.length - 1
                          ? "hoplist-end-icon"
                          : "hoplist-step-icon"
                      }`}
                    >
                      {index === hops.length - 1 ? <EndIcon /> : <StepIcon />}
                    </div>
                  </div>
                  <div className="hoplist-name">
                    <span>
                      <a>{hop.name}</a>
                    </span>
                  </div>
                  <div className="hoplist-timestamp">
                    <span>{timestampToDate(hop.hopTime)}</span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
