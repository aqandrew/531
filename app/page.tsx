'use client';

import { ChangeEvent, useState } from 'react';
import WorkoutDayPicker, { WorkoutDay } from '@/components/WorkoutDayPicker';
import OneRepMaxDisplay from '@/components/OneRepMaxDisplay';

export default function Home() {
	const [workoutDay, setWorkoutDay] = useState<WorkoutDay>('push');

	function isWorkoutDayChecked(value: WorkoutDay): boolean {
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
				<WorkoutDayPicker
					isWorkoutDayChecked={isWorkoutDayChecked}
					handleWorkoutDayChange={handleWorkoutDayChange}
				></WorkoutDayPicker>
			</header>
			<main>
				<OneRepMaxDisplay workoutDay={workoutDay}></OneRepMaxDisplay>
			</main>
		</>
	);
}
