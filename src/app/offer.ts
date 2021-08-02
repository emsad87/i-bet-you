export interface Offer {
  id: number;
  name: string;
  locations: {
    name: string;
    leagues: {
      id: any;
      name: string;
      eventDateGroups: any;
    }[];
  }[];
}
