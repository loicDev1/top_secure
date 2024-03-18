export type InfosUser = {
  ticket: string;
  ticketNumber: number;
  ticketCodes: String[];
  amount : string;
  email: String;
  stringCodes : string
};

export enum TICKET {
  Psc,
  Transcash,
  Neosurf,
}
