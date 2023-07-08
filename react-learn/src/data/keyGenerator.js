



function keyGen(list) {
    let globalKey = 0;
    
    const addKey = function(item) {
        globalKey++;
        return {
            id: globalKey,
            value: item
        }
    }; 
    
    return list.map(addKey);
}

function keyGenSpread(list) {
    let globalKey = 0;
    
    const addKey = function(item) {
        globalKey++;
        return {
            id: globalKey,
            ...item
        }
    }; 
    
    return list.map(addKey);
}

export {
    keyGen,
    keyGenSpread
}