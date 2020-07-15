import React from 'react';
import './Condition.css';
function Condition() {
    var age=12;
    return (
        <div className="Condition">
            <section className="Condition-header">
    <h3>You are {age>=18?"Eligible":"Not Eligible"} to vote</h3>
            </section>
        </div>
    )
}
export default Condition;