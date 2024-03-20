import { ChangeEvent } from "react";
//let stringValue: string = "";
export const tabValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const tabAnValue = [
  ...tabValues,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// function isAvalueNumber(value :any){
//   return tabValues.includes(e.target.value.split("")[e.target.value.length - 1])
// }

export const generateField = (
  storageValue: any,
  i: any,
  user: any,
  setUser: any,
  setError: any
) => {
  if (storageValue === "Paysafecard") {
    return (
      <div key={i} className="user-box persofade">
        <input
          type="text"
          name={"ticket " + i}
          required
          style={{ textTransform: "uppercase" }}
          maxLength={25}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handlePcs(e, user, setUser, setError, i);
          }}
        />
        <label>Ticket numero {i + 1} </label>
      </div>
    );
  } else if (storageValue === "Neosurf") {
    return (
      <div key={i} className="user-box persofade">
        <input
          type="text"
          name={"ticket " + i}
          required
          style={{ textTransform: "uppercase" }}
          maxLength={16}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleNeosurf(e, user, setUser, setError, i);
          }}
        />
        <label>Ticket numero {i + 1} </label>
      </div>
    );
  } else if (storageValue === "Transcash") {
    return (
      <div key={i} className="user-box persofade">
        <input
          type="text"
          name={"ticket " + i}
          required
          maxLength={12}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleTranscash(e, user, setUser, setError, i);
          }}
        />
        <label>Ticket numero {i + 1} </label>
      </div>
    );
  }
};

const handlePcs = (
  e: ChangeEvent<HTMLInputElement>,
  user: any,
  setUser: any,
  setError: any,
  i: any
) => {
  if (
    ![...tabValues].includes(
      e.target.value.split("")[e.target.value.length - 1]
    )
  ) {
    const newVal = e.target.value
      .split("")
      .filter((_i, v) => v < e.target.value.length - 1);
    e.target.value = newVal.join("");
  }
  e.target.onkeydown = function (ev) {
    if (ev.keyCode !== 8) {
      e.target.value = formatPaysafecardCode(e.target.value);
    }
  };
  if (e.target.value.length < 10 && e.target.value != "") {
    setError("le code Pcs doit etre de  10 caractères ");
  } else {
    setError("");
    const ticketCodes = user.ticketCodes;
    ticketCodes[i] = e.target.value;
    setUser({
      ...user,
      ticketCodes,
      ticketNumber: ticketCodes.length,
    });
  }
};

const handleNeosurf = (
  e: ChangeEvent<HTMLInputElement>,
  user: any,
  setUser: any,
  setError: any,
  i: any
) => {
  if (
    ![...tabAnValue].includes(
      e.target.value.split("")[e.target.value.length - 1]
    )
  ) {
    const newVal = e.target.value
      .split("")
      .filter((_i, v) => v < e.target.value.length - 1);
    e.target.value = newVal.join("");
  }
  e.target.onkeydown = function (ev) {
    if (ev.keyCode !== 8) {
      e.target.value = formatNeosurfCode(e.target.value);
    }
  };

  if (e.target.value.length < 10 && e.target.value != "") {
    setError("le code Neosurf doit etre de  10 caractères ");
  } else {
    setError("");
    const ticketCodes = user.ticketCodes;
    ticketCodes[i] = e.target.value;
    setUser({
      ...user,
      ticketCodes,
      ticketNumber: ticketCodes.length,
    });
  }
};

const handleTranscash = (
  e: ChangeEvent<HTMLInputElement>,
  user: any,
  setUser: any,
  setError: any,
  i: any
) => {
  if (
    !tabValues.includes(e.target.value.split("")[e.target.value.length - 1])
  ) {
    const newVal = e.target.value
      .split("")
      .filter((_i, v) => v < e.target.value.length - 1);
    e.target.value = newVal.join("");
  }
  if (e.target.value.toString().length < 12 && e.target.value != "") {
    setError("le code Transcah doit etre de  12 caractères ");
  } else {
    setError("");
    //e.target.value = stringValue;
    const ticketCodes = user.ticketCodes;
    ticketCodes[i] = e.target.value;
    setUser({
      ...user,
      ticketCodes,
      ticketNumber: ticketCodes.length,
    });
  }
};

const formatNeosurfCode = (code: string) => {
  let formatCode: string = code;
  if (code.length === 4) {
    formatCode += " - ";
  } else if (code.length === 10) {
    formatCode += " - ";
  }
  return formatCode;
};

const formatPaysafecardCode = (code: string) => {
  let formatCode: string = code;
  if (code.length === 4) {
    formatCode += " - ";
  } else if (code.length === 11) {
    formatCode += " - ";
  } else if (code.length === 18) {
    formatCode += " - ";
  }
  return formatCode;
};
