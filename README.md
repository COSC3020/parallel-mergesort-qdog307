# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The worst case of the recursive parallel-mergesort is $\Theta$(nlogn), this comes from the O(n) work done to merge the arrays and the array being divided is $\log_2(n)$ so these combined is $\Theta$(nlogn). 

## Soruces 
For this I refrenced both slides on mergesort where I took the code that was used in class.From there I built on the idea of the parallel slides. With the idea of mergsort breaking into halves I thought that would be a good way but needed to figure out a way to wait. I used the recursive version and not the iterative. From googling and the asynchornous functions that I attempted, this is where I got the async function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function. For the test code I had chatgpt generate it and I specified I wanted those distinct cases to make sure can see how it works. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
