// Mock test for priority feature
describe('Task Priority', () => {
    test('should set valid priority', () => {
        const task = new Task('Test', 'Description');
        expect(task.setPriority('high')).toBe(true);
        expect(task.priority).toBe('high');
    });
});  

// Mock test for label feature
describe('Task Label', () => {
    test('should set valid label', () => {
        const task = new Task('Test', 'Description');
        expect(task.addLabel('feature'));
        expect(task.labels).toBe('feature');
    });
});
