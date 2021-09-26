import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Members from '../Members/Members';

//Adding  custom css style sheet
import './ClubContainer.css';
const ClubContainer = () => {
    // Using state for members information
      const [members, setMembers] = useState([]) ;
    // Using state for card information
      const [balance, setBalance] = useState([]) ;

       // loading the fake data
      useEffect(() =>{
          fetch('./member.JSON')
          .then(res => res.json())
          .then(data => setMembers(data))
      },[])


    // Button Event
      const handleAddAcount = member => {
          const newBalance = [...balance, member] ;
          setBalance(newBalance)
      }
    return (
        <div className = 'club-contaier'>
            <div className="members-container">
                
                {
                    members.map(member => <Members 
                        // using key for handle errors and makin unique
                        key = {member._id} 
                        member = {member}
                        handleAddAcount={handleAddAcount}
                        ></Members>)
                }

            </div>

            <div className="cart-container">
                {/* Balance cart */}
              <Cart balance ={balance}></Cart>
            </div>
            
        </div>
    );
};

export default ClubContainer;