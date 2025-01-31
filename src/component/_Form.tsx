import { motion as m } from 'motion/react';
import { useForm } from "react-hook-form";
import { IFormValues } from "../../Types";
import FormInput from "./_FormInput";
import UploadImage from "./_UploadImage";
import { useFormContext } from '@/hooks/useFormContext';
import { useState } from 'react';

const Form = ({
  setPending,
  setStep,
}: {
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<"form" | "ticket">>;
}) => {
  const { updateFormData } = useFormContext();
  const [error, setError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      avatarSrc: "",
      fullName: "",
      emailAddress: "",
      githubUsername: "",
    },
  });

  const onSubmit = (data: IFormValues) => {
    if(!data.avatarSrc) {
      setError("Please upload an image.");
      return;
    }
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 1000);
    updateFormData(data);
    setStep("ticket");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 w-full mt-4 mv-8 lg:w-[500px] lg:mx-auto">
      <UploadImage setValue={setValue} error={error} setError={setError} />
      <FormInput
        control={control}
        label="Full Name"
        name="fullName"
        rules={{
          required: {
            value: true,
            message: "Full name is required",
          },
          min: {
            value: 3,
            message: "Full name must be at least 3 characters",
          },
          pattern: {
            value: /^[^\d]+$/i,
            message: "Full name must not contain numbers",
          },
        }}
        error={errors.fullName}
        placeholder='John Doe'
      />
      <FormInput
        control={control}
        label="Email Address"
        name="emailAddress"
        rules={{
          required: {
            value: true,
            message: "Email address is required",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        }}
        error={errors.emailAddress}
        placeholder='example@example.com'
      />
      <FormInput
        control={control}
        label="Github Username"
        name="githubUsername"
        rules={{
          required: {
            value: true,
            message: "Github username is required",
          },
          pattern: {
            value: /^@[\w-]+$/,
            message: "Github username must start with @",
          },
        }}
        error={errors.githubUsername}
        placeholder='@yourusername'
      />
      <m.button
        whileTap={{ scale: 0.9 }}
        className="bg-orange-500 w-full py-3 rounded-md font-extrabold mt-6 mb-4 hover:bg-orange-700 transition-all duration-200 shadow-lg"
      >
        Generate my ticket
      </m.button>
    </form>
  );
};

export default Form;
