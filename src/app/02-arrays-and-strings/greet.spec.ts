import { greet } from './greet';

describe('greet', () => {
    it('should include in the message', () => {
        expect(greet('mosh')).toContain('mosh');
    });
});