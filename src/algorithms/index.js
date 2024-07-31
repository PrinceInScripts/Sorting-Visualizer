import bubbleSort from "./bubbleSort";
import heapSort from "./heapsort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import selectionSort from "./selectionSort";

export const algorithms = [
    { value: 'bubbleSort', label: 'Bubble Sort', method: bubbleSort },
    { value: 'heapSort', label: 'Heap Sort', method: heapSort },
    { value: 'insertionSort', label: 'Insertion Sort', method: insertionSort },
    { value: 'quickSort', label: 'Quick Sort', method: quickSort },
    { value: 'mergeSort', label: 'Merge Sort', method: mergeSort },
    { value: 'selectionSort', label: 'Selection Sort', method: selectionSort },
];