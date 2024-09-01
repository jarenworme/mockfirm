import { replace, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/publish.css';   
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";
import WEBADDRESS from "../webAddress";

export default function PublishReview () {

    // set up variable for navigation
    const navigate = useNavigate();

    // set up state variable to hold user-entered number of review stars
    const [stars, setStars] = useState(0);

    // set up state variable to hold user-entered name in the reviewer section
    const [reviewer, setReviewer] = useState('');

    // set up state variable to hold user-entered review content
    const [reviewBody, setReviewBody] = useState('');

    // function to navigate back to the home page
    const navigateHome = () => navigate('/', {replace: false});

    // post request to api to add the new review
    const handleSubmit = async (e) => {
        // prevent default form submission
        e.preventDefault();

        try {
            let tempdate = new Date();
            let dateISO = tempdate.toISOString();
            const response = await axios.post(`${WEBADDRESS}api/publish/`, {
                stars: stars,
                reviewer: reviewer,
                content: reviewBody,
                review_date: dateISO
            });
            navigate('/reviews', { replace: false });
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    // function to navigate back to the reviews page if a user cancels the creation
    const handleCancel = () => navigate('/reviews', {replace: false});


    return (
        <div className="publish-wrapper">
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="logo1">JW</h1>
                    <h1 className="logo2">Electrical</h1>
                </div>
                <div className="nav-right">
                    <FontAwesomeIcon icon={faHouse} onClick={navigateHome} className="nav-home" size="xl"/>
                </div>
            </div>

            <div className="publish-content-wrapper">
                <div className="publish-title-wrapper">
                    <h1 className="publish-title">Share Your Experience With Us</h1>
                </div>
                <div className="publish-stars-wrapper">
                    <FontAwesomeIcon icon={faStar} size="4x" className={stars === 5 ? "s1 s1a" : "s1"} onClick={() => setStars(5)}/>
                    <FontAwesomeIcon icon={faStar} size="4x" className={stars === 4 ? "s2 s2a" : "s2"} onClick={() => setStars(4)}/>
                    <FontAwesomeIcon icon={faStar} size="4x" className={stars === 3 ? "s3 s3a" : "s3"} onClick={() => setStars(3)}/>
                    <FontAwesomeIcon icon={faStar} size="4x" className={stars === 2 ? "s4 s4a" : "s4"} onClick={() => setStars(2)}/>
                    <FontAwesomeIcon icon={faStar} size="4x" className={stars === 1 ? "s5 s5a" : "s5"} onClick={() => setStars(1)}/>
                </div>
                <form onSubmit={handleSubmit}>
                    
                    <div className="publish-reviewer-wrapper">
                        <input className="publish-reviewer-input" type="text" placeholder="Type your name here" value={reviewer} onChange={(e) => setReviewer(e.target.value)} />
                    </div>
                    <div className="publish-review-body-wrapper">
                        <textarea className="publish-review-body-input" type="text" placeholder="Give us your honest review!" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} />
                    </div>
                    <div className="publish-buttons-wrapper">
                        <button type="button" className="publish-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="publish-submit" disabled={stars < 1 || reviewer == '' || reviewBody == ''}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}