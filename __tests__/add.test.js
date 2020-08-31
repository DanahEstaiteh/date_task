const add = require('../add');
describe("add function test", () => {
    describe("check add function with tree argument", () => {
        test("test adding three hours to 8/13/2020", () => {
            expect(add(new Date("8/13/2020"), 3, "h")).toBe("Thu Aug 13 2020 03:00:00 GMT+0300 (Eastern European Summer Time)");
        })
        test("test adding two days to 07/09/2017", () => {
            expect(add(new Date("07/09/2017"), 2, "d")).toBe("Tue Jul 11 2017 00:00:00 GMT+0300 (Eastern European Summer Time)");
        })
        describe("check add function with three argument capital", () => {
            test("test adding three hours to 8/13/2020", () => {
                expect(add(new Date("8/13/2020"), 3, "H")).toBe("Thu Aug 13 2020 03:00:00 GMT+0300 (Eastern European Summer Time)");
            })
            test("test adding two days to 07/09/2017", () => {
                expect(add(new Date("07/09/2017"), 2, "D")).toBe("Tue Jul 11 2017 00:00:00 GMT+0300 (Eastern European Summer Time)");
            })
        });
    });
    describe("check add function with two argument", () => {
        test("test adding four hours to 11/25/2019", () => {
            expect(add(new Date("11/25/2019"), "4h")).toBe("Wed Nov 27 2019 00:00:00 GMT+0200 (Eastern European Standard Time)");
        })
        test("test adding 7 days to 6/9/2019", () => {
            expect(add(new Date("6/9/2019"), "7d")).toBe("Tue Jun 11 2019 00:00:00 GMT+0300 (Eastern European Summer Time)");
        })
        describe("check add function with two argument capital", () => {
            test("test adding four hours to 11/25/2019", () => {
                expect(add(new Date("11/25/2019"), "4H")).toBe("Wed Nov 27 2019 00:00:00 GMT+0200 (Eastern European Standard Time)");
            })
            test("test adding 7 days to 6/9/2019", () => {
                expect(add(new Date("6/9/2019"), "7D")).toBe("Tue Jun 11 2019 00:00:00 GMT+0300 (Eastern European Summer Time)");
            })
        });
    });
})
