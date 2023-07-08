
import  cardData  from "../../data/imgData"
import starImg from '../../images/star.png';

function MappingProject() {
    return (
        <>
        <ImageCards />
        </>
    )
}


function ImageCards() {
    const generateCard = function(obj) {
        return <Card 
            key={obj.id}
            title={obj.title}
            imageName={obj.coverImage}
            review={obj.stats}
            location={obj.location}
            price={obj.price}
            instructor={obj.instructor}
            openSpots={obj.openSpots}
        />
    };
    const cards = cardData.map(generateCard);
    
    return (
        <div className="cardContainer">
            {cards}
        </div>
    )
}

/* mini project */
function Card(
    {
        title, imageName, review, location, price, instructor, openSpots
    }
) {
  console.log(imageName)
  
    return (
        <div className="card">
            <h1>{title}</h1>
            <div  className="image-container">
              {openSpots ? <img src={starImg} alt="" className="available-activity"/>: <div  className="image-badge">SOLD OUT</div>}
              
              
              <img src={imageName} alt="Image Not Found"  className="card-image"/>
            </div>
            <div className="card-stats">
                <img src={starImg} alt=""  className="card-star"/>
                <p>
                  <span>{review.rating} </span>
                  <span className="gray">({review.reviewCount}) • </span>
                  <span className="gray">{location}</span>
                </p>
            </div>
            <p>Instructor: {instructor}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}


export {
    MappingProject
}