export interface IPerson {
  name: string;
}

export interface IParticipant extends IPerson {
  id: string;
  total: number;
  items: Record<string, number>;
}
