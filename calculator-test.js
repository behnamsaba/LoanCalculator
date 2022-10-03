it("should return a string according to js request", function() {
  const values = {
    amount:3000000,
    years:10,
    rate:7.71
  }
  
  
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);

});



it('should calculate the monthly rate correctly', function () {
  const values = {
    amount:20000,
    years:8,
    rate:6
  }
  expect(calculateMonthlyPayment(values)).toEqual("262.83");

});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount:2000000,
    years:30,
    rate:7.52,
  }

  expect(calculateMonthlyPayment(values)).toEqual("14011.69");

});
