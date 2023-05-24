import React from "react";
import axios from "axios";

export const API = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const data = JSON.parse(localStorage.getItem("Token"));

    return axios.create({
      baseURL: "https://voting-app.adaptable.app/api/v1",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${data}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
  } else {
    // Return a default instance if window is undefined
    return axios.create({
      baseURL: "https://voting-app.adaptable.app/api/v1",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
