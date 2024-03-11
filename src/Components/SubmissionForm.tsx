import { useState } from "react";
import { InfosUser } from "../utils/Types";
import { generateField } from "../utils/generateField";

function SubmissionForm() {
  const infosUser: InfosUser = {
    ticket: localStorage.getItem("selectedTicket")!,
    ticketNumber: 0,
    ticketCodes: [],
    email: "",
  };

  const [user, setUser] = useState(infosUser);
  const [ticketsFieldGenerate, setTicketsFieldGenerate] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // const setUserTicket = (e: any) => {
  //   console.log(document.querySelector(".selected"));

  //   // const ticket = e.target.innerHTML
  //   // console.log(ticket);

  //   // setUser({...user , ticket});
  // };

  const createTicketFieldsByTicketNumber = (ticketNumber: any) => {
    const ticketField: any = [];
    for (let i = 0; i < ticketNumber; i++) {
      ticketField.push(
        generateField(
          localStorage.getItem("selectedTicket")!,
          i,
          user,
          setUser,
          setError
        )
      );
    }
    setTicketsFieldGenerate(ticketField);
  };

  const verifiedAllFields = () => {
    if (
      user.email == "" ||
      user.ticket == "" ||
      user.ticketCodes.length == 0 ||
      user.ticket == ""
    ) {
      return false;
    }
  };

  const submissionProcess = (e: any) => {
    e.preventDefault();
    user.ticket = localStorage.getItem("selectedTicket")!;
    if (verifiedAllFields() === false) {
      setError("veuillez remplir tout les champs");
    } else if (!error) {
      setMessage(
        "votre requette a bien été prise en compte, verifiez votre mail"
      );
      console.log(user);
      // Soumission des infos via mail................................
    }
  };

  const handleTicketNumber = (event: any) => {
    if (+event.target.value <= 0) {
      user.ticketCodes = [];
      user.ticketNumber = 0;
    }
    createTicketFieldsByTicketNumber(+event.target.value);
  };

  return (
    <div className="box form-container" style={{ height: "1000px" }}>
      <div className="login-box" style={{width:"90%"}}>
        <h2 style={{ fontSize: "1.5em" }}> Consulter validité </h2>
        {
          error ? <h2
          style={{
            fontSize: "1em",
            width: "100%",
            padding: "10px",
            margin: "0px",
            color: "red",
          }}
        >
          {error} 
        </h2> : <h2
          style={{
            fontSize: "1em",
            width: "100%",
            padding: "10px",
            margin: "0px",
            color: "green",
          }}
        >
          {message} 
        </h2>
        }
        <form>
          <div style={{ marginLeft: "0px", paddingLeft: "0px", width: "101%" }}>
            <label
              style={{ marginLeft: "0px", paddingLeft: "0px", width: "101%" }}
              id="img_category_label"
              className="field"
              htmlFor="img_category"
              data-value=""
            >
              <span style={{ margin: "0px", padding: "0px", width: "101%" }}>
                Choix du ticket
              </span>
              <div
                style={{ marginLeft: "0px", paddingLeft: "0px", width: "101%" }}
                id="img_category"
                className="psuedo_select"
              >
                <span className="selected"></span>
                <ul id="img_category_options" className="options">
                  <li className="option" data-value="opt_1">
                    Pcs
                  </li>
                  <li className="option" data-value="opt_2">
                    Neosurf
                  </li>
                  <li className="option" data-value="opt_3">
                    Transcash
                  </li>
                </ul>
                {/* <span style={{fontSize:'10px', color:'red',padding:'0px',margin:'0px'}}>erreur</span> */}
              </div>
            </label>
          </div>

          <div className="user-box">
            <input
              type="number"
              required
              max={3}
              name="ticketNumber"
              onChange={handleTicketNumber}
            />
            <label>Nombre de tickets</label>
          </div>
          {ticketsFieldGenerate}
          <div className="user-box">
            <input
              type="text"
              onChange={(event) => {
                setUser({ ...user, email: event?.target.value });
              }}
            />
            <label>email</label>
          </div>
          <a
            href="#"
            onClick={(e) => {
              submissionProcess(e);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            consulter
          </a>
        </form>
      </div>
    </div>
  );
}

export default SubmissionForm;
