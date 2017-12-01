const number = process.argv[2];

let sum = 0;
[...number].forEach((digit, i) => {
    const a = digit;
    const b = number.length > (i + 1) ? number[i + 1] : digit[0];

    if(a == b) sum += Number(a);
});

console.log(sum);
