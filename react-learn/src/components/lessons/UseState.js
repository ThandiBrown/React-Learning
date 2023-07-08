import { useState } from "react";


function UseState() {
    return (
        <>
        <BasicUseState />
        </>
    )
}

function BasicUseState() {
    /* 
    There are 3 rules for hooks:

    Hooks can only be called inside React function components.
    Hooks can only be called at the top level of a component.
    Hooks cannot be conditional

     */
    
    const [value, setValue] = useState(5);
    
    const updateState = () => value == 5 ? setValue(6) : setValue(5);
    
    
    const usingCallbackFunctionToUpdateState = () => {
        /* passing a function into setValue instead of directly the number is possible */
        setValue(function() {
            /* this returns the new value you want state to be*/
            return 8;
        })
    }
    
    const callbackUsingPreviousStateAsParam = () => {
        /* when you pass in a function to the state setter, react automatically passes in the previous state as the parameter here
        it is good to use a callback function when you want to determine your new state value based on your previous state value, like incrementing it*/
        setValue(function(previousState) {
            /* this returns the new value you want state to be*/
            return previousState + 1;
        });
    }
    
    const callbackUsingPreviousStateAsParamAsArrowFunction = () => {
        setValue((previousState) => previousState + 1);
    }
    
    /* 
    When the state is updated, the entire state is overwritten.
    Use the spread operator to prevent this.
    */
   
    const [rainbow, setRainbow] = useState({
        first:"red",
        second:"green",
        third:"yellow",
    })
    
    const correctRainbow = () => {
        setRainbow((previousState) => {
            return {...previousState, second: "orange"}
        });
    }
    
    const [boolValue, setBoolValue] = useState(true);
    
    const useTernaryToToggleBetweenState = () => setBoolValue((previousState) => !previousState);
    
    const [things, setThings] = useState(["Thing 1", "Thing 2"]);
    const updatingStateOfArray = () => {
        /* it's effective to use the spread operator when trying to update an array
        you need to return a new array because remember the state setter needs to take a new value to replace the previous state */
        return setThings((previousState) => [...previousState, `Thing ${things.length + 1}`]);
    }
    
    return (
        <div className="events">
            <button
                type="button"
                onClick={updateState}
            >Update State: {value}</button>            
            <button
                type="button"
                onClick={usingCallbackFunctionToUpdateState}
            >usingCallbackFunctionToUpdateState: {value}</button>            
            <button
                type="button"
                onClick={callbackUsingPreviousStateAsParam}
            >callbackUsingPreviousStateAsParam: {value}</button>            
            <button
                type="button"
                onClick={correctRainbow}
            >Update Only One Part of the State: {JSON.stringify(rainbow)}</button>
            <button
                type="button"
                onClick={useTernaryToToggleBetweenState}
            >useTernaryToToggleBetweenState: {JSON.stringify(boolValue)}</button>
            <button
                type="button"
                onClick={updatingStateOfArray}
            >updatingStateOfArray: {JSON.stringify(things)}</button>
        </div>
    )
}



export {
    UseState
}















































