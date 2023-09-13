'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import WorkoutDayPicker, { WorkoutDay } from '@/components/WorkoutDayPicker';
import OneRepMaxDisplay from '@/components/OneRepMaxDisplay';
import WorkingSetsDisplay from '@/components/WorkingSetsDisplay';

export default function Home() {
	const [workoutDay, setWorkoutDay] = useState<WorkoutDay>('push');
	const [oneRepMax, setOneRepMax] = useState<number>(0);
	const [oneRepMaxGoal, setOneRepMaxGoal] = useState<number>(0);

	const workingOneRepMax = oneRepMax * 0.9;

	useEffect(() => {
		// TODO get these values from database
		switch (workoutDay) {
			case 'push':
				setOneRepMax(210);
				setOneRepMaxGoal(225);
				break;
			case 'pull':
				setOneRepMax(310);
				setOneRepMaxGoal(350);
				break;
			case 'leg':
				setOneRepMax(235);
				setOneRepMaxGoal(300);
				break;
		}
	}, [workoutDay]);

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
				<OneRepMaxDisplay
					oneRepMax={oneRepMax}
					workingOneRepMax={workingOneRepMax}
					oneRepMaxGoal={oneRepMaxGoal}
				></OneRepMaxDisplay>

				<WorkingSetsDisplay
					workingOneRepMax={workingOneRepMax}
				></WorkingSetsDisplay>
			</main>
		</>
	);
}
