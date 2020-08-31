const format = require('../format');
describe("Format function test", () => {
    test("check MMMM-D/YYYY format", () => {
        expect(format(new Date(), "MMMM-D/YYYY")).toBe("August-31/2020");
    })
    test("check MMM-D/YYYY format", () => {
        expect(format(new Date(), "MMM-D/YYYY")).toBe("Aug-31/2020");
    })
    test("check MM-D/YYYY format", () => {
        expect(format(new Date(), "MM-D/YYYY")).toBe("08-31/2020");
    })
    test("check M-D/YYYY format", () => {
        expect(format(new Date(), "M-D/YYYY")).toBe("8-31/2020");
    })
    test("check MMMM-D/YY format", () => {
        expect(format(new Date(), "MMMM-D/YY")).toBe("August-31/20");
    })
    test("check MMM-D/YY format", () => {
        expect(format(new Date(), "MMM-D/YY")).toBe("Aug-31/20");
    })
    test("check MM-D/YY format", () => {
        expect(format(new Date(), "MM-D/YY")).toBe("08-31/20");
    })
    test("check M-D/YY format", () => {
        expect(format(new Date(), "M-D/YY")).toBe("8-31/20");
    })
    test("check MMMM-DD/YYYY format", () => {
        expect(format(new Date(), "MMMM-DD/YYYY")).toBe("August-31/2020");
    })
    test("check MMM-DD/YYYY format", () => {
        expect(format(new Date(), "MMM-DD/YYYY")).toBe("Aug-31/2020");
    })
    test("check MM-DD/YYYY format", () => {
        expect(format(new Date(), "MM-DD/YYYY")).toBe("08-31/2020");
    })
    test("check M-DD/YYYY format", () => {
        expect(format(new Date(), "M-DD/YYYY")).toBe("8-31/2020");
    })
    test("check dd/mm/yy format", () => {
        expect(format(new Date(), "dd/mm/yy")).toBe("31/08/20");
    })
    test("check d/mm/yy format", () => {
        expect(format(new Date(), "d/mm/yy")).toBe("31/08/20");
    })
    test("check dd/m/yy format", () => {
        expect(format(new Date(), "dd/m/yy")).toBe("31/8/20");
    })
    test("check d/m/yy format", () => {
        expect(format(new Date(), "d/m/yy")).toBe("31/8/20");
    })
    test("check d/m/y format", () => {
        expect(format(new Date(), "d/m/y")).toBe("31/8/2020");
    })
    test("check dd/m/y format", () => {
        expect(format(new Date(), "dd/m/y")).toBe("31/8/2020");
    })
    test("check dd/m/yy format", () => {
        expect(format(new Date(), "d/m/yy")).toBe("31/8/20");
    })
    test("check dd/m/yyyy format", () => {
        expect(format(new Date(), "d/m/yyyy")).toBe("31/8/2020");
    })
    test("check dd/mm/y format", () => {
        expect(format(new Date(), "d/mm/y")).toBe("31/08/2020");
    })
    test("check dd/mm/yy format", () => {
        expect(format(new Date(), "d/mm/yy")).toBe("31/08/20");
    })
    test("check dd/mm/yyyy format", () => {
        expect(format(new Date(), "d/mm/yyyy")).toBe("31/08/2020");
    })
    test("check dd/mmm/y format", () => {
        expect(format(new Date(), "d/mmm/y")).toBe("31/Aug/2020");
    })
    test("check dd/mmm/yy format", () => {
        expect(format(new Date(), "d/mmm/yy")).toBe("31/Aug/20");
    })
    test("check dd/mmm/yyyy format", () => {
        expect(format(new Date(), "d/mmm/yyyy")).toBe("31/Aug/2020");
    })
    test("check dd/mmmm/y format", () => {
        expect(format(new Date(), "d/mmmm/y")).toBe("31/August/2020");
    })
    test("check dd/mmmm/yy format", () => {
        expect(format(new Date(), "d/mmmm/yy")).toBe("31/August/20");
    })
    test("check dd/mmmm/yyyy format", () => {
        expect(format(new Date(), "d/mmmm/yyyy")).toBe("31/August/2020");
    })
    test("check dd-mmmm-yyyy format", () => {
        expect(format(new Date(), "d-mmmm-yyyy")).toBe("31-August-2020");
    })
    test("check d/m/yyyy format", () => {
        expect(format(new Date(), "d/m/yyyy")).toBe("31/8/2020");
    })
    test("check d/mm/yyyy format", () => {
        expect(format(new Date(), "d/mm/yyyy")).toBe("31/08/2020");
    })
    test("check d/mmm/yyyy format", () => {
        expect(format(new Date(), "d/mmm/yyyy")).toBe("31/Aug/2020");
    })
    test("check d/mmmm/yyyy format", () => {
        expect(format(new Date(), "d/mmmm/yyyy")).toBe("31/August/2020");
    })
    test("check dd-mmmm-yyyy format", () => {
        expect(format(new Date(), "dd-mmmm-yyyy")).toBe("31-August-2020");
    })
    test("check yyyy-mm-dd format", () => {
        expect(format(new Date(), "yyyy-mm-dd")).toBe("2020-08-31");
    })
    test("check yy-mm-dd format", () => {
        expect(format(new Date(), "yy-mm-dd")).toBe("20-08-31");
    })
    test("check yy-mm-d format", () => {
        expect(format(new Date(), "yy-mm-d")).toBe("20-08-31");
    })
    test("check yy-m-dd format", () => {
        expect(format(new Date(), "yy-m-dd")).toBe("20-8-31");
    })
    test("check yy-m-d format", () => {
        expect(format(new Date(), "yy-m-d")).toBe("20-8-31");
    })
    test("check yy-mmm-dd format", () => {
        expect(format(new Date(), "yy-mmm-dd")).toBe("20-Aug-31");
    })
    test("check yy-mmm-d format", () => {
        expect(format(new Date(), "yy-mmm-d")).toBe("20-Aug-31");
    })
    test("check yy-mmmm-dd format", () => {
        expect(format(new Date(), "yy-mmmm-dd")).toBe("20-August-31");
    })
    test("check yy-mmmm-d format", () => {
        expect(format(new Date(), "yy-mmmm-d")).toBe("20-August-31");
    })
    test("check yyyy-m-dd format", () => {
        expect(format(new Date(), "yyyy-m-dd")).toBe("2020-8-31");
    })
    test("check yyyy-m-d format", () => {
        expect(format(new Date(), "yyyy-m-d")).toBe("2020-8-31");
    })
    test("check yyyy-mmm-dd format", () => {
        expect(format(new Date(), "yyyy-mmm-dd")).toBe("2020-Aug-31");
    })
    test("check yyyy-mmm-d format", () => {
        expect(format(new Date(), "yyyy-mmm-d")).toBe("2020-Aug-31");
    })
    test("check yyyy-mmmm-dd format", () => {
        expect(format(new Date(), "yyyy-mmmm-dd")).toBe("2020-August-31");
    })
    test("check yyyy-mmmm-d format", () => {
        expect(format(new Date(), "yyyy-mmmm-d")).toBe("2020-August-31");
    });
})