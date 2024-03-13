export type InfosUser = {
  ticket: string;
  ticketNumber: number;
  ticketCodes: String[];
  amount : number;
  email: String;
};

export enum TICKET {
  Psc,
  Transcash,
  Neosurf,
}
