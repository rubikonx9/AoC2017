#!/usr/bin/env node

const FS = require("fs");

FS.readFile("./input", { encoding: "utf-8" }, (error, data) => {
    if (error) {
        console.error(error);
        process.exit();
    }

    const digits = data.replace(/\n/g, "").split("").map(x => parseInt(x));

    let sum = digits.reduce((acc, value, idx, digits) => {
        if (value === digits[idx + 1]) {
            acc += value;
        }

        return acc;
    }, 0);

    if (digits[0] === digits[digits.length - 1]) {
        sum += digits[0];
    }

    console.log(sum);
});
