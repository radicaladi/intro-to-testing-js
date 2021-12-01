// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise #1 Take your first "Test Drive" by writing your first test!

describe('sayHello Unit Tests', function() {
    it('should be a defined function', function () {
        expect(sayHello).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof helloWorld()).toBe('string')
    });
    it('should return "Hello, Jane!" when called with argument "Jane".', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!" when called with "Alex".', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello Pat!" when called with argument "Pat".', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!')
    });
});

// it('That\'s not a name! when called with argument (number) 21.', function () {
//     expect(sayHello(21)).toBe('That\'s not a name!')
// });

//it('should return "Hello!" when no arguments are passed', function () {
//         expect(sayHello()).toBe("Hello!")
//     });