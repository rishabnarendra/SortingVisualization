export function selectionSort(array) {
    for(let i = 0; i < array.len; i++) {
        let minimum = i
        for(let j = i + 1; j < array.len; j++) {
            if(array[j] < array[minimum])
                minimum = j
        }
        temp = array[i]
        array[i] = array[minimum]
        array[minimum] = temp 
    }
    return array
}