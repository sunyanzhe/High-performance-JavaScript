function merge(left, right) {
    var result = [];
    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(items) {
    if (items.length === 1) return items;
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right)); 
}

function mergeSort2(items) {
    if (items.length == 1) return items;
    var work = [];
    for (var i = 0, len = items.length; i < len; i++) {
        work.push(items[i]);
    }
    work.push([]);

    for (var lim = len; lim > 1; lim = (lim + 1) / 2) {
        for (var j = 0, k = 0; k < lim; j++, k += 2) {
            work[j] = merge(work[k], work[k+1]);
        }
        work[j] = [];
    }
    return work[0]
}
console.log(mergeSort([4,5,6,7,2,1]));
console.log(mergeSort2([4,5,6,7,2,1]));