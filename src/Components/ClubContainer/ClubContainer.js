import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Members from '../Members/Members';
import './ClubContainer.css';
const ClubContainer = () => {
      const [members, setMembers] = useState([]) ;
      const [balance, setBalance] = useState([]) ;

      useEffect(() =>{
          fetch('./member.JSON')
          .then(res => res.json())
          .then(data => setMembers(data))
      },[])


      const handleAddAcount = member => {
          const newBalance = [...balance, member] ;
          setBalance(newBalance)
      }
    return (
        <div className = 'club-contaier'>
            <div className="members-container">
                
                {
                    members.map(member => <Members 
                        key = {member._id} 
                        member = {member}
                        handleAddAcount={handleAddAcount}
                        ></Members>)
                }

            </div>

            <div className="cart-container">
              <Cart balance ={balance}></Cart>
            </div>
            
        </div>
    );
};

export default ClubContainer;