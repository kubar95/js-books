export const inputNumberValidator = (inputValue, maxValue) => {
    if (isNaN(inputValue) || inputValue > maxValue)
        inputValue = inputValue.slice(0, -1)
    return inputValue
}


