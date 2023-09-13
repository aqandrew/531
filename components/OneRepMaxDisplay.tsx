import { WorkoutDay } from './WorkoutDayPicker';

interface OneRepMaxDisplayProps {
	workoutDay: WorkoutDay;
}

export default function OneRepMaxDisplay({
	workoutDay,
}: OneRepMaxDisplayProps) {
	let oneRepMax: number;
	let oneRepMaxGoal: number;

	// TODO get these values from database
	switch (workoutDay) {
		case 'push':
			oneRepMax = 210;
			oneRepMaxGoal = 225;
			break;
		case 'pull':
			oneRepMax = 310;
			oneRepMaxGoal = 350;
			break;
		case 'leg':
			oneRepMax = 235;
			oneRepMaxGoal = 300;
			break;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>current 1rm</th>
					<th>next 1rm goal</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{oneRepMax}</td>
					<td>{oneRepMaxGoal}</td>
				</tr>
			</tbody>
		</table>
	);
}
