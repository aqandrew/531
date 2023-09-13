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
				<tr>
					<td>A (x5)</td>
					<td>{getWorkingWeight(0.75)}</td>
					<td>{getWorkingWeight(0.8)}</td>
					<td>{getWorkingWeight(0.85)}</td>
				</tr>
				<tr>
					<td>B (x3)</td>
					<td>{getWorkingWeight(0.8)}</td>
					<td>{getWorkingWeight(0.85)}</td>
					<td>{getWorkingWeight(0.9)}</td>
				</tr>
				<tr>
					<td>C (x5/3/1)</td>
					<td>{getWorkingWeight(0.75)}</td>
					<td>{getWorkingWeight(0.85)}</td>
					<td>{getWorkingWeight(0.95)}</td>
				</tr>
				<tr>
					<td>D (x5)</td>
					<td>{getWorkingWeight(0.6)}</td>
					<td>{getWorkingWeight(0.65)}</td>
					<td>{getWorkingWeight(0.7)}</td>
				</tr>
			</tbody>
		</table>
	);
}
