
function recursive(base, exponent) {

if (exponent == 0) {

    return 1;
}
else {

    return base * recursive(base, exponent -1)

}


}
console.log(recursive(2, 7))
