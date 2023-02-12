import { TCourses } from 'src/types/course';
import { TInputField } from './../../types/inputField';

export type TInputProps = {
	course: TCourses;
	field: TInputField;
	onChange: (evet) => void;
};

const Input = ({ course, field, onChange }: TInputProps) => {
	return (
		<input // TODO: let's disscus on mondey;
			type={field.type}
			name={field.name}
			value={course[field.name] || ''}
			placeholder={field.placeHolder}
			onChange={onChange}
		/>
	);
};

export default Input;
