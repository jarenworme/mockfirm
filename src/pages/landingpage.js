import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faHouse, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import '../styles/nav.css'
import '../styles/landingPage.css'

export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // hold state to determine if modal is present or not
    const [modalOpen, setModalOpen] = useState(false);

    // hold state for the user chosen day input in the modal booking form
    const [modalFormLocation, setModalFormLocation] = useState('');

    // hold state for the user chosen day input in the modal booking form
    const [modalFormDay, setModalFormDay] = useState('');

    // hold state for the user chosen time input in the modal booking form
    const [modalFormTime, setModalFormTime] = useState('');

    // function to generate email from the form data
    const handleModalFormSubmit = (e) => {
        e.preventDefault();

        // generate the mailto: string based on the user entered information
        const submitFormString = `mailto:jarenworme@gmail.com?subject=JWElectrical%20Booking?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20consultation.%20Do%20you%20have%20openings%20at%20${modalFormTime}%20on%20${modalFormDay}%3F%0D%0A%0D%0AI%20live%20in%20the%20${modalFormLocation}%20area.%0D%0A%0D%0A`;

        // open email with the content the user entered
        window.location.href = submitFormString;

        // close modal after redirection
        setModalOpen(false);
    }

    const toggleModal = (newState) => setModalOpen(newState);

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // mailto string for email questions button
    const emailString = "mailto:jarenworme@gmail.com?subject=JWElectrical%20Query?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20ask%20a%20question%20about%20your%20services!%0D%0A%0D%0A"

    // function to navigate to the reviews page
    const routeReviews = () => navigate('/reviews', { replace: false });

    // function to navigate to the more info page
    // const routeMoreInfo = () => navigate('/moreinfo', { replace: false });


    return (
        <div className="lp-wrapper">
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#DEDBFF',
                    borderRadius: '12px',
                },
                }}
            >
                <div className="modal-wrapper">
                    <h1 className="modal-title">Book a Consultation</h1>
                    <p className="modal-subtitle">We handle bookings via email. Our services extend across numerous cities and towns throughout Ontario. To ensure we can accommodate your request, we will assess the availability of our schedule and the feasibility of traveling from our previous job site to your location.</p>
                    <h3 className="modal-form-title">Pick a day and time that suits you best</h3>
                    <form className="modal-form">
                        <div className="modal-input-wrapper">
                            <input value={modalFormLocation} type="text" placeholder="Which city/town are you in?" onChange={(e) => setModalFormLocation(e.target.value)} className="modal-input"></input>
                            <select onChange={(e) => setModalFormDay(e.target.value)} className="modal-input-select">
                                <option value="">Choose a day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </select>
                            <select onChange={(e) => setModalFormTime(e.target.value)} className="modal-input-select">
                                <option value="">Choose a time</option>
                                <option value="9:00">9:00</option>
                                <option value="12:00">12:00</option>
                                <option value="15:00">15:00</option>
                                <option value="18:00">18:00</option>
                            </select>
                        </div>                        
                        <button type="submit" className="modal-submit" onClick={handleModalFormSubmit} disabled={modalFormDay === '' || modalFormTime === '' || modalFormLocation === ''}>generate email!</button>
                    </form>
                </div>
            </Modal>
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
                    <button className="lp-book-button" onClick={() => toggleModal(true)}>Book a Free Consultation</button>
                </div>
                <div className="lp-top-right-wrapper">
                    <div className="lp-picture-wrapper">
                        <div className="lp-picture-card-right">
                            <h2 className="lp-picture-card-right-title">80</h2>
                            <p className="lp-picture-card-text">Satisfied Customers</p>
                        </div>
                        <div className="lp-picture-card-left">
                            <h2 className="lp-picture-card-left-title">6+</h2>
                            <p className="lp-picture-card-text">Years Work Experience</p>
                        </div> 
                    </div>
                    
                </div>
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
                <button className="lp-info-card">
                    <FontAwesomeIcon icon={faCircleInfo} size="4x" className="lp-info" />
                    <h1 className="lp-card-text">Meet the Team!</h1>
                </button>
            </div>
        </div>
    )
}