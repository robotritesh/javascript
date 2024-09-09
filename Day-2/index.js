function leapYear(M, N) {
    // Create an array to store the leap years
    let leapYears = [];
  
    // Loop through the range from M to N
    for (let year = M; year <= N; year++) {
      // Check if the current year is a leap year
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears.push(year); // Add the leap year to the array
      }
    }
  
    // Print all the leap years separated by spaces
    console.log(leapYears.join(' '));
  }
  
  // Sample Input 1
  leapYear(2000, 2025); // Output: 2000 2004 2008 2012 2016 2020 2024
  