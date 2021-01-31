import React from 'react'

const LookBook = () => {
    return (
        <div className="lookbook">
            <div className="lookbook__row flex">
                <div className="lookbook__block">
                    <h2 className="lookbook__title">men’s <br/> <span>lookbook</span></h2>
                    <p className="lookbook__description">Lorem ipsum dolor sit amet eras facilisis <br/>
                    consectetur adipiscing elit lor, integer lorem <br/> consecteur dignissim laciniqui. <br/>
                    Elementum metus facilisis ut phasellu.
                    </p>
                    <button href="#" className="lookbook__button">view now</button>
                </div>
                <div className="lookbook__block">
                    <h2 className="lookbook__title">women’s <br/> <span>lookbook</span></h2>
                    <p className="lookbook__description">Lorem ipsum dolor sit amet eras facilisis <br/>
                    consectetur adipiscing elit lor, integer lorem <br/> consecteur dignissim laciniqui. <br/>
                    Elementum metus facilisis ut phasellu.
                    </p>
                    <button href="#" className="lookbook__button">view now</button>
                </div>
                <div className="lookbook__block">
                    <h2 className="lookbook__title">your <br/> <span>lookbook</span></h2>
                    <p className="lookbook__description">Lorem ipsum dolor sit amet eras facilisis <br/>
                    consectetur adipiscing elit lor, integer lorem <br/> consecteur dignissim laciniqui. <br/>
                    Elementum metus facilisis ut phasellu.
                    </p>
                    <button href="#" className="lookbook__button">view now</button>
                </div>
            </div>
        </div>
    )
}

export default LookBook
