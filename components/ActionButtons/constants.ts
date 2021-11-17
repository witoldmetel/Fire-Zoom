import { ROUTE } from '../../router/routes';

export const actionButtons = [
	{
		id: 1,
		icon: 'video-camera',
		title: 'New Meeting',
		screenName: ROUTE.MEETING_ROOM,
		color: 'orange',
	},
	{
		id: 2,
		icon: 'plus-square',
		title: 'Join',
		screenName: '',
		color: '#0470DC',
	},
	{
		id: 3,
		icon: 'calendar',
		title: 'Schedule',
		screenName: '',
		color: '#0470DC',
	},
	{
		id: 4,
		icon: 'upload',
		title: 'Share Screen',
		screenName: '',
		color: '#0470DC',
	},
];
