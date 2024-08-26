import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WEBADDRESS from "../webAddress";

export default function Reviews () {
    const navigate = useNavigate();
    
    const [reviewArray, setReviewArray] = useState([]);
    const [currTab, setCurrTab] = useState('all');

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

    useEffect(() => {
        console.log(reviewArray);
    }, [reviewArray]);

    const switchTab = (tab) => {
        if(tab == 0) {
            setCurrTab('all');
            var Addr = WEBADDRESS + 'api/reviews/';
            axios.get(Addr)
                .then(response => {
                    setReviewArray(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            let tabName = tab + '-star';
            setCurrTab(tabName);
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


    return (
        <div>
            <h1>see our reviews</h1>
            <button onClick={() => switchTab(0)}>all</button>
            <button onClick={() => switchTab(5)}>5-star</button>
            <button onClick={() => switchTab(4)}>4-star</button>
            <button onClick={() => switchTab(3)}>3-star</button>
            <button onClick={() => switchTab(2)}>2-star</button>
            <button onClick={() => switchTab(1)}>1-star</button>
            <div>
                {reviewArray.length == 0 ?
                <div>
                    <h2>currently no {currTab} reviews.</h2>
                </div>
                : reviewArray.map((item, index) => (
                    <div key={item.id}>
                        <h1>{item.stars}</h1>
                        <h1>{item.content}</h1>
                        <h1>{item.reviewer}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}