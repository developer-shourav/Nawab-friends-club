
import React from 'react';
import './Members.css' ;

const Members = (props) => {
    const { name, age, yearlyINcome, canDonet, picture, company, email, phone} = props.member ;
    
    return (
        <div className = 'member'>
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
                <button 
                    onClick={() => props.handleAddAcount(props.member)}
                className = 'donation-btn'
                >Donate to club account</button>
            </div>

        </div>
    );
};

export default Members;