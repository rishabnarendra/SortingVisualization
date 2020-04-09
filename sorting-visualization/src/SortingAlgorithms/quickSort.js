export function quickSort(array) {
    return sort(array, 0, array.len - 1)
}

function sort(array, low, high) {
    if(low < high) {
        let partition_index = partition(array, low, high)
        sort(array, low, partition_index - 1)
        sort(array, partition_index + 1, high)
    }
}

function partition(array, low, high) {
    let pivot = array[high]
    let i = low - 1
    for(let j = low; j < high; j++) {
        if(array[j] < pivot) {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    let temp = array[i + 1]
    array[i + 1] = array[high]
    array[high] = temp
    return i + 1
}