const assert = require('assert');
const { mergesort } = require('./code');

(async () => {
    console.log('Running tests for fully parallel mergesort...');

    // Test 1: Unsorted array
    const array1 = [38, 27, 43, 3, 9, 82, 10];
    await mergesort(array1);
    assert.deepStrictEqual(array1, [3, 9, 10, 27, 38, 43, 82]);
    console.log('Test 1 passed.');

    // Test 2: Empty array
    const array2 = [];
    await mergesort(array2);
    assert.deepStrictEqual(array2, []);
    console.log('Test 2 passed.');

    // Test 3: Single element array
    const array3 = [42];
    await mergesort(array3);
    assert.deepStrictEqual(array3, [42]);
    console.log('Test 3 passed.');

    // Test 4: Array with duplicate elements
    const array4 = [5, 3, 8, 5, 3, 8];
    await mergesort(array4);
    assert.deepStrictEqual(array4, [3, 3, 5, 5, 8, 8]);
    console.log('Test 4 passed.');

    // Test 5: Large array
    const array5 = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));
    const expected = [...array5].sort((a, b) => a - b);
    await mergesort(array5);
    assert.deepStrictEqual(array5, expected);
    console.log('Test 5 passed.');

    console.log('All tests passed!');
})();
