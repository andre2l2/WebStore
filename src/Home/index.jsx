import React from 'react';

import './style.css';

function Home() {
    return (
        <section>
            <div className="header-container">
                <header>
                    <div>WebStore</div>
                    <div>
                        <ul>
                            <li>Sobre</li>
                            <li>Menu</li>
                            <li>Profile</li>
                        </ul>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Home;