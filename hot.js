const numders = [1, 2, 3, 4, 5]

function createAddNumber(numder) {
  return function (arr) {
    return arr.map(item => item += numder)
  }
}

const addOne = createAddNumber(1)
const addFive = createAddNumber(5)

console.log(addOne(numders))
console.log(addFive(numders))