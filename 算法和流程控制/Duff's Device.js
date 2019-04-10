function Duff(array, process) {
    var len = array.length,
        iterations = Math.floor(len / 8),
        startAt = len % 8,
        i = 0;
    do {
        switch(startAt) {
            case 0: process(array[i++]);
            case 7: process(array[i++]);
            case 6: process(array[i++]);
            case 5: process(array[i++]);
            case 4: process(array[i++]);
            case 3: process(array[i++]);
            case 2: process(array[i++]);
            case 1: process(array[i++]);
        }
        startAt = 0;
    } while(--iterations);
}

function Duff2(array, process) {
    var len = array.length,
        i = len % 8,
        iterations = 0;
    while(i) {
        process(array[i--]);
    }
    i = Math.floor(len / 8);

    while(i) {
        iterations = i * 8;
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        process(array[iterations--]);
        i--;
    }
}