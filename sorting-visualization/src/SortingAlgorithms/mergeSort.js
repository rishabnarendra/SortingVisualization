export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    sort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function sort(array, start, end, auxiliaryArray, animations) {
    if(start === end) return
        let mid = Math.floor((start + end) / 2)
        sort(auxiliaryArray, start, mid, array, animations)
        sort(auxiliaryArray, mid + 1, end, array, animations)

        merge(array, start, mid, end, auxiliaryArray, animations)
} 

function merge(array, start, middle, end, auxiliaryArray, animations) {
    let pointer1 = start, pointer2 = middle + 1
    let pointer3 = start 
    while(pointer1 <= middle && pointer2 <= end) {
        animations.push([pointer1, pointer2]);
        animations.push([pointer1, pointer2]);

        if(auxiliaryArray[pointer1] <= auxiliaryArray[pointer2]) {
            animations.push([pointer3, auxiliaryArray[pointer1]])
            array[pointer3++] = auxiliaryArray[pointer1++]
        }
        else {
            animations.push([pointer3, auxiliaryArray[pointer2]])
            array[pointer3++] = auxiliaryArray[pointer2++]
        }
    }

    while(pointer1 <= middle) {
        animations.push([pointer1, pointer1])
        animations.push([pointer1, pointer1])
        animations.push([pointer3, auxiliaryArray[pointer1]])
        array[pointer3++] = auxiliaryArray[pointer1++]
    }
    while(pointer2 <= end) {
        animations.push([pointer2, pointer2])
        animations.push([pointer2, pointer2])
        animations.push([pointer3, auxiliaryArray[pointer2]])
        array[pointer3++] = auxiliaryArray[pointer2++]
    }
}