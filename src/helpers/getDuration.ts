export const getDurationString = (duration: string) => {
	const value = Number(duration);

	const hours = Math.floor(value / 60);
	const minutes = value - hours * 60;

	const hourValue = hours < 10 ? '0' + hours : hours;
	const minutesValue = minutes < 10 ? '0' + minutes : minutes;
	return hourValue + ':' + minutesValue + ' hours';
};
