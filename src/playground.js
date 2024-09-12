export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map((num) => {
  return num * num
})

console.log(squares)
