import { inputNumberValidator } from '../src/js/validation'
import { expect } from 'chai'
describe("Testing inputValidator", () => {
  it("should return 2 when input is 2", () => {
    let result = inputNumberValidator('2', 9999)
    expect(result).to.eql('2')
  })
  it("should return 2222 when input is 22222", () => {
    let result = inputNumberValidator('22222',9999)
    expect(result).to.eql('2222')
  })
  it("should return empty string when input is s", () => {
    let result = inputNumberValidator('s', 9999)
    expect(result).to.eql('')
  })
  it("should return 22 when input is 22s", () => {
    let result = inputNumberValidator('22s', 9999)
    expect(result).to.eql('22')
  })
})