import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faHouse, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import '../styles/nav.css'
import '../styles/landingPage.css'

export default function LandingPage () {
    const navigate = useNavigate();

    const navigateHome = () => navigate('/', {replace: false});

    const emailString = "mailto:jarenworme@gmail.com?subject=JWElectrical?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20ask%20a%20query%20about%20your%20services!%0D%0A%0D%0A"

    const routeReviews = () => navigate('/reviews', { replace: false });
    const routeMoreInfo = () => navigate('/moreinfo', { replace: false });


    return (
        <div className="lp-wrapper">
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="logo1">JW</h1>
                    <h1 className="logo2">Electrical</h1>
                </div>
                <div className="nav-right">
                    <FontAwesomeIcon icon={faHouse} onClick={navigateHome} className="nav-home" size="xl"/>
                </div>
            </div>
            <div className="lp-top-container">
                <div className="lp-top-left-wrapper">
                    <div className="lp-title-box">
                        <h1 className="lp-title">Your Trusted Source for All Electrical Needs</h1>
                    </div>
                    <div className="lp-subtitle-wrapper">
                        <h3 className="lp-subtitle">From wiring and lighting installations to home automation, JW Electrical has you covered.</h3>
                    </div>
                    <button className="lp-book-button">Book a Free Consultation</button>
                </div>
                <div className="lp-top-right-wrapper">.</div>
            </div>
            <div className="lp-spacer">.</div>
            <div className="lp-bottom-container">
                <button className="lp-review-card" onClick={routeReviews}>
                    <div className="lp-review-wrapper">
                        <div className="lp-stars-wrapper">
                            <FontAwesomeIcon icon={faStar} size="3x" className="lp-star"/>
                            <FontAwesomeIcon icon={faStar} size="3x" className="lp-star"/>
                            <FontAwesomeIcon icon={faStar} size="3x" className="lp-star"/>
                            <FontAwesomeIcon icon={faStar} size="3x" className="lp-star"/>
                            <FontAwesomeIcon icon={faStarHalf} size="3x" className="lp-star"/>
                        </div>
                        <h2 className="lp-review-score">4.7/5</h2>
                    </div>
                    <h1 className="lp-card-text-review">Reviews</h1>
                </button>
                <a className="lp-card" href={emailString}>
                    <FontAwesomeIcon icon={faEnvelope} size="4x" className="lp-envelope"/>
                    <h1 className="lp-card-text">Email us Questions</h1>
                </a>
                <button className="lp-card" onClick={routeMoreInfo}>
                    <FontAwesomeIcon icon={faCircleInfo} size="4x" className="lp-info" />
                    <h1 className="lp-card-text">Meet the Team!</h1>
                </button>
            </div>
        </div>
    )
}