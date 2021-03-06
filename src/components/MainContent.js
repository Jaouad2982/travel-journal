import React from "react"
import "../css/main-content.css"
const MainContent = ({ image, location, descPicture, date, description }) => {
    return (
        <section className="main-content">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="main-content-description">
                <div className="description">
                    <h4 className="title-country">{location}</h4>
                    <p className="title-google">view on Google</p>
                </div>
                <h4 className="pic-desc">{descPicture}</h4>
                <p className="date">{date}</p>
                <p className="content-paragraph">{description}</p>
            </div>

        </section>
    )
}
export default MainContent