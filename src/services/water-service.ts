/**
 * Calculates the total water fill areas between blocks in a profile.
 * @param {number[]} profile - Array representing the heights of blocks.
 * @returns {number} - Total water fill areas.
 */
export function calculateWaterFields(profile: number[]): number {
    let totalWaterFillAreas: number = 0;

    for (let i: number = 1; i < profile.length - 1; i++) {
        let leftMax: number = profile[0];
        let rightMax: number = profile[profile.length - 1];

        // Finding the maximum height from the left side
        for (let j: number = 0; j < i; j++) {
            leftMax = Math.max(leftMax, profile[j]);
        }

        // Finding the maximum height from the right side
        for (let k: number = i + 1; k < profile.length; k++) {
            rightMax = Math.max(rightMax, profile[k]);
        }

        // Calculating water capacity for the current index
        const currentWaterFillArea: number = Math.max(0, Math.min(leftMax, rightMax) - profile[i]);
        totalWaterFillAreas += currentWaterFillArea;
    }

    return totalWaterFillAreas;
}
