import zebra from "./assets/zebra.jpeg"
function Card(){
    return(
        <div className="Card">
            <img src={zebra} alt ="Card-img"/>
            <h2>Safal Bhusal</h2>
            <p>Frontend Developer and UI/UX Designer</p>
        </div>
    );
}
export default Card 