module.exports = function toReadable(number) {
    const onesArray = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teensArray = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensArray = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundredsArray = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    let result = "";

    if (number === 0) {
        return "zero";
    }

    if (number >= 100 && number <= 999) {
        let threeNumers = `${number}`.split("")[0];
        result = hundredsArray[threeNumers - 1] + " ";
        number = number - threeNumers * 100;
    }

    if (number > 0 && number <= 9) {
        result = result + onesArray[number];
    }

    if (number >= 10 && number < 20) {
        result = result + teensArray[number - 10];
    }

    if (number >= 20 && number <= 99) {
        let twoNumbers = `${number}`.split("");
        return `${result}${tensArray[twoNumbers[0] - 2]} ${onesArray[twoNumbers[1]]}`.trim();
    }

    return result.trim();
};
