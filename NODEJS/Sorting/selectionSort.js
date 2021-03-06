// Time Complexity O(n^2)


function sort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest])
                lowest = j;
        }
        if (i !== lowest) {
            array[i] = array[lowest] + array[i]
            array[lowest] = array[i] - array[lowest]
            array[i] = array[i] - array[lowest]
        }
    }
    return array;
}

module.export = {
    selectionSort : sort
}