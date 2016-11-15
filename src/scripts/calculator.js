class Calculator {
  add(a,b){
    return a + b
  }
  subtract(a, b) {
    return this.add(a -b)
  }
  multiply(a, b){
    return a * b
  }
  divide(a, b){
    if (b == 0){
      return NaN
    }
    return a/b
  }
}

module.exports = Calculator
