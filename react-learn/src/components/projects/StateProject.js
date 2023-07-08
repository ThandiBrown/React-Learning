import { useState } from "react";

/* 
Any time state is changed, the component holding it and its children are re-rendered. rendering just means the elements are re-generated/displayed/written onto the Dom

passing data regarding state
u primarily needs to go up a level (up to a parent) in state and pass things down as props this can be changed using context
*/



function StateProject() {
    return (
        <>
            <Count />
            <App />
        </>
    )
}

function Count() {
    const [passedToChild, setPassedToChild] = useState(0);

    const add = function () {
        return setPassedToChild((prevState) => prevState + 1)
    }
    const sub = function () {
        return setPassedToChild((prevState) => prevState - 1)
    }


    const [changedInParentNChild, setChangedInParentNChild] = useState(100);

    function functionPassedToChild() {
        return setChangedInParentNChild(prevState => prevState / 2)
    }

    return (
        <div className="state">
            <button onClick={add}>Add</button>
            <button onClick={sub}>Subtract</button>
            {/* state can be passed as a prop 
            state setters / functions can be passed in as props*/}
            <CountUI
                countValue={passedToChild}
                dividedValue={changedInParentNChild}
                handleClick={functionPassedToChild}
            />
            <button onClick={functionPassedToChild}>State Changed in Parent</button>
        </div>
    )
}

function CountUI(props) {
    return (
        <div className="state">
            <h2>{props.countValue}</h2>
            <h2>{props.dividedValue}</h2>
            <button onClick={props.handleClick}>State Changed in Child</button>
        </div>
    )
}

function App() {
    const [square, setSquare] = useState([{ id: 5, on: true }, { id: 6, on: false }])

    function toggle(id) {
        const boxActive = 1;
        /* alert(`Clicked!${id}`); */
        setSquare(function (prevState) {

            const newState = [...prevState]
            for (let i in newState) {
                if (newState[i].id === id) {
                    alert("Found it");
                    newState[i].on = !newState[i].on;
                    break;
                }
            }
            alert(JSON.stringify(newState))
            return newState
        })


    }

    const boxes = square.map(square => (
        <Box key={square.id} type={square.id} on={square.on} toggle={toggle} />
    ))

    return (
        <div>
            {boxes}
        </div>
    )
}

function Box(props) {
    return (
        <div>
            <button onClick={() => props.toggle(props.type)}>Which box was it?{JSON.stringify(props.on)}</button>
        </div>
    )
}

export {
    StateProject
}









