export type InfosUser = {
  ticket: string;
  ticketNumber: number;
  ticketCodes: String[];
  email: String;
};

export enum TICKET {
  Psc,
  Transcash,
  Neosurf,
}
