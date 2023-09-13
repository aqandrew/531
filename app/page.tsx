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
						<label>
							<input
								type="radio"
								name="workout-day"
								value="push"
								checked={isWorkoutDayChecked('push')}
								onChange={handleWorkoutDayChange}
							/>
							push
						</label>
						<label>
							<input
								type="radio"
								name="workout-day"
								value="pull"
								checked={isWorkoutDayChecked('pull')}
								onChange={handleWorkoutDayChange}
							/>
							pull
						</label>
						<label>
							<input
								type="radio"
								name="workout-day"
								value="leg"
								checked={isWorkoutDayChecked('leg')}
								onChange={handleWorkoutDayChange}
							/>
							leg
						</label>
					</div>
				</fieldset>
			</header>
			<main>TODO</main>
		</>
	);
}
