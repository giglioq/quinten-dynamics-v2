import React from 'react'
import { Link } from 'gatsby'


export default function about() {
    return (
        <div className='container'>
            <nav className='navbar is-spaced is-warning'>
                <div className='navbar-brand'>
                    <div className='navbar-item'>
                        <h1 className='title'>About</h1>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/" className="button is-link">
                            Home
                        </Link>
                    </div>
                </div>                
            </nav>
            <div className='container is-fluid'>
                <br></br>
                <div className="columns">
                <div className="column is-one-fifth">
                <br />
                    <h1>Side Bar</h1>
                    <p>This website is a projection of a brain onto a digital space</p>
                </div>
                <div className="column is-three-fifths">
                <div className='tile box'>
                    <p>
                        Content.
                        Wow look there is so much content on this page it's crazy.
                        How do they do it? We will never know. Just prolific. 
                    </p> 
                </div>
                </div>
                </div>
            </div>
        </div>//container
    )
}
