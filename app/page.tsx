'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import WorkoutDayPicker, { WorkoutDay } from '@/components/WorkoutDayPicker';
import OneRepMaxDisplay from '@/components/OneRepMaxDisplay';
import WorkingSetsDisplay from '@/components/WorkingSetsDisplay';

// TODO get these values from database
const dummyData = {
	user: 'andrew',
	workouts: [
		{
			type: 'push',
			oneRepMax: 210,
			oneRepMaxGoal: 225,
		},
		{
			type: 'pull',
			oneRepMax: 310,
			oneRepMaxGoal: 350,
		},
		{
			type: 'leg',
			oneRepMax: 235,
			oneRepMaxGoal: 300,
		},
	],
};

export default function Home() {
	const [workoutDay, setWorkoutDay] = useState<WorkoutDay>('push');
	const [oneRepMax, setOneRepMax] = useState<number>(0);
	const [oneRepMaxGoal, setOneRepMaxGoal] = useState<number>(0);

	const workingOneRepMax = oneRepMax * 0.9;

	useEffect(() => {
		const workout = dummyData.workouts.find((w) => w.type === workoutDay);
		setOneRepMax(workout!.oneRepMax);
		setOneRepMaxGoal(workout!.oneRepMaxGoal);
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
