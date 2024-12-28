export interface Timer {
  id: string;
  title: string;
  description: string;
  duration: number; // in seconds
  hours: number;
  minutes: number;
  seconds: number;
  remainingTime: number;
  isRunning: boolean;
  createdAt: number;
}
