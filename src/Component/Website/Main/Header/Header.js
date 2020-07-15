import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div className="Header">
            <section className="Header-Section">
<ul>
<li><Link to='/'>Home</Link></li>
<li><Link to='/Condition'>Condition</Link></li>
<li><Link to='/Contact'>Contact</Link></li>
<li><Link to='/Props'>Props</Link></li>

</ul>
            </section>
            
        </div>
    )
}
