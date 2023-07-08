

import jokesData from "../../data/jokesData"
import { keyGenSpread } from "../../data/keyGenerator"
const jokesDataWithKeys = keyGenSpread(jokesData);


function PropsProject() {
    return (
        <>
        <JokeMachine />
        <JustJokes />
        </>
    )
}

/* mini project example */
function JokeMachine() {
    return (
        <section>
            <Joke 
                setup="What button can't unbutton?"
                punchline="Your belly button."
            />
            <Joke 
                setup=""
                punchline="With a pumpkin patch."
            />
            <Joke 
                setup="Why did the chicken cross the road?"
                punchline=""
            />
            <Joke 
                setup="How do you communicate with a fish?"
                punchline="You drop it a line."
            />
            <Joke 
                setup="What did the house wear to the party?"
                punchline="Address."
            />
        </section>
    )
}

/* mini project */
function JustJokes() {

    /* using an array of objects to create and display several react components */
    const createJokeElement = function (joke) {
        return <Joke
            /* order does not matter here, the attributes just have to be named properly */
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    }

    const jokeElements = jokesDataWithKeys.map(createJokeElement)

    return (
        <div>
            {jokeElements}
        </div>
    )
}


function Joke({setup, punchline}) {
    /* conditional that only shows the joke if a setup exists */
    if (setup) {
        return (
            <section>
                <h3>Setup: {setup}</h3>
                {/* Logical &&:
                    another conditional that controls if an element will be shown 
                */}
                {punchline && <p>Punchline: {punchline}</p>}
                
                {/* Ternary operator
                    condition ? true : false
                    is another way to conditionally render element
                */}
                {setup && punchline ? <p>That's the full joke!</p> : <p>Left ya hanging!</p>}
            </section>
        )
    }
    
}


export {
    PropsProject
}