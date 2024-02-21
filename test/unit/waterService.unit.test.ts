import { calculateWaterFields } from '../../src/services/water-service';

describe('calculateWaterFields function', () => {
    it('should return 0 for an empty profile', () => {
        const profile: number[] = [];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 0 for a profile with less than 3 points', () => {
        const profile: number[] = [1, 2];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 0 for a profile with no water', () => {
        const profile: number[] = [1, 2, 3, 4];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return the correct result for a simple profile', () => {
        const profile: number[] = [3, 0, 2, 0, 4];
        expect(calculateWaterFields(profile)).toBe(7);
    });

    it('should return the correct result for a profile with multiple peaks', () => {
        const profile: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        expect(calculateWaterFields(profile)).toBe(6);
    });

    it('should return the correct result for a profile with equal peaks', () => {
        const profile: number[] = [1, 2, 1, 2, 1];
        expect(calculateWaterFields(profile)).toBe(1);
    });

    it('should return the correct number of water-filled fields for the given array', () => {
        const profile = [3, 2, 4, 1, 2];
        expect(calculateWaterFields(profile)).toBe(2);
    });

    it('should return 0 for a profile with all equal heights', () => {
        const profile: number[] = [5, 5, 5, 5, 5];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 0 for a profile with descending heights', () => {
        const profile: number[] = [5, 4, 3, 2, 1];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 0 for a profile with ascending heights', () => {
        const profile: number[] = [1, 2, 3, 4, 5];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 10 for a profile with ascending heights limited by a high rim', () => {
        const profile: number[] = [6, 1, 2, 3, 4, 5];
        expect(calculateWaterFields(profile)).toBe(10);
    });

    it('should return the correct result for a profile with alternating heights', () => {
        const profile: number[] = [1, 3, 2, 4, 1];
        expect(calculateWaterFields(profile)).toBe(1);
    });

    it('should return 0 for a profile with all negative heights', () => {
        const profile: number[] = [-1, -2, -3, -4, -5];
        expect(calculateWaterFields(profile)).toBe(0);
    });

    it('should return 4 for profile [3, 0, 2, 4]', () => {
        const profile: number[] = [3, 0, 2, 4];
        expect(calculateWaterFields(profile)).toBe(4);
    });
    
    it('should return 7 for profile [5, 0, 5, 2, 4]', () => {
        const profile: number[] = [5, 0, 5, 2, 4];
        expect(calculateWaterFields(profile)).toBe(7);
    });

});
