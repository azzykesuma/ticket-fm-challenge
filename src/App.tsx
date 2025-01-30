import { useState } from "react";
import Form from "./component/_Form";
import Header from "./component/_Header";
import LoadingOverlay from "./component/_LoadingOverlay";
import Layout from "./component/layout";
import { AnimatePresence } from "motion/react";
import HeaderTicket from "./component/_HeaderTicket";
import logo from "@/lib/assets/images/logo-mark.svg";
import Ticket from "./component/_Ticket";

function App() {
  const [step, setStep] = useState<"form" | "ticket">("form");
  const [pending, setPending] = useState(false);

  return (
    <Layout>
      <div className="flex justify-center items-center gap-4 mt-8">
        <img src={logo} alt="logo-mark" className="w-5 h-5" />
        <p className="text-white text-lg">Coding Conf</p>
      </div>
      {step === "form" ? <Header /> : <HeaderTicket />}
      <div className="mx-auto">
        {step === "form" ? <Form setPending={setPending} setStep={setStep} /> : <Ticket />}
      </div>
      <AnimatePresence>{pending && <LoadingOverlay />}</AnimatePresence>
    </Layout>
  );
}

export default App;

