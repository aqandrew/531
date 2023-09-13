interface OneRepMaxDisplayProps {
	oneRepMax: number;
	workingOneRepMax: number;
	oneRepMaxGoal: number;
}

export default function OneRepMaxDisplay({
	oneRepMax,
	workingOneRepMax,
	oneRepMaxGoal,
}: OneRepMaxDisplayProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>current 1rm</th>
					<th>working 1rm</th>
					<th>next 1rm goal</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{oneRepMax}</td>
					<td>{workingOneRepMax}</td>
					{/* TODO add UI to update goal */}
					<td>{oneRepMaxGoal}</td>
				</tr>
			</tbody>
		</table>
	);
}
