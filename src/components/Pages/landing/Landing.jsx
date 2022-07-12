import React, { useEffect } from "react";
import "./landing.css";

const landing = () => {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    });


    return (
        <div className="landingpage">
            <div className="container">
                <div className="page-container">
                    <div className="toppage1-toppage2">
                        <div className="page toppage1">
                            <h2 className="title">Our Vision</h2>
                            <p className="page1-comment">Bringing each one into the reality of God's love and goodness, and
                                helping
                                them to see themselves as God sees them, as greatly cherished and extremly valuable, as
                                precious
                                pearls.</p>
                        </div>
                        <div className="page toppage2">
                            <h2 className="title">OnePearl</h2>
                            <p className="page2-comment">GLOBAL INITIATIVE</p>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3 className="panel-title">OnePearl</h3>
                                <p className="panel-comments">
                                    GLOBAL INITIATIVE
                                </p>
                                <button className="btn transparent" id="sign-up-btn">
                                    See More
                                </button>
                            </div>
                            <img src="img/log.svg" className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3 className="panel-title2">Our Mission</h3>
                                <div className="missions">To generate outreaches, programs and events with the aim of meeting
                                    the
                                    spiritual and physical needs of people.</div>
                                <div className="missions">To establish and advance the kingdom of God in the hearts and lives of
                                    men and women</div>
                                <button className="btn transparent" id="sign-in-btn">
                                    Go Back
                                </button>
                            </div>
                            <img src="img/register.svg" className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default landing;
