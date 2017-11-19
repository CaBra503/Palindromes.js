//complete 11/18/2017 FreeCodeCamp Palindrome check.

function palindrome(str) {

    // RegExp pattern targeting all nonalphanumeric characters
    // Digits and  punctuations.
    var regex = /[\W_]g;
    // turning the parameter string into lowercase
    // then replacing the unwanted characters
  cleanString = str.toLowerCase().replace(regex, '');
    //assigning string to new string to run logic
    console.log(cleanString);
    //if the strings length equals 0 returns true is a palindrome
    if (cleanString.length === 0) {
        return true;

    }
    //if the first letter of the cleanString does not equal the last letter of cleanString return false.
    if (cleanString[0] !== cleanString[cleanString.length - 1]) {
        return false;
        console.log(cleanString);
    }
    return palindrome(cleanString.slice(1, cleanString.length - 1))
}

console.log(palindrome('mother'));
console.log(palindrome('a man, a plan, a dam, a cam'));
console.log(palindrome('eye'));
console.log(palindrome('racecar'))

/* Testing a regexp example.
function f2c(s1) {
  //initializing pattern.
    var test = /(\d+(\.\d*)?)F\b/g
replace function with regexp and function match.
    var s2 = s1.replace(test,
        function($0, $1, $2) {
            return ((($1 - 32) * 5 / 9) + "C")
        }
    )
    return s2
}
console.log(f2c("water Freezes at 32F and boils at 212F.));
*/