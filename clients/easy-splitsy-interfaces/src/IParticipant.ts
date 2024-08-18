export interface IPerson {
  name: string;
}

export interface IParticipant extends IPerson {
  id: string;
  total: number;
  color: string;
  items: Record<string, number>;
}
