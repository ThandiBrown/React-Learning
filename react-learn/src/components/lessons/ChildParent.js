


function ChildComponentA() {
    return (
        <h1>Title</h1>
    )
}

function ChildComponentB() {
    return (
        <p>main content</p>
    )
}

function ParentComponent() {
    return (
        <>
            <ChildComponentA />
            <ChildComponentB />
            <div>Extra</div>
        </>
    )
}


export {
    ParentComponent
}