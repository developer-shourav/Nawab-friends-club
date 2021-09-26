
import React from 'react';
// font awesome icons  import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons' ;

// adding custom style sheet 
import './Members.css' ;

const Members = (props) => {
    // Distructaring the propertys
    const { name, age, yearlyINcome, canDonet, picture, company, email, phone} = props.member ;
    // Icons 
    const icons = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
        <div className = 'member'>
            {/* Member's All information */}
            <img src={picture} alt="" />
            <div className="member-info">
                <h3>Member's name: {name}</h3>
                <p>Age: {age}</p>
                <p>Company: {company}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Age: {age}</p>
                <p>Monthly income : <b>${yearlyINcome} </b></p>
                <h3>Can Donaet: <strong>${canDonet}</strong></h3>

                {/* Balance adding Button */}
                <button 
                    onClick={() => props.handleAddAcount(props.member)}
                className = 'donation-btn'
                >{icons} Donate to club </button>
            </div>

        </div>
    );
};

export default Members;