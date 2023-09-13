import { ChangeEvent } from 'react';

const workoutDays = ['push', 'pull', 'leg'] as const;
export type WorkoutDay = (typeof workoutDays)[number];

interface WorkoutDayPickerProps {
	isWorkoutDayChecked: (value: WorkoutDay) => boolean;
	handleWorkoutDayChange: (event: ChangeEvent) => void;
}

export default function WorkoutDayPicker({
	isWorkoutDayChecked,
	handleWorkoutDayChange,
}: WorkoutDayPickerProps) {
	return (
		<fieldset>
			<legend>choose workout</legend>
			<div className="radio-group">
				{workoutDays.map((day) => (
					<label key={day}>
						<input
							type="radio"
							name="workout-day"
							value={day}
							checked={isWorkoutDayChecked(day)}
							onChange={handleWorkoutDayChange}
						/>
						{day}
					</label>
				))}
			</div>
		</fieldset>
	);
}
