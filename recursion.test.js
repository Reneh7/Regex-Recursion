function fibonacci(n)
{
    if(n == 0)
    { 
        return 0;
    }else if (n === 1) 
    {
        return 1;
    }
    else
    {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
describe("Test fibonacci", () => {
  test("It should implement fibonacci series logic", () => {
      expect(fibonacci(0)).toStrictEqual(0);
      expect(fibonacci(1)).toStrictEqual(1);
      expect(fibonacci(2)).toStrictEqual(1);
      expect(fibonacci(3)).toStrictEqual(2);
      expect(fibonacci(4)).toStrictEqual(3);
  })
});

function pow(x, n) 
{
    if( n== 0) return 1;

    else
    {
       return x * pow(x,n-1); 
    }
}
describe("Test pow", () => {
  test("It should work as Math.pow(x,n)", () => {
      expect(pow(10, 2)).toStrictEqual(100);
      expect(pow(10, 0)).toStrictEqual(1);
      expect(pow(0, 0)).toStrictEqual(1);
  })
});

function division(number, dividedBy) 
  {
    if (number < dividedBy) return 0;
    else if (number== dividedBy) return 1
    else {
      return 1 + division(number - dividedBy, dividedBy);
    }
  }

  describe("Test division", () => {
    test("Return the division result", () => {
        expect(division(10, 2)).toStrictEqual(5);
    })
});