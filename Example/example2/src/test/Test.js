const Test = { value: "1" };
export const testTwo = { value: "2" };
export const sumTest = () => {
    console.log(Test.value + ":" + testTwo.value);
    return (Number(Test.value) + Number(testTwo.value));
}
export default Test;
