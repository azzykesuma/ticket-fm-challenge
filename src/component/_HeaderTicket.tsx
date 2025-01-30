import { useFormContext } from "@/hooks/useFormContext";


const HeaderTicket = () => {
  const { formData } = useFormContext();
  return (
    <div className="p-2 px-10 lg:w-[500px] lg:mx-auto">
      <h1 className="text-white text-2xl md:text-4xl text-center my-2 font-bold lg:mb-8">
        Congrats, <span className="bg-gradient-text text-transparent bg-clip-text">{formData.fullName}</span>! <br/> Your ticket is ready.
      </h1>
      <p className="text-white text-neutral-500 text-center md:text-xl">
        We've emailed your ticket to <span className="text-orange-500">{formData.emailAddress}</span> and will send
        updates in the run up to the event.
      </p>
    </div>
  );
};

export default HeaderTicket;
