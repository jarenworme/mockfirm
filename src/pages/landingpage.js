import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LandingPage () {
    const navigate = useNavigate();

    const emailQuestions = () => {};
    const routeReviews = () => navigate('/reviews', { replace: false });
    const routeMoreInfo = () => navigate('/moreinfo', { replace: false });


    return (
        <div>
            <h1>logo</h1>
            <h1>some title</h1>
            <p>some supporting text</p>
            <p>a picture</p>
            <p>horizontal line</p>
            <h1>help icon</h1>
            <button onClick={emailQuestions}>email questions</button>
            <h1>Reviews icon</h1>
            <button onClick={routeReviews}>reviews</button>
            <h1>info icon</h1>
            <button onClick={routeMoreInfo}>more info</button>
        </div>
    )
}