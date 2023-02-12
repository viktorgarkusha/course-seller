import TCreateForm from './types/createForm';

export const courses = [
	{
		name: 'Java',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
			'Lorem Ipsum has been the industrys standard dummy text ' +
			'ever since the 1500s, when an unknown printer took a galley of type ' +
			'and scrambled it to make a type specimen book. It has survived not ' +
			'only five centuries, but also the leap into electronic typesetting, ' +
			'remaining essentially unchanged. It was popularised in the 1960s ' +
			'with the release of Letraset sheets containing Lorem Ipsum passages, ' +
			'and more recently with desktop publishing software like Aldus ' +
			'PageMaker including versions of Lorem Ipsum.',
		authors: ['Dave Pinket', 'Maria Blanchet'],
		duration: '10 hours',
		created: new Date().toString(),
	},
	{
		name: 'C#',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
			"Lorem Ipsum has been the industry's standard dummy text " +
			'ever since the 1500s, when an unknown printer took a galley of type ' +
			'and scrambled it to make a type specimen book. It has survived not ' +
			'only five centuries, but also the leap into electronic typesetting, ' +
			'remaining essentially unchanged. It was popularised in the 1960s ' +
			'with the release of Letraset sheets containing Lorem Ipsum passages,' +
			'and more recently with desktop publishing software like Aldus ' +
			'PageMaker including versions of Lorem Ipsum.',
		authors: ['Bob Jannet', 'Janey Markovisch'],
		duration: '10 hours',
		created: new Date().toString(),
	},
];

export const createFormFields: TCreateForm[] = [
	{
		name: 'name',
		label: 'Course name',
		type: 'text',
		placeHolder: 'Course name',
	},
	{
		name: 'authors',
		label: 'Authors',
		type: 'text',
		placeHolder: 'Mat Worren, Billy Pop',
	},
	{
		name: 'duration',
		label: 'Duration',
		type: 'text',
		placeHolder: '5h',
	},
	{
		name: 'created',
		label: 'Created',
		type: 'date',
		placeHolder: 'Creation date',
	},
	{
		name: 'description',
		label: 'Short Course Description',
		type: 'textarea',
		placeHolder: 'Short course description',
	},
];
