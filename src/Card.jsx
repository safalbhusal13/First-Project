import Safal from "./assets/Safal.png"
function Card(){
    return(
        <div className="Card">
            <img src={Safal} alt ="Card-img" className="Card-img"/>
            <h2>Safal Bhusal</h2>
            <p>Frontend Developer and UI/UX Designer</p>
        </div>
    );
}
export default Card 