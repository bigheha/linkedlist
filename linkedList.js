const node = (value = null) => {
    let next = null;
    return(value, next)
}

const linkedList = () => {
    let HEAD = null;
    
    let append = (value) => {
        newNode = node(value);
        if (HEAD == null) {
            HEAD = node(value);
        }
    }
    return {HEAD, append};
}

const list = linkedList();

list.append(1);

console.log(list);