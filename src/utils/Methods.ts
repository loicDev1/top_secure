import emailjs from "@emailjs/browser";
import { InfosUser } from "../utils/Types";

export const sendUserInfosByEmail = async (
  serviceID: string,
  templateID: string,
  infosUser: InfosUser,
  publicKey: string
) => {
  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      infosUser,
      publicKey
    );
  } catch (error) {
    console.log(error);
  }
};
