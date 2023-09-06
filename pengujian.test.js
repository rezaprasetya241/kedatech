const sortArr = require("./soal/soal1");
const maxSum = require("./soal/soal2");
const nestedObject = require("./soal/soal3");

const arr = [1, 2, 4, 3, 5, 3, 2, 1];
const arr2 = [100, 200, 300, 400];
const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

test("Unit test", () => {
  expect(sortArr(arr)).toStrictEqual(arr.sort());
  expect(maxSum(arr2, 2)).toBe(700);
  expect(nestedObject(input1)).toBe(6);
});
