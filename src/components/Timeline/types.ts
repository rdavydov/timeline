// Интерфейс для отдельного события
export interface TimelineEvent {
  year: number;
  text: string;
}

// Интерфейс для временного отрезка
export interface TimelineSection {
  startYear: number;
  endYear: number;
  events: TimelineEvent[];
}
