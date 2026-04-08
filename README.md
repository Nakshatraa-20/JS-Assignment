This repository contains solutions to all 6 problems from the Fundamentals of Web Design assignment. Each problem is solved using basic JavaScript with prompt() for input and alert() for output.
 
 Question 1 — Digit Gatekeeper
 
About the Problem
This program counts how many numbers in a given range satisfy conditions like divisibility, digit properties, and prime digit sum.

 How I Solved It
Took L, R, and K as input
Iterated through each number in the range
Checked:
Divisible by K
Does not contain digit 0
Sum of digits is prime
Counted valid numbers and displayed result

 Complexity
Time Complexity: O(N × d)
Space Complexity: O(1)

Sample Run
Input: L = 1, R = 50, K = 4 Output: 3

 Question 2 — Roll-Seed Lock
 
 About the Problem
Transforms a number 3 times based on even/odd rules and checks conditions on the final result.

 How I Solved It
Took N and seed as input
Applied transformation 3 times:
Even → n/2 + seed
Odd → 3n − seed
Checked if result is 3-digit and middle digit equals seed
Printed YES/NO with final value

 Complexity
Time Complexity: O(1)
Space Complexity: O(1)

 Sample Run
Input: N = 37, seed = 4 Output: YES, 947

 Question 3 — Mirror Corridor
 
 About the Problem
Finds the smallest X such that N + X is both a palindrome and divisible by K.

 How I Solved It
Took N and K as input
Tried values of X from 0 to 100000
Checked palindrome and divisibility
Printed first valid X or -1

 Complexity
Time Complexity: O(100000 × d)
Space Complexity: O(1)

 Sample Run
Input: N = 37, K = 6 Output: 29

 Question 4 — Fare Calculator
 
 About the Problem
Calculates ride fare based on distance, delay, and seed value with multiple conditions.

 How I Solved It
Took base, distance, minutesLate, seed
Calculated base fare
Applied conditions:
Added delay charge
Added 10% if distance > 10
Adjusted based on seed
Rounded up to nearest multiple of 5

 Complexity
Time Complexity: O(1)
Space Complexity: O(1)

 Sample Run
Input: base = 50, distance = 8, minutesLate = 20, seed = 3 Output: 125

 Question 5 — Skipping Numbers
 
 About the Problem
Finds the smallest m such that the sum (excluding multiples) reaches at least N.

 How I Solved It
Took N and seed
Iterated from 1 onward
Skipped numbers divisible by (seed + 2)
Kept adding until sum ≥ N
Printed m and sum

 Complexity
Time Complexity: O(m)
Space Complexity: O(1)

Sample Run
Input: N = 100, seed = 3 Output: 15 105

 Question 6 — Contest Score Judge
 
 About the Problem
Calculates a student’s score and determines pass or fail based on conditions.

 How I Solved It
Took a, b, c as input
Calculated score = 3a + b − 2c
Applied rules:
Set to 0 if negative
Subtract 10 if attempts > 50
Checked PASS/FAIL condition

 Complexity
Time Complexity: O(1)
Space Complexity: O(1)

 Sample Run
Input: a = 20, b = 15, c = 4 Output: 67, PASS

 How to Run
Open each JavaScript file in a browser
Enter inputs when prompted
View output in alert box

