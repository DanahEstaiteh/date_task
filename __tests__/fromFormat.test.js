const fromFormat = require('../fromFormat');
const { TestScheduler } = require('jest');
describe("fromFormat function test", () => {
    test("check MM/dd/yy format", () => {
        expect(fromFormat("06/01/09", "M/dd/yy")).toBe('Mon Jun 01 2009 00:00:00 GMT+0300 (Eastern European Summer Time)');
    })
    test("check dd/MM/yy format", () => {
        expect(fromFormat("11/12/09", "d/MM/yy")).toBe('Fri Dec 11 2009 00:00:00 GMT+0200 (Eastern European Standard Time)');
    })
    test("check d/MM/y format", () => {
        expect(fromFormat("11/12/2009", "d/MM/y")).toBe('Fri Dec 11 2009 00:00:00 GMT+0200 (Eastern European Standard Time)');
    })
    test("check d/MMM/y format", () => {
        expect(fromFormat("11/Dec/2009", "d/MMM/y")).toBe('Fri Dec 11 2009 00:00:00 GMT+0200 (Eastern European Standard Time)');
    })
    test("check d/MMMM/y format", () => {
        expect(fromFormat("11/December/2009", "d/MMMM/y")).toBe('Fri Dec 11 2009 00:00:00 GMT+0200 (Eastern European Standard Time)');
    })
})