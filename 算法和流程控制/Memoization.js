function memfactorial(n) {
    if (!memfactorial.cache) {
        memfactorial.cache ={
            '0': 0,
            '1': 1,
        }
    }
    if (!memfactorial.cache.hasOwnProperty(n)) {
        memfactorial.cache[n] = n * memfactorial(n-1);
    }
    return memfactorial.cache[n];
}

function memoize(fundamental, cache) {
    cache = cache || {};
    return function(arg) {
        if(!cache.hasOwnProperty(arg)) {
            cache[arg] = fundamental(arg);
        }
        return chace[arg];
    }
}