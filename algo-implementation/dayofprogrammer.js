//QUICK PROCESSING
function dayOfProgrammer(year) {
    if (year == 1918)
        return "26.09.1918";
    else if (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) & (year%100 != 0))))
        return "12.09." + year;
    else
        return "13.09." + year;
}

console.log(dayOfProgrammer(2016))

//LONG PROCESSING BUT WITH MORE LOGIC
/*
Step:
1. Object month and days
2. Find values at n=256th
3. Find the nearest sum before 256th for month*/