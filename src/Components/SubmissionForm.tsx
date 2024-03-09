import { useState } from "react";
import { InfosUser, TICKET } from "../utils/Types";

function SubmissionForm() {
  const infosUser: InfosUser = {
    ticket: localStorage.getItem("selectedTicket")!,
    ticketNumber: 0,
    ticketCodes: [],
    email: "",
  };
  console.log(TICKET[2]);

  const [user, setUser] = useState(infosUser);
  const [ticketsFieldGenerate, setTicketsFieldGenerate] = useState([]);

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
        <div key={i} className="user-box persofade">
          <input
            type="text"
            name={"ticket " + i}
            required
            maxLength={10}
            onChange={(e) => {
              const ticketCodes = user.ticketCodes;
              ticketCodes[i] = e.target.value;
              setUser({ ...user, ticketCodes , ticketNumber: ticketCodes.length });
            }}
          />
          <label>Ticket numero {i + 1} </label>
        </div>
      );
    }
    setTicketsFieldGenerate(ticketField);
  };

  const submissionProcess = (e: any) => {
    e.preventDefault();
    user.ticket = localStorage.getItem("selectedTicket")!;
    console.log(user);
  };

  const handleTicketNumber = (event: any) => {
    // user.ticketCodes = []
    // user.ticketNumber = user.ticketCodes.length
    //setUser(user);
    if (+event.target.value <= 0) {
      user.ticketCodes = [];
      user.ticketNumber = 0;
    }
    createTicketFieldsByTicketNumber(+event.target.value);
  };

  return (
    <div className="box form-container" style={{ height: "600px" }}>
      <div className="login-box">
        <h2> Consulter validité </h2>
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
                <span
                  onClick={() => {
                    console.log("fdsdsdf");
                  }}
                  className="selected"
                ></span>
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
