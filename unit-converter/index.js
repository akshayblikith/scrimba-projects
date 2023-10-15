/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;
const input = document.getElementById("input-number");
const resultLength = document.getElementById("result-length");
const resultVolume = document.getElementById("result-volume");
const resultMass = document.getElementById("result-mass");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function () {
    resultLength.textContent = convert(meter, "meters", "feet");
    resultVolume.textContent = convert(liter, "liters", "gallons");
    resultMass.textContent = convert(kilogram, "kilos", "pounds");
});

function convert(propertyOne, unitOne, unitTwo) {
    return `
    ${input.value} ${unitOne} = ${(input.value * propertyOne).toFixed(
        3
    )} ${unitTwo} | ${input.value} ${unitTwo} = ${(
        input.value / propertyOne
    ).toFixed(3)} ${unitOne}
`;
}
