import { compare } from '../src/js/sortItemsList'
import { expect } from 'chai'


describe("Testing compare - pages", () => {
    it("should be above 0 when comparing 200 and 10", () => {
        let result = compare.pages('200', '10')
        expect(result).to.be.above(0)
    })
    it("should be below 0 when comparing 2 and 100", () => {
        let result = compare.pages('2', '100')
        expect(result).to.be.below(0)
    })
    it("should be equal to 0 when comparing 10 and 10", () => {
        let result = compare.pages('10', '10')
        expect(result).to.be.equal(0)
    })
})
describe("Testing compare - date", () => {
    it("should be above 0 when comparing 01/2008 and 12/2007", () => {
        let result = compare.date('01/2008', '12/2007')
        expect(result).to.be.above(0)
    })
    it("should be below 0 when comparing 12/1997 and 05/2005", () => {
        let result = compare.date('12/1997', '05/2005')
        expect(result).to.be.below(0)
    })
    it("should be equal to 0 when comparing 01/2005 and 01/2005", () => {
        let result = compare.date('01/2005', '01/2005')
        expect(result).to.be.equal(0)
    })
})
describe("Testing compare - name", () => {
    it("should be above 0 when comparing by A Flanagan and By Douglas Crockford", () => {
        let result = compare.name('by A Flanagan', 'By Douglas Crockford')
        expect(result).to.be.above(0)
    })
    it("should be below 0 when comparing by Zac Anderson and by Andy Miller", () => {
        let result = compare.name('by Zac Anderson', 'by Andy Miller')
        expect(result).to.be.below(0)
    })
    it("should be equal to 0 when comparing By Angus Young and by Malcolm Young", () => {
        let result = compare.name('By Angus Young', 'by Malcolm Young')
        expect(result).to.be.equal(0)
    })
})