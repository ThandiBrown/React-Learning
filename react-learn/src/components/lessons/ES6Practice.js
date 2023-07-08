
import { keyGen } from "../../data/keyGenerator"


function ES6Abilities() {
    return (
        <>
        <SpreadOperator />
        <MapComponent />
        </>
    )
}

function SpreadOperator() {
    
    
    /* spread operator */
    /* this is how you combine lists and objects */
    const listA = ["a", "b", "c", "d", "e"]
    const listB = ["f", "g"]
    const newList = [...listA, ...listB]
    
    const objA = {
        food: "cereal",
        taste: "sweet"
    }
    
    const objB = {
        texture: "crunchy",
    }
    
    const newObj = {...objA, ...objB}
    
    /* this is how to break down/destructure lists*/
    const [firstLetter, secondLetter, ...remainingLetters] = listA
    
    /* notice that with objects if you add 2 objects with the same properties, those properties will be overridden in value. 
    if the properties are new, they will simply be added to the object*/
    const objC = {
        food: "dried fish",
        taste: "salty"
    }

    const overriddenObjectWithObject = {...objA, ...objC}
    
    /* the object can also be overwritten by directly placing the value */
    const overriddenObject = {...overriddenObjectWithObject, taste: "fishy"}
    
    return (
        <h3>
            {newList}
            <br></br>
            {JSON.stringify(newObj)}
            <br></br>
            <br></br>
            {firstLetter + " - " + secondLetter + " - " + remainingLetters + " - " + remainingLetters[2]}
            <br></br>
            <br></br>
            
            <p>overriddenObjectWithObject: {JSON.stringify(overriddenObjectWithObject)}</p>
            <p>overriddenObject: {JSON.stringify(overriddenObject)}</p>
            
        </h3>
    )
}


/* provide keys to data */
/* data */
const titles = ["A", "B"];
/* keys */
const titlesWithKeys = keyGen(titles);




function MapComponent() {

    // data
    const nums = [1, 2, 3, 4, 5]

    // function
    const square = function (item) {
        return item * item
    }

    // map method
    /* returns an array of nums values once square mehtod is applied to eack element */
    /* .map will loop over the array and return a new one  */
    const squared = nums.map(square)

    /* -------------------- */
    // data
    // titlesWithKeys

    // method
    const makeHeader = function (obj) {
        return <h1 key={obj.id}>{obj.value}</h1>
    }

    // map method
    const headers = titlesWithKeys.map(makeHeader)

    return (
        <>
            {/* using MAP */}
            <h1>{squared.toString()}</h1>

            {/* using MAP to create several JSX elements */}
            {headers}

        </>
    )
}

export {
    ES6Abilities
}