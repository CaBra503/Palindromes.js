//complete 11/18/2017 FreeCodeCamp Palindrome check.

function palindromesChck(str) {

    // RegExp pattern targeting all nonalphanumeric characters
    // Digits and  punctuations.
    var regex = /\W\d\s/,
        [g];
    // turning the parameter string into lowercase
    // then replacing the unwanted characters
    str.toLowerCase();
    str.replace(regex, '');
    //assigning string to new string to run logic
    cleanString = str;
    //if the strings length equals 0 returns true is a palindrome
    if (cleanString.length === 0) {
        return true

    }
    //if the first letter of the cleanString does not equal the last letter of cleanString return false.
    if (cleanString[0] !== cleanString[cleanString.length - 1]) {
        return false
        console.log(cleanString);
    }
    return palindromesChck(cleanString.slice(1, cleanString.length - 1))
}

console.log(palindromesChck('rac car'));

//complete 11/18/2017
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