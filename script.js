const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumb(event.target.value)
		updateLayar(currNumb)
	})
})

const layarKalkulator = document.querySelector(".layar")
const updateLayar = (number) => {
	layarKalkulator.value = number
}

let prevNumb = ''
let currNumb = '0'
let operator = ''

const inputNumber = (number) => {
	if (currNumb === '0') {
		currNumb = number
	} else {
		currNumb += number
	}
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
  if (calculationOperator === '') {
  	prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
		  result = parseFloat(prevNumber) + parseFloat(currentNumber)
		  break
		case "-":
		  result = prevNumber - currentNumber
		  break
		case "*":
		  result = prevNumber * currentNumber
		  break
		case "/":
		  result = prevNumber / currentNumber
		  break
		default:
		  break
	}
	currentNumber = result
	calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	ClearAll()
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
	  return
	}
	currentNumber += dot
}
