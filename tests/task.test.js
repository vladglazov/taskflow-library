// Mock test for label feature
describe('Task Label', () => {
    test('should set valid label', () => {
        const task = new Task('Test', 'Description');
        expect(task.addLabel('feature'));
        expect(task.labels).toBe('feature');
    });
});
