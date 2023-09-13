const waves = [
	{ name: 'A (x5)', weights: [0.75, 0.8, 0.85] },
	{ name: 'B (x3)', weights: [0.8, 0.85, 0.9] },
	{ name: 'C (x5/3/1)', weights: [0.75, 0.85, 0.95] },
	{ name: 'D (x5)', weights: [0.6, 0.65, 0.7] },
];

function roundToNearest5(n: number) {
	return Math.round(n / 5) * 5;
}

interface WorkingSetsDisplayProps {
	workingOneRepMax: number;
}

export default function WorkingSetsDisplay({
	workingOneRepMax,
}: WorkingSetsDisplayProps) {
	function getWorkingWeight(percentage: number) {
		return roundToNearest5(workingOneRepMax * percentage) || 0;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>wave</th>
					<th>set 1</th>
					<th>set 2</th>
					<th>set 3</th>
				</tr>
			</thead>
			<tbody>
				{waves.map(({ name, weights }) => (
					<tr key={name}>
						<td>{name}</td>
						{weights.map((percentage) => (
							<td key={percentage}>{getWorkingWeight(percentage)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
