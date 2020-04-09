export function bubbleSort(array) {
    for(let i = 0; i < array.len; i++) {
        for(let j = 0; j < array.len - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}