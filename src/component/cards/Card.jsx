import React from 'react'
import CardItem from './CardItem'

const Card = () => {
    return (
        <div className="cards">
            <h1>Check out amazing destinations as you travel</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <div className="cards-items">
                        <CardItem 
                            src="https://images.unsplash.com/photo-1521579880562-101f47676ee1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                            alt="fly away"
                            text="Travel the world and experience bliss"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="https://images.unsplash.com/photo-1521579880562-101f47676ee1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                            alt="fly away"
                            text="Travel the world and experience bliss"
                            label="Adventure"
                            path="/services"
                        />
                        
                        <CardItem 
                            src="https://images.unsplash.com/photo-1521579880562-101f47676ee1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
                            alt="fly away"
                            text="Travel the world and experience bliss"
                            label="Adventure"
                            path="/services"
                        />
                    </div>
                </div>

                <div className="cards-wrapper">
                    <div className="cards-items">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
