/* 
- JavaScript stores dates as number of milliseconds since January 01, 1970.
# Ways of Creating Date Objects :
    1. new Date()
    2. new Date(milliseconds)
    3. new Date(date string)
        e.g : new Date("2023-03-28")
    4. new Date(year,month,day,hours,minutes,seconds,ms)
        JavaScript counts months from 0 (January) to 11 (December).
*/

let dateObj = new Date();
// let dateObj = new Date("2004-01-01");
// let dateObj = new Date(10000);
// let dateObj = new Date(Year, Month, date, H, M, s, ms);
// let dateObj = new Date(2025, 1, 1, 1, 1, 1, 1);
//  Jan --> 0, Dec --> 11
//  sunady --> 0, sat --> 6

console.log(dateObj) // Sun Jul 07 2024 09:37:10 GMT+0530 (India Standard Time)
console.log(typeof (dateObj)) // object --> Abstraction

/* 
# Date object Methods :
    1. toString()
    2. toLocalString(locales, options)
    3. toDateString()
    4. toLocaleDateString()
    5. toTimeString()
    6. toLocaleTimeString()

* Action : converting date object into string in more readable formate &   able to configure it
* Return : string

# configurable object :
* local aurguments :
    - `"en-US"`: English (United States)
    - `"en-GB"`: English (United Kingdom)
    - `"fr-FR"`: French (France)
    - `"de-DE"`: German (Germany)
    - `"zh-CN"`: Chinese (Simplified, China)

* optional aurguments object values:
    - Date Options:
        - `weekday`: `"long"`, `"short"`, `"narrow"`
        - `year`: `"numeric"`, `"2-digit"`
        - `month`: `"numeric"`, `"2-digit"`, `"long"`, `"short"`, `"narrow"`
        - `day`: `"numeric"`, `"2-digit"`
    - Time Options:
        - `hour`: `"numeric"`, `"2-digit"`
        - `minute`: `"numeric"`, `"2-digit"`
        - `second`: `"numeric"`, `"2-digit"`
        - `timeZoneName`: `"short"`, `"long"`
    - Other Options:
        - `timeZone`: `"UTC"` or an IANA time zone name like `"America/New_York"`
        - `hour12`: `true` for 12-hour time (AM/PM), `false` for 24-hour time

  toLocalString('default', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' });
  
  toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });
*/

// Methods of date object :
// let strObj = dateObj.toString()
// console.log(strObj, typeof(strObj))

// syntax --> dateObject.toLocaleString(local, options)
// local --> local lang
// option --> { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' }

// let strObj = dateObj.toLocaleString()
// strObj = dateObj.toLocaleString("default", {year: 'numeric', day: '2-digit', month: "long"})
// console.log(strObj, typeof(strObj))

// console.log(dateObj.toDateString())
// console.log(dateObj.toLocaleDateString())
// console.log(dateObj.toLocaleDateString("default", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))

// console.log(dateObj.toTimeString())
// console.log(dateObj.toLocaleTimeString())
// console.log(dateObj.toLocaleTimeString("default", { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }))

/* 
# Get Methods ==>
    1. getFullYear()	    Get year as a four digit number (yyyy)
    2. getMonth()	    Get month as a number (0-11)
    3. getDate()	    Get day as a number (1-31)
    4. getDay()	    Get weekday as a number (0-6)
    5. getHours()	    Get hour (0-23)
    6. getMinutes()	    Get minute (0-59)
    7. getSeconds()	    Get second (0-59)
    8. getMilliseconds()  Get millisecond (0-999)

   * Action: as per the method collecting that portion from date object
   * Return: number
*/

console.log(dateObj.getFullYear())
console.log(dateObj.getMonth() + 1)
console.log(dateObj.getDate())
console.log(dateObj.getDay())
console.log(dateObj.getHours())
console.log(dateObj.getMinutes())
console.log(dateObj.getSeconds())
console.log(dateObj.getMilliseconds())

