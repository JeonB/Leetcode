class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return min;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    _bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

class KthLargest {
    constructor(k, nums) {
        this.minHeap = new MinHeap();
        this.k = k;

        // 초기 nums 배열의 모든 요소를 힙에 추가합니다.
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        // 새로운 값을 힙에 추가합니다.
        this.minHeap.insert(val);

        // 힙의 크기가 k보다 크면, 최소값을 제거하여 크기를 유지합니다.
        if (this.minHeap.size() > this.k) {
            this.minHeap.extractMin();
        }

        // 현재 힙의 루트가 k번째 큰 요소입니다.
        return this.minHeap.peek();
    }
}

