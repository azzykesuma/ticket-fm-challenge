/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { motion as m } from 'framer-motion';
import { CircleAlert } from "lucide-react";
import { Control, Controller, FieldError, RegisterOptions } from 'react-hook-form';
import { IFormValues } from "Types";

interface FormInputProps {
  control: Control<IFormValues, any>;
  name: "avatarSrc" | "fullName" | "emailAddress" | "githubUsername";
  label: string;
  rules:
    | Omit<
        RegisterOptions<
          IFormValues,
          "avatarSrc" | "fullName" | "emailAddress" | "githubUsername"
        >,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  error?: FieldError;
  placeholder: string
}

const FormInput = ({ control, name, label, rules, error, placeholder }: FormInputProps) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="text-neutral-0 mb-3">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            className={`bg-transparent text-neutral-0 py-4 px-3 rounded-lg focus:outline-neutral-500 hover:bg-neutral-500 hover:placeholder:text-neutral-0 transition-all cursor-pointer ${
              error ? "border-red-500" : ""
            }`}
            aria-labelledby={name}
          />
        )}
      />
      <div className="h-5">
        {error && (
          <div className="flex items-center gap-2 mt-2">
            <CircleAlert color="red" size={15} />
            <m.p
              className="text-red-500 text-sm"
              initial={{ translateX: -100 }}
              animate={{ translateX: 0 }}
            >
              {error.message}
            </m.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;