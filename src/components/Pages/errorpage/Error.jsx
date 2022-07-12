import React from "react";
import "./error.css";

const Error = () => {
    return (
        <div className="error">
            <h1 className="error-alert">404 This Page Not Found</h1>
            <p className="msg404">The love of God directs us for a reason!</p>
            <button className="backhome"><a href="/">Back To Home Page </a></button>
        </div>
    )
};

export default Error;
