import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WEBADDRESS from "../webAddress";
import '../styles/reviews.css';
import '../styles/nav.css';

export default function Reviews () {
    const navigate = useNavigate();
    
    const [reviewArray, setReviewArray] = useState([]);
    const [currTab, setCurrTab] = useState(0);

    // grab all reviews from api
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

    const switchTab = (tab) => {
        if(tab == 0) {
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

    const navigateHome = () => navigate('/', {replace: false});
    const navigatePublish = () => navigate('/publishreview', {replace: false});


    return (
        <div className="review-page-wrapper">
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="logo1">JW</h1>
                    <h1 className="logo2">Electrical</h1>
                </div>
                <div className="nav-right">
                    <button onClick={navigateHome} className="nav-home">home</button>
                </div>
            </div>
            <div className="review-title-wrapper">
                <h1 className="review-title">Our Reviews</h1>
                <p className="review-subtitle">See what makes us special</p>
            </div>
            <div className="tabs-wrapper">
                <div className="tab-wrapper">
                    <button onClick={() => switchTab(0)} className={`review-tab ${currTab === 0 ? 'active' : ''}`}>all</button>
                    <div className={`review-tab-bar ${currTab === 0 ? 'activeb' : ''}`}>.</div>
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
                <div className="arrow-wrapper">l</div>
                <div className="reviews-container">
                    {reviewArray.length == 0 ?
                    <div>
                        <h2>currently no {currTab}-star reviews.</h2>
                    </div>
                    : reviewArray.map((item, index) => (
                        <div key={item.id} className="review-card">
                            <h1>{item.stars}</h1>
                            <p>{item.content}</p>
                            <h4>{item.reviewer}</h4>
                        </div>
                    ))}
                </div>
                <div className="arrow-wrapper">r</div>
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