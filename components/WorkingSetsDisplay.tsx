import { getWeightOnEachSide, roundToNearest5 } from '@/utils';
import { ChangeEvent, useState } from 'react';

const workingSetsDisplays = ['total weight', 'weight on each side'] as const;
type WorkingSetsDisplay = (typeof workingSetsDisplays)[number];

const waves = [
	{ name: 'A (x5)', weights: [0.75, 0.8, 0.85] },
	{ name: 'B (x3)', weights: [0.8, 0.85, 0.9] },
	{ name: 'C (x5/3/1)', weights: [0.75, 0.85, 0.95] },
	{ name: 'D (x5)', weights: [0.6, 0.65, 0.7] },
];

interface WorkingSetsDisplayProps {
	workingOneRepMax: number;
}

export default function WorkingSetsDisplay({
	workingOneRepMax,
}: WorkingSetsDisplayProps) {
	const [workingSetsDisplay, setWorkingSetsDisplay] =
		useState<WorkingSetsDisplay>('total weight');

	function getWorkingWeight(percentage: number): number {
		const totalWeight = roundToNearest5(workingOneRepMax * percentage) || 0;

		return workingSetsDisplay === 'total weight'
			? totalWeight
			: getWeightOnEachSide(totalWeight);
	}

	function isWorkingSetsDisplayChecked(value: WorkingSetsDisplay): boolean {
		return workingSetsDisplay === value;
	}

	function handleWorkingSetsDisplayChange(event: ChangeEvent) {
		const { target } = event;
		setWorkingSetsDisplay(
			(target as HTMLInputElement).value as WorkingSetsDisplay
		);
	}

	return (
		<>
			<fieldset>
				<legend>working sets display</legend>
				<div className="radio-group">
					{workingSetsDisplays.map((display) => (
						<label key={display}>
							<input
								type="radio"
								name="working-sets-display"
								value={display}
								checked={isWorkingSetsDisplayChecked(display)}
								onChange={handleWorkingSetsDisplayChange}
							/>
							{display}
						</label>
					))}
				</div>
			</fieldset>

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
		</>
	);
}
