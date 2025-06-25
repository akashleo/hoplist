import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  EditOutlined,
  Album,
  BuildRounded,
  PublishOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { timestampToDate } from "../../util/datetime-formatters";

export default function HopList({ hopChunks }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {hopChunks.map((item, index) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {index === 0 && (
                <div
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    border: "5px solid #FF5733",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowRight />
                </div>
              )}
              {item.map(({ hopTime, name }, i) => (
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={
                        i === item.length - 1 && index < hopChunks.length - 1
                          ? {
                              display: "flex",
                              flexDirection: "row",
                              maxWidth: "17.5rem",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: "0px !important",
                              margin: "0px !important",
                            }
                          : {
                              display: "flex",
                              flexDirection: "row",
                              maxWidth: "12.5rem",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              padding: "0px !important",
                              margin: "0px !important",
                            }
                      }
                    >
                      {index > 0 && i === 0 ? (
                        <div
                          style={{
                            backgroundColor: "#FF5733",
                            height: "0.25rem",
                            width: "5rem",
                          }}
                        ></div>
                      ) : (
                        <div
                          style={{
                            backgroundColor: "#FF5733",
                            height: "0.25rem",
                            width: "10rem",
                          }}
                        ></div>
                      )}
                      {index === hopChunks.length - 1 &&
                      i === item.length - 1 ? (
                        <div
                          style={{
                            height: "2.5rem",
                            width: "2.5rem",
                            border: "5px solid lightgreen",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Album />
                        </div>
                      ) : (
                        <div
                          style={{
                            height: "2.5rem",
                            width: "2.5rem",
                            border: "3px solid #3f51b5",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BuildRounded />
                        </div>
                      )}
                      {i === item.length - 1 &&
                        index < hopChunks.length - 1 && (
                          <div
                            style={{
                              backgroundColor: "#FF5733",
                              height: "0.25rem",
                              width: "5rem",
                            }}
                          ></div>
                        )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        maxWidth: "12.5rem",
                        fontFamily: "monospace",
                        height: "2rem",
                      }}
                    >
                      <span>
                        {" "}
                        <a>{name}</a>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        maxWidth: "12.5rem",
                        fontFamily: "monospace",
                        fontSize: "12px",
                        height: "2rem",
                      }}
                    >
                      <span> {timestampToDate(hopTime)}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
}
