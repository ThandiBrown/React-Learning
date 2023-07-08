
import { useState } from "react";

function Events() {
    return (
        <>
        <BasicEvent />
        </>
    )
}

function BasicEvent() {
    
    
    const noParameter = function() {
        alert(30)
    };
    
    const parameterGiven = function(item) {
        alert(item*item)
    };
    
    const noParameterAsArrowFunction = () => alert(30);
    
    const parameterGivenAsArrowFunction = (item) => alert(item*item);
    
    const eventPassedAsParameter = (e) => alert(e.type);
    
    return (
        <div className="events">
            {/* if your function is not passing a parameter, you can just list the name of the function */}
            <button onClick={noParameter}>Click noParameter</button>
            {/* 
            "() => " is needed to prevent the method from being called immediately
            delete this portion to see
            */}
            <button onClick={() => parameterGiven(5)}>Click parameterGiven</button>
            
            <button onClick={() => noParameterAsArrowFunction(5)}>
                Click noParameterAsArrowFunction</button>
                
            <button onClick={() => parameterGivenAsArrowFunction(5)}>
                Click parameterGivenAsArrowFunction</button>
                                
            <button onClick={(event) => eventPassedAsParameter(event)}>
                Click eventPassedAsParameter</button>
        </div>
        
    )
}

export {
    Events
}