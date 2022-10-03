import React from 'react';

import image from './constants'

function App() {
    return (
        <main className="wrapper">
            <img src={image.patternTop} className="pattern--top" alt="pattern top" />
            <img src={image.patternBottom} alt="pattern bottom" className="pattern--bottom" />
            <article className="card">
                <header className='card__header'>
                    <img src={image.avatar} className='card__avatar' alt="user avatar" />
                </header>
                <div className="card__body">
                    <div className="card__info d-flex justify-center gap-1">

                        <p className="card__name b-700">
                            Victor Crest
                        </p>
                        <p className="card__age gray">
                            26
                        </p>
                    </div>
                    <p className="card__location gray">
                        London
                    </p>
                </div>
                <footer className='card__footer d-flex justify-evenly'>
                    <span className="card__social text-center">
                        <p className="card__number b-700">80K
                        </p>
                        <p className="card__media gray font-sm letter-spacing-1">Followers
                        </p>
                    </span>
                    <span className="card__social text-center">
                        <p className="card__number b-700">803K
                        </p>

                        <p className="card__media gray font-sm letter-spacing-1">Likes
                        </p>
                    </span>
                    <span className="card__social text-center">

                        <p className="card__number b-700">1.4K
                        </p>
                        <p className="card__media gray font-sm letter-spacing-1">Photos
                        </p>
                    </span>
                </footer>
            </article>
        </main>
    );
}

export default App;
