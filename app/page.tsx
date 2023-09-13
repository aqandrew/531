'use client';

import { ChangeEvent, useState } from 'react';

const workoutDays = ['push', 'pull', 'leg'] as const;
type WorkoutDay = (typeof workoutDays)[number];

export default function Home() {
	const [workoutDay, setWorkoutDay] = useState<WorkoutDay>('push');

	function isWorkoutDayChecked(value: string): boolean {
		return workoutDay === value;
	}

	function handleWorkoutDayChange(event: ChangeEvent) {
		const { target } = event;
		setWorkoutDay((target as HTMLInputElement).value as WorkoutDay);
	}

	return (
		<>
			<header>
				<h1>531</h1>
				<fieldset>
					<legend>choose workout</legend>
					<div>
						{workoutDays.map((day) => (
							<label>
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
			</header>
			<main>TODO</main>
		</>
	);
}
