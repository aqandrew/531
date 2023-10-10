export function roundToNearest5(n: number): number {
	return Math.round(n / 5) * 5;
}

export function getWeightOnEachSide(totalWeight: number): number {
	return (totalWeight - 45) / 2;
}
