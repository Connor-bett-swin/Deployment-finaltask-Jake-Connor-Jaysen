const Typewriter = require('./Typewriter'); 

describe('Typewriter class', () => {
    let typewriter;

    beforeEach(() => {
        mockOnCharAdd = jest.fn(); 
        mockOnComplete = jest.fn(); 
        
        typewriter = new Typewriter(
            "Test string.\nNew line.", //22 characters
            mockOnCharAdd,
            mockOnComplete,
            10, 
            20,
            100 
        );
    });

    test('should call onCharAdd for each character', () => {
        jest.useFakeTimers();
        
        typewriter.start();
        
        jest.advanceTimersByTime(300); 
        
        expect(mockOnCharAdd).toHaveBeenCalledTimes(22);
    });
});
