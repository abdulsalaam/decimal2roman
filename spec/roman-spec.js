//!javascript
// spec/roman-spec.js


describe("decimal-to-roman-convert", () => {
 let roman = require("../roman");
  it("should 1990 equal to MCMXC", () => {
    let romanNumber = roman.convert(1990);
    expect(romanNumber == 'MCMXC').toBe(true);
  });
  
  it("should 2008 equal to MMVIII", () => {
    let romanNumber = roman.convert(2008);
    expect(romanNumber == 'MMVIII').toBe(true);
  });
  
  
  it("should 99  equal to XCIX", () => {
    let romanNumber = roman.convert(99);
    expect(romanNumber == 'XCIX').toBe(true);
  });
  
  it("should 47  equal to XLVII", () => {
    let romanNumber = roman.convert(47);
    expect(romanNumber == 'XLVII').toBe(true);
  });
  
  
  it("should 3999 equal to MMMCMXCIX", () => {
    let romanNumber = roman.convert(3999);
    expect(romanNumber == 'MMMCMXCIX').toBe(true);
  });
  
}); 




