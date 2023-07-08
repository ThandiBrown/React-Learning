import travelData from "../../data/travelData";
import worldIcon from "../../images/world.png";
import locationIcon from "../../images/location-icon.png";

function MapNPropsProject() {
  return (
    <>
    <TravelJournal />
    </>
  )
}


function TravelJournal() {
  return (
    <div className="journal">
      <TitleBar />
      <TravelCards />
    </div>
  )
}

function TitleBar() {
  return (
    <nav>
      <img className="world-icon" src={worldIcon} alt="Image" />
      <h2> my travel journal.</h2>
    </nav>
  )
}

function TravelCards() {
  const generateCard = function (cardData, index) {
    const horizontalLine = index ? <hr className="divider" /> : null;

    return <>
      {horizontalLine}
      < TravelCard
        key={cardData.id}
        cardData={cardData}
      />
    </>
  };

  const cards = travelData.map(generateCard);


  return (
    <div className="cardholder">
      {cards}
    </div>
  )
}

function TravelCard({ cardData }) {

  return (
    <div className="travel-card">
      <img className="locationView" src={cardData.image} alt="" />
      <div className="content">
        <img className="icon" src={locationIcon} alt="" />
        <span className="country">{cardData.country}</span>
        <span className="link"><a href={cardData.googleMapsLink}>View on Google Maps</a></span>
        {/* <div className="break"></div> */}
        <hr className="forceBreak" />
        <h1>{cardData.location}</h1>
        {/* <div className="break"></div> */}
        <hr className="forceBreak" />
        <p>{cardData.datesTraveled}</p>
        <p>{cardData.description}</p>
      </div>


    </div>
  )
}

export {
  MapNPropsProject
}