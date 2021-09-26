import React from 'react';
import './Cart.css' ;

const Cart = (props) => {
    const {balance} = props ;
    let total = 0 ;
    let memberName = '';
    for( const member of balance) {
        total = parseFloat(total) + parseFloat(member.canDonet) ;
        memberName = memberName  + `  ${member.name }   ` ;
    }
    return (
        <div className = 'balance-cart'>
            <h3> Account Balance Summary</h3>
            <h4>Member added : {props.balance.length}</h4>
            <h4>Total Donation:$ {total.toFixed(2)}</h4>
            <div>
                <h3> {memberName}</h3>
            </div>

            
        </div>
    );
};

export default Cart;