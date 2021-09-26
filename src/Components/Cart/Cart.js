import React from 'react';
// font awesome icons  import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDonate } from '@fortawesome/free-solid-svg-icons';
//Custom css style sheet
import './Cart.css' ;

const Cart = (props) => {
    const {balance} = props ;
    // Default value
    let total = 0 ;
    let memberName = '';
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const balanceIcon = <FontAwesomeIcon icon={faDonate} />
    for( const member of balance) {
        // Sum account balance 
        total = parseFloat(total) + parseFloat(member.canDonet) ;
        memberName = memberName  + `  ${member.name }   ` ;
    }
    return (
        <div className = 'balance-cart'>
            <h3> Account Balance Summary</h3>
            <h4>{userIcon} Member added : {props.balance.length}</h4>
            {/* Updatin total Account balance */}
            <h4> {balanceIcon} Total Donation:$ {total.toFixed(2)}</h4>
            <div>
                <h3> {memberName}</h3>
            </div>

            
        </div>
    );
};

export default Cart;