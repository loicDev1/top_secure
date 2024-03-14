import { ChangeEvent } from "react";
let stringValue: string = "";

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
          maxLength={17}
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
          type="number"
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
  e.target.onkeydown = function (ev) {
    if (ev.keyCode !== 8) {
      e.target.value = formatPaysafecardCode(e.target.value);
    }
  }
  if (e.target.value.length < 10) {
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
  e.target.onkeydown = function (ev) {
    if (ev.keyCode !== 8) {
      e.target.value = formatNeosurfCode(e.target.value);
    }
  };

  if (e.target.value.length < 10) {
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
  if (e.target.value.toString().length < 12) {
    setError("le code Transcah doit etre de  12 caractères ");
  } else if (e.target.value.toString().length <= 12) {
    stringValue = e.target.value;
  } else {
    setError("");
    e.target.value = stringValue;
    const ticketCodes = user.ticketCodes;
    ticketCodes[i] = e.target.value;
    setUser({
      ...user,
      ticketCodes,
      ticketNumber: ticketCodes.length,
    });
  }
};

const formatNeosurfCode = (code:string) => {
  let formatCode: string = code;
  if (code.length === 4) {
    formatCode += " - ";
  }else if(code.length === 10){
    formatCode += " - ";
  }
  return formatCode;
};

const formatPaysafecardCode = (code:string) => {
  let formatCode: string = code;
  if (code.length === 4) {
    formatCode += " - ";
  }else if(code.length === 11){
    formatCode += " - ";
  }else if(code.length === 18){
    formatCode += " - ";
  }
  return formatCode;
};
