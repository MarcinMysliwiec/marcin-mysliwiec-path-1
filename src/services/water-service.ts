export function calculateWaterFields(profile: number[]): number {
    let totalWaterFillAreas = 0;

    for (let i = 1; i < profile.length - 1; i++) {
        let leftMax = profile[0];
        let rightMax = profile[profile.length - 1];

        // Szukanie najwyższej wysokości z lewej strony
        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, profile[j]);
        }

        // Szukanie najwyższej wysokości z prawej strony
        for (let k = i + 1; k < profile.length; k++) {
            rightMax = Math.max(rightMax, profile[k]);
        }

        // Obliczanie pojemności wody dla aktualnego indeksu
        const currentWaterFillArea = Math.max(0, Math.min(leftMax, rightMax) - profile[i]);
        totalWaterFillAreas += currentWaterFillArea;
    }

    return totalWaterFillAreas;
}
