import React, { useEffect, useState } from 'react';
import Members from '../Members/Members';
import './ClubContainer.css';
const ClubContainer = () => {
      const [members, setMembers] = useState([]) ;
      useEffect(() =>{
          fetch('./member.JSON')
          .then(res => res.json())
          .then(data => setMembers(data))
      },[])
    return (
        <div className = 'club-contaier'>
            <div className="members-container">
                
                {
                    members.map(member => <Members key = {member._id} member = {member}></Members>)
                }

            </div>

            <div className="cart-container">
               <h3>Member added :</h3>
                <h3>Total Donation:</h3>

            </div>
            
        </div>
    );
};

export default ClubContainer;