export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
  name: string;
  surname: string;
  studentId: string;
  image: string;
  gpa: number;
}

export interface Student {
  id: number
  name: string
  surname: string
  studentId: string
  image: string
  description: string
  gpa: number
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}
