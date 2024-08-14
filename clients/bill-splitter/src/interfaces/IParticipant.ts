
export interface IPerson {
    id: string;
    name: string;
}
export interface IParticipant extends IPerson {
  total: number;
  color: string;
  items: Record<string, number>;
}