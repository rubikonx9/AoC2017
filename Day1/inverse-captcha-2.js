#!/usr/bin/env node

const FS = require("fs");

FS.readFile("./input", { encoding: "utf-8" }, (error, data) => {
    if (error) {
        console.error(error);
        process.exit();
    }

    const digits = data.replace(/\n/g, "").split("").map(x => parseInt(x));
    const halfArraySize = digits.length / 2;

    const sum = digits.reduce((acc, value, idx, digits) => {
        const nextIdx = (idx + halfArraySize) % digits.length;

        if (value === digits[nextIdx]) {
            acc += value;
        }

        return acc;
    }, 0);

    console.log(sum);
});
