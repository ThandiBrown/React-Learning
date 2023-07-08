

/* Simple starter */
const simpleVar = (
    <div>
        Testing A
    </div>
)

/* Components */
function SimpleComponent() {
    const page = (
        <div>
            Testing B
        </div>
    )
    return page
}



function SimpleComponentB() {
    return (
        <div>
            Testing C
        </div>
    )
}

function CreatingComponents() {
    return (
        <>
        {simpleVar}
        <SimpleComponent />
        <SimpleComponentB />
        </>
    )
}

export {
    CreatingComponents
}


