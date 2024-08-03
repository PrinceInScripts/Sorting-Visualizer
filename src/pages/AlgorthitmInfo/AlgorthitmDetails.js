

const AlgorithmsDetails={
    mergeSorting:{
        name:'mergeSort',
        timeComplexity:"O(n logn)",
        spaceComplexity:"O(n)",
        code:{
            cpp:`
             class Solution{
              public:
              void merge(vector<int>& a, vector<int>& b, vector<int>& result){
                    int i=0;
                    int j=0;
                    int k=0;
                
                    while(i<a.size() && j<b.size()){
                        if(a[i]>=b[j]) result[k++]=a[i++];
                        else result[k++]=b[j++]; 
                    }

                    if(i==a.size())
                        while(j<b.size()) result[k++]=b[j++];

                    if(j==b.size())
                        while(i<a.size()) result[k++]=a[i++];
                }

                void mergeSort(vector<int>& v){
                    int n=v.size();
                    int n1=n/2,n2=n-n/2;
                    if(n==1) return;
                    vector<int> a(n1),b(n2);
                    for(int i=0;i<n1;i++){
                        a[i]=v[i];
                    }
                    for(int i=0;i<n2;i++){
                        b[i]=v[i+n1];
                    }

                    mergeSort(a);
                    mergeSort(b);

                    merge(a,b,v);
                    a.clear();
                    b.clear();
                }
             }
            `,
           
            javaScript:`
            function merge(left, right) {
                let result = [], i = 0, j = 0;

                while (i < left.length && j < right.length) {
                    if (left[i] <= right[j]) result.push(left[i++]);
                    else result.push(right[j++]);
                }

                return result.concat(left.slice(i)).concat(right.slice(j));
            }

            function mergeSort(arr) {
                if (arr.length < 2) return arr;

                const mid = Math.floor(arr.length / 2);
                const left = mergeSort(arr.slice(0, mid));
                const right = mergeSort(arr.slice(mid));

                return merge(left, right);
            }
            `
        }
    },
    bubbleSorting:{
        name:'bubbleSort',
        timeComplexity:"O(n^2)",
        spaceComplexity:"O(1)",
        code:{
            cpp:`
             class Solution{
              public:
              void bubbleSort(vector<int>& arr){
                  int n=arr.size();
                for(int j=0;j<n-1;j++){
                    for(int i=0;i<n-1-j;i++){
                        if(arr[i]>arr[i+1]){
                            swap(arr[i],arr[i+1]);
                        }
                    }
                }
                }
               
             }
            `,
           
            javaScript:`
               function bubbleSort(arr) {
                    let n = arr.length;
                    for (let j = 0; j < n - 1; j++) {
                        for (let i = 0; i < n - 1 - j; i++) {
                            if (arr[i] > arr[i + 1]) {
                                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                            }
                        }
                    }
                }
            `
        }
    },
    insertionSorting:{
        name:'insertionSort',
        timeComplexity:"O(n^2)",
        spaceComplexity:"O(1)",
        code:{
            cpp:`
             class Solution{
              public:
              void insertionSort(vector<int>& arr){
                  int n=arr.size();
                 for(int i=1;i<n;i++){
                    int idx=i;
                    while(idx>=1 && arr[idx-1]>arr[idx]){
                        swap(arr[idx-1],arr[idx]);
                        idx--;
                    }
                }
                }
               
             }
            `,
           
            javaScript:`
            function insertionSort(arr) {
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let idx = i;
                while (idx >= 1 && arr[idx - 1] > arr[idx]) {
                    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                    idx--;
                }
            }
        }
            `
        }
    },
    selectionSorting:{
        name:'selectionSort',
        timeComplexity: "O(n^2)",
        spaceComplexity: "O(1)",
        code:{
            cpp:`
             class Solution{
              public:
              void selectionSort(vector<int>& arr){
                  int n=arr.size();
                  for(int i=0;i<n-1;i++){
                    int mn=INT_MAX;
                    int idx=-1;
                    for(int j=i;j<n;j++){
                        if(arr[j]<mn){
                            mn=arr[j];
                            idx=j;
                        }

                    }
                    swap(arr[i],arr[idx]);
                }
                }
               
             }
            `,
           
            javaScript:`
            function selectionSort(arr) {
                let n = arr.length;
                for (let i = 0; i < n - 1; i++) {
                    let mn = Infinity;
                    let idx = -1;
                    for (let j = i; j < n; j++) {
                        if (arr[j] < mn) {
                            mn = arr[j];
                            idx = j;
                        }
                    }
                    [arr[i], arr[idx]] = [arr[idx], arr[i]];
                }
            }
            `
        }
    },
    quickSorting:{
        name:'quickSort',
        timeComplexity: "O(n^2)",
        spaceComplexity: "O(1)",
        code:{
            cpp:`
             class Solution{
              public:
            int partition(int arr[],int startIdx,int endIdx){
                int pivotElement=arr[(startIdx+endIdx)/2];

                int count=0;
                for(int i=startIdx;i<=endIdx;i++){
                    if(i==((startIdx+endIdx)/2)) continue;
                    if(arr[i]<=pivotElement){
                        count++;
                    }
                }
                
                int pivotIndex=startIdx+count;
                swap(arr[(startIdx+endIdx)/2],arr[pivotIndex]);

                int i=startIdx;
                int j=endIdx;
                while(i<pivotIndex && j>pivotIndex){
                    if(arr[i]<arr[pivotIndex]) i++;
                    else if(arr[j]>arr[pivotIndex]) j--;
                    else if(arr[i]>arr[pivotIndex] && arr[j]<=arr[pivotIndex]){
                        swap(arr[i],arr[j]);
                        i++;
                        j--;
                    } 
                }

                return pivotIndex;
            }
            void quickSort(int arr[],int startIdx,int endIdx){
                if(startIdx>=endIdx) return;

                int pivotIdx=partition(arr,startIdx,endIdx);

                quickSort(arr,startIdx,pivotIdx-1);
                quickSort(arr,pivotIdx+1,endIdx);

            }               
             }
            `,
           
            javaScript:`
            function partition(arr, startIdx, endIdx) {
                const pivotElement = arr[Math.floor((startIdx + endIdx) / 2)];
                let count = 0;
                for (let i = startIdx; i <= endIdx; i++) {
                    if (i === Math.floor((startIdx + endIdx) / 2)) continue;
                    if (arr[i] <= pivotElement) {
                        count++;
                    }
                }
                const pivotIndex = startIdx + count;
                [arr[Math.floor((startIdx + endIdx) / 2)], arr[pivotIndex]] = [arr[pivotIndex], arr[Math.floor((startIdx + endIdx) / 2)]];
                let i = startIdx, j = endIdx;
                while (i < pivotIndex && j > pivotIndex) {
                    if (arr[i] < arr[pivotIndex]) i++;
                    else if (arr[j] > arr[pivotIndex]) j--;
                    else if (arr[i] > arr[pivotIndex] && arr[j] <= arr[pivotIndex]) {
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        i++;
                        j--;
                    }
                }
                return pivotIndex;
            }

            function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
                if (startIdx >= endIdx) return;

                const pivotIdx = partition(arr, startIdx, endIdx);
                quickSort(arr, startIdx, pivotIdx - 1);
                quickSort(arr, pivotIdx + 1, endIdx);
            }
            `
        }
    },
    heapSorting:{
        name:'heapSort',
        timeComplexity:"O(n^2)",
        spaceComplexity:"O(1)",
        code:{
            cpp:`
            class Solution {
                public:
                    void heapify(vector<int>& arr, int n, int i) {
                        int largest = i;
                        int left = 2 * i + 1;
                        int right = 2 * i + 2;

                        if (left < n && arr[left] > arr[largest])
                            largest = left;

                        if (right < n && arr[right] > arr[largest])
                            largest = right;

                        if (largest != i) {
                            swap(arr[i], arr[largest]);
                            heapify(arr, n, largest);
                        }
                    }

                    void heapSort(vector<int>& arr) {
                        int n = arr.size();

                        for (int i = n / 2 - 1; i >= 0; i--)
                            heapify(arr, n, i);

                        for (int i = n - 1; i > 0; i--) {
                            swap(arr[0], arr[i]);
                            heapify(arr, i, 0);
                        }
                    }
                };
            `,
           
            javaScript:`
            function heapify(arr, n, i) {
                let largest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if (left < n && arr[left] > arr[largest]) {
                    largest = left;
                }

                if (right < n && arr[right] > arr[largest]) {
                    largest = right;
                }

                if (largest !== i) {
                    [arr[i], arr[largest]] = [arr[largest], arr[i]];
                    heapify(arr, n, largest);
                }
            }

            function heapSort(arr) {
                let n = arr.length;

                for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                    heapify(arr, n, i);
                }

                for (let i = n - 1; i > 0; i--) {
                    [arr[0], arr[i]] = [arr[i], arr[0]];
                    heapify(arr, i, 0);
                }
            }
            `
        }
    },
    
}

export default AlgorithmsDetails