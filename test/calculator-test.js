var Calculator = require("../src/scripts/calculator")
var assert = require("assert")

describe("example", function () {
  var calculator

  beforeEach(function () {
    calculator = new Calculator()
  })

  afterEach(function () {
    calculator = null
  })

  it("adds numbers", function () {
    assert(4 === calculator.add(1,3))
  })
})
