export interface IParticipant {
  id: string;
  name: string;
  total: number;
  items: Record<string, number>;
}
