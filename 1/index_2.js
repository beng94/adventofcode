const getNextIndex = (i, length) => {
    const diff = length / 2;
    const potentialId = i + diff;
    return potentialId < length ? potentialId : potentialId - length;
};

const number = process.argv[2];

let sum = 0;
[...number].forEach((digit, i) => {
    const a = digit;
    const bId = getNextIndex(i, number.length);
    const b = number[bId];

    if(a == b) sum += Number(a);
});


console.log(sum);
