const grabBag = new Set(['I', 'O', 'T', 'J', 'L', 'S', 'Z']);

// Based on Fisher-Yates Shuffle Algorithm
Array.prototype.shuffle = function() {
    let temp, j;
    for(let i = this.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

const createPermutation = function() {
    return Array.from(grabBag).shuffle();
}

// TEST CODE ------------------------------------------------------------------

const getFirstNPieces = function(num) {
    let result = [];
    const remainder = num % 7;
    const fullPermAmt = Math.floor(num / 7);
    for(let i = fullPermAmt; i > 0; i--){
        result = result.concat(createPermutation());
    }
    if(remainder){
        const remainingPieces = createPermutation().slice(0, remainder);
        result = result.concat(remainingPieces);
    }
    return result;
}



