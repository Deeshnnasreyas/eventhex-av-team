export interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  eventName: string;
  status: 'Pending' | 'Processed';
}

export const dummySessions: Session[] = [
  {
    id: '1',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Processed',
  },
  {
    id: '3',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Pending',
  },
  {
    id: '4',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Pending',
  },
  {
    id: '5',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Pending',
  },
  {
    id: '6',
    title: 'Artificial Intelligence : An Introduction',
    date: '23 Jun 2024',
    time: '9:30 PM',
    eventName: 'Auditorium 01',
    status: 'Pending',
  },
];
