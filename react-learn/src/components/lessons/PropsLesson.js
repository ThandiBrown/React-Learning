


function PropsLesson() {
    
    return (
        <>
        <ObjectDestructuring />
        {/* sending properties into PropValue */}
        <PropValue name="Mr. Joker"/>
        <PropValue name="Harley Quinn"/>
        <PropValue name="Batman"/>
        <HorizontalRule />
        <MultiPropValue name="Mr. Rogers" color="green" activity="dance"/>
        <NamingDestructured name="Joan" activity="read"/>
        <HorizontalRule />
        </>
    )
}



/* destructuring props as they are passed in */
function NamingDestructured({name, activity}) {
    return (
        <h1>My sister's name is {name} and she likes to {activity}.</h1>
    )
}

function HorizontalRule() {
    return (
        <hr></hr>
    )
}

/* 
props is an object with properties (values passed in)
*/
function MultiPropValue(props) {
    
    return (
        <h1>Hello my name is {props.name}, my favorite color is {props.color} and I like to {props.activity}!</h1>
    )
}

/* 
props is an object with properties (values passed in)
*/
function PropValue(props) {
    
    return (
        <h1>Hello my name is {props.name}</h1>
    )
}

function ObjectDestructuring() {
    const person = {
        name: "John",
        color: "blue",
        hair: "wavy",
        height: "tall"
    }
    
    /* an example of the structuring object (partially) */
    const {name, color} = person
    
    return (
        <h1>Hello my name is {name} and I like {color}.</h1>
    )
}

export {
    PropsLesson
}