import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WEBADDRESS from "../webAddress";
import '../styles/reviews.css';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviews () {
    // set up variable for navigation
    const navigate = useNavigate();
    
    // set up state variable to hold all review data as an array of review objects
    const [reviewArray, setReviewArray] = useState([]);

    // set up state variable to hold info on the current review tab to faciliate switching
    const [currTab, setCurrTab] = useState(6);

    // function to navigate back to the home page
    const navigateHome = () => navigate('/', {replace: false});

    // function to grab all reviews from api automatically when the page loads up
    useEffect(() => {
        var Addr = WEBADDRESS + 'api/reviews/';
        axios.get(Addr)
            .then(response => {
                setReviewArray(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // function to change the review tab and regenerate the array of reviews based on the current tab
    const switchTab = (tab) => {
        // tab  is all reviews, for simplicity
        if(tab == 6) {
            setCurrTab(tab);
            var Addr = WEBADDRESS + 'api/reviews/';
            axios.get(Addr)
                .then(response => {
                    setReviewArray(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            setCurrTab(tab);
            var Addr = WEBADDRESS + 'api/reviews/' + tab + '/';
            axios.get(Addr)
                .then(response => {
                    setReviewArray(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    // logic to call switchTab depending on which arrow direction is pressed
    const switchTabArrow = (direction) => {
        if (direction == 'r') {
            if (currTab > 1) {
                switchTab(currTab-1);
            }
        } else {
            if (currTab < 6) {
                switchTab(currTab+1);
            }
        }
    }

    // function to navigate to the publish review page
    const navigatePublish = () => navigate('/publishreview', {replace: false});


    return (
        <div className="review-page-wrapper">
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="logo1">JW</h1>
                    <h1 className="logo2">Electrical</h1>
                </div>
                <div className="nav-right">
                    <FontAwesomeIcon icon={faHouse} onClick={navigateHome} className="nav-home" size="xl"/>
                </div>
            </div>
            <div className="review-title-wrapper">
                <h1 className="review-title">Our Reviews</h1>
                <p className="review-subtitle">See what makes us special</p>
            </div>
            <div className="tabs-wrapper">
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(6)} className={`review-tab ${currTab === 6 ? 'active' : ''}`}>all</button>
                    <div className={`review-tab-bar ${currTab === 6 ? 'activeb' : ''}`}>.</div>
                </div>
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(5)} className={`review-tab ${currTab === 5 ? 'active' : ''}`}>5-star</button>
                    <div className={`review-tab-bar ${currTab === 5 ? 'activeb' : ''}`}>.</div>
                </div>
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(4)} className={`review-tab ${currTab === 4 ? 'active' : ''}`}>4-star</button>
                    <div className={`review-tab-bar ${currTab === 4 ? 'activeb' : ''}`}>.</div>
                </div>
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(3)} className={`review-tab ${currTab === 3 ? 'active' : ''}`}>3-star</button>
                    <div className={`review-tab-bar ${currTab === 3 ? 'activeb' : ''}`}>.</div>
                </div>
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(2)} className={`review-tab ${currTab === 2 ? 'active' : ''}`}>2-star</button>
                    <div className={`review-tab-bar ${currTab === 2 ? 'activeb' : ''}`}>.</div>
                </div>
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(1)} className={`review-tab ${currTab === 1 ? 'active' : ''}`}>1-star</button>
                    <div className={`review-tab-bar ${currTab === 1 ? 'activeb' : ''}`}>.</div>
                </div>
            </div>
            <div className="reviews-container-wrapper">
                <div className="arrow-wrapper-left">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="arrow-left" onClick={() => switchTabArrow('l')}/>
                </div>
                <div className="reviews-container">
                    {reviewArray.length == 0 ?
                    <div>
                        <h2>currently no {currTab}-star reviews.</h2>
                    </div>
                    : reviewArray.map((item, _) => (
                        <div key={item.id} className="review-card">
                            <div className="review-star-wrapper">
                                {Array.from({ length: item.stars }).map((_, index) => (
                                    <div key={index}>
                                        <FontAwesomeIcon icon={faStar} size="xl" className="review-star"/>
                                    </div>
                                ))}
                            </div>
                            <div className="review-content-wrapper">
                                <p className="review-content">{item.content}</p>
                            </div>
                            <div className="review-reviewer-wrapper">
                                <h4 className="review-reviewer">{item.reviewer}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrow-wrapper-right">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="arrow-right" onClick={() => switchTabArrow('r')}/>
                </div>
            </div>
            <div className="review-button-wrapper">
                <button className="review-add" onClick={navigatePublish}>Add a Review</button>                
            </div>
            <div className="review-copyright-bar">
                <p className="review-copyright-info">&copy; Jaren Worme 2024</p>
            </div>
        </div>
    );
}
