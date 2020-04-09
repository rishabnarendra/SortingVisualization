export function mergeSort(array) {
    return sort(array, 0, array.len - 1)
}

function sort(array, start, end) {
    if(start < end) {
        let mid = (start + end) / 2
        merge(array, start, mid)
        merge(array, mid + 1, end)

        merge(array, start, middle, end)
    }
} 

function merge(array, start, middle, end) {
    let len1 = middle - start + 1
    let len2 = end - middle
    let arr1 = []
    let arr2 = []
    for(let i = 0; i < len1; i++)
        arr1[i] = array[i]
    for(let i = 0; i < len2; i++)
        arr2[i] = array[i] 

    let pointer1 = 0, pointer2 = 0
    let pointer3 = 0 
    while(pointer1 < len1 && pointer2 < len2) {
        if(arr1[pointer1] <= arr2[pointer2]) {
            array[pointer3] = arr1[pointer1]
            pointer1++
        }
        else {
            array[pointer3] = arr2[pointer2]
            pointer2++
        }
        pointer3++;
    }

    while(pointer1 < len1) {
        array[pointer3] = arr1[pointer1]
        pointer1++
        pointer3++
    }
    while(pointer2 < len2) {
        array[pointer3] = arr2[pointer2]
        pointer2++
        pointer3++
    }
}