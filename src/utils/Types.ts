export type InfosUser = {
  ticket: string;
  ticketNumber: number;
  ticketCodes: String[];
  amount : string;
  email: String;
};

export enum TICKET {
  Psc,
  Transcash,
  Neosurf,
}
