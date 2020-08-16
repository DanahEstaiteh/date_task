const date2 =require('../date2');
test("check MMMM-D/YYYY format", () => {
    expect(date2(new Date(),"MMMM-D/YYYY")).toBe("August-13/2020");
})
test("check MMM-D/YYYY format", () => {
    expect(date2(new Date(),"MMM-D/YYYY")).toBe("Aug-13/2020");
})
test("check MM-D/YYYY format", () => {
    expect(date2(new Date(),"MM-D/YYYY")).toBe("08-13/2020");
})
test("check M-D/YYYY format", () => {
    expect(date2(new Date(),"M-D/YYYY")).toBe("8-13/2020");
})
test("check MMMM-D/YY format", () => {
    expect(date2(new Date(),"MMMM-D/YY")).toBe("August-13/20");
})
test("check MMM-D/YY format", () => {
    expect(date2(new Date(),"MMM-D/YY")).toBe("Aug-13/20");
})
test("check MM-D/YY format", () => {
    expect(date2(new Date(),"MM-D/YY")).toBe("08-13/20");
})
test("check M-D/YY format", () => {
    expect(date2(new Date(),"M-D/YY")).toBe("8-13/20");
})
test("check MMMM-DD/YYYY format", () => {
    expect(date2(new Date(),"MMMM-DD/YYYY")).toBe("August-13/2020");
})
test("check MMM-DD/YYYY format", () => {
    expect(date2(new Date(),"MMM-DD/YYYY")).toBe("Aug-13/2020");
})
test("check MM-DD/YYYY format", () => {
    expect(date2(new Date(),"MM-DD/YYYY")).toBe("08-13/2020");
})
test("check M-DD/YYYY format", () => {
    expect(date2(new Date(),"M-DD/YYYY")).toBe("8-13/2020");
})
test("check dd/mm/yy format", () => {
    expect(date2(new Date(),"dd/mm/yy")).toBe("13/08/20");
})
test("check d/mm/yy format", () => {
    expect(date2(new Date(),"d/mm/yy")).toBe("13/08/20");
})
test("check dd/m/yy format", () => {
    expect(date2(new Date(),"dd/m/yy")).toBe("13/8/20");
})
test("check d/m/yy format", () => {
    expect(date2(new Date(),"d/m/yy")).toBe("13/8/20");
})
test("check d/m/y format", () => {
    expect(date2(new Date(),"d/m/y")).toBe("13/8/2020");
})
test("check dd/m/y format", () => {
    expect(date2(new Date(),"dd/m/y")).toBe("13/8/2020");
})
test("check dd/m/yy format", () => {
    expect(date2(new Date(),"d/m/yy")).toBe("13/8/20");
})
test("check dd/m/yyyy format", () => {
    expect(date2(new Date(),"d/m/yyyy")).toBe("13/8/2020");
})
test("check dd/mm/y format", () => {
    expect(date2(new Date(),"d/mm/y")).toBe("13/08/2020");
})
test("check dd/mm/yy format", () => {
    expect(date2(new Date(),"d/mm/yy")).toBe("13/08/20");
})
test("check dd/mm/yyyy format", () => {
    expect(date2(new Date(),"d/mm/yyyy")).toBe("13/08/2020");
})
test("check dd/mmm/y format", () => {
    expect(date2(new Date(),"d/mmm/y")).toBe("13/Aug/2020");
})
test("check dd/mmm/yy format", () => {
    expect(date2(new Date(),"d/mmm/yy")).toBe("13/Aug/20");
})
test("check dd/mmm/yyyy format", () => {
    expect(date2(new Date(),"d/mmm/yyyy")).toBe("13/Aug/2020");
})
test("check dd/mmmm/y format", () => {
    expect(date2(new Date(),"d/mmmm/y")).toBe("13/August/2020");
})
test("check dd/mmmm/yy format", () => {
    expect(date2(new Date(),"d/mmmm/yy")).toBe("13/August/20");
})
test("check dd/mmmm/yyyy format", () => {
    expect(date2(new Date(),"d/mmmm/yyyy")).toBe("13/August/2020");
})
test("check dd-mmmm-yyyy format", () => {
    expect(date2(new Date(),"d-mmmm-yyyy")).toBe("13-August-2020");
})
test("check d/m/yyyy format", () => {
    expect(date2(new Date(),"d/m/yyyy")).toBe("13/8/2020");
})
test("check d/mm/yyyy format", () => {
    expect(date2(new Date(),"d/mm/yyyy")).toBe("13/08/2020");
})
test("check d/mmm/yyyy format", () => {
    expect(date2(new Date(),"d/mmm/yyyy")).toBe("13/Aug/2020");
})
test("check d/mmmm/yyyy format", () => {
    expect(date2(new Date(),"d/mmmm/yyyy")).toBe("13/August/2020");
})
test("check dd-mmmm-yyyy format", () => {
    expect(date2(new Date(),"dd-mmmm-yyyy")).toBe("13-August-2020");
})
test("check yyyy-mm-dd format", () => {
    expect(date2(new Date(),"yyyy-mm-dd")).toBe("2020-08-13");
})
test("check yy-mm-dd format", () => {
    expect(date2(new Date(),"yy-mm-dd")).toBe("20-08-13");
})
test("check yy-mm-d format", () => {
    expect(date2(new Date(),"yy-mm-d")).toBe("20-08-13");
})
test("check yy-m-dd format", () => {
    expect(date2(new Date(),"yy-m-dd")).toBe("20-8-13");
})
test("check yy-m-d format", () => {
    expect(date2(new Date(),"yy-m-d")).toBe("20-8-13");
})
test("check yy-mmm-dd format", () => {
    expect(date2(new Date(),"yy-mmm-dd")).toBe("20-Aug-13");
})
test("check yy-mmm-d format", () => {
    expect(date2(new Date(),"yy-mmm-d")).toBe("20-Aug-13");
})
test("check yy-mmmm-dd format", () => {
    expect(date2(new Date(),"yy-mmmm-dd")).toBe("20-August-13");
})
test("check yy-mmmm-d format", () => {
    expect(date2(new Date(),"yy-mmmm-d")).toBe("20-August-13");
})
test("check yyyy-m-dd format", () => {
    expect(date2(new Date(),"yyyy-m-dd")).toBe("2020-8-13");
})
test("check yyyy-m-d format", () => {
    expect(date2(new Date(),"yyyy-m-d")).toBe("2020-8-13");
})
test("check yyyy-mmm-dd format", () => {
    expect(date2(new Date(),"yyyy-mmm-dd")).toBe("2020-Aug-13");
})
test("check yyyy-mmm-d format", () => {
    expect(date2(new Date(),"yyyy-mmm-d")).toBe("2020-Aug-13");
})
test("check yyyy-mmmm-dd format", () => {
    expect(date2(new Date(),"yyyy-mmmm-dd")).toBe("2020-August-13");
})
test("check yyyy-mmmm-d format", () => {
    expect(date2(new Date(),"yyyy-mmmm-d")).toBe("2020-August-13");
})