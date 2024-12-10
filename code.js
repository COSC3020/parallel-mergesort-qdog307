
async function msort(x, lo, hi, tmp) {
    if (lo >= hi) return; // Base case: single element

    const mid = Math.floor((lo + hi) / 2);

    // Recursively sort left and right halves in parallel
    const leftHalf = msort(x, lo, mid, tmp);
    const rightHalf = msort(x, mid + 1, hi, tmp);

    // This allows the two halves to be sorted in parallel
    await Promise.all([leftHalf, rightHalf]);

    // Merge the two halves 
    merge(x, lo, mid, hi, tmp);
}

// this allows for the wait until promise is resolved  
async function mergesort(x) {
    const tmp = new Array(x.length); 
    await msort(x, 0, x.length - 1, tmp);
}

// Merge function taken from class slides  
function merge(x, lo, mid, hi, tmp) {
    let a = lo, b = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] <= x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }

    for (let k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}

module.exports = { mergesort };
