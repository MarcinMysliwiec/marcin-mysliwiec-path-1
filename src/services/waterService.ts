export function calculateWaterFields(profile: number[]): number {
    let waterFields = 0;
    const n = profile.length;

    if (n < 3) {
        return waterFields; // Cannot form a hole with less than 3 points
    }

    let leftMax = 0;
    let rightMax = 0;

    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (profile[left] < profile[right]) {
            if (profile[left] > leftMax) {
                leftMax = profile[left];
            } else {
                waterFields += leftMax - profile[left];
            }
            left++;
        } else {
            if (profile[right] > rightMax) {
                rightMax = profile[right];
            } else {
                waterFields += rightMax - profile[right];
            }
            right--;
        }
    }

    return waterFields;
}
