// import { useEffect } from "react";
// import { sendUserInfosByEmail } from "./utils/Methods";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { InfosUser } from "./utils/Types";
import CarouselSection from "./Components/CarouselSection";
import Services from "./Components/Services";
import Apropos from "./Components/Apropos";
import Footer from "./Components/Footer";
import ClientSection from "./Components/ClientSection";
import WhyUs from "./Components/WhyUs";
import SubmissionForm from "./Components/SubmissionForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  // const newInfosUser: InfosUser = {
  //   name: "test User send",
  //   code: "1234567890",
  //   email: "generated@gmail.com",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptates illo, at a nobis eveniet pariatur corrupti error eum. Optio at, cumque autem consequatur magnam maiores ducimus eius ipsa odio.",
  // };

  // const [count, setCount] = useState(0);
  // const [infosUser, setInfosUser] = useState(newInfosUser);

  // function sendMail(event: any): void {
  //   event.preventDefault();
  //   sendUserInfosByEmail(
  //     import.meta.env.VITE_SERVICE_ID,
  //     import.meta.env.VITE_TEMPLATE_ID,
  //     infosUser,
  //     import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
  //   );
  // }

  return (
    <>
      <CarouselSection />
      <Services />
      <Apropos />
      <ClientSection />
      <SubmissionForm />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
