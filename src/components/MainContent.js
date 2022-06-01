import React from "react"
import "../css/main-content.css"
import japan from "../images/japan.jpg"
const MainContent = () => {
    return (
        <section className="main-content">
            <div>
                <img src={japan} alt="Japan" />
            </div>
            <div className="main-content-description">
                <div>
                    <h4>Japan</h4>
                    <p>view on Google</p>
                </div>
                <h4>Mount Fuji</h4>
                <p>Date</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists</p>

            </div>
        </section>

    )
}
export default MainContent