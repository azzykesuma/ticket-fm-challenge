  /* eslint-disable react-hooks/exhaustive-deps */
  /* eslint-disable react-refresh/only-export-components */
  import { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react';

  type FormData = {
    avatarSrc: string;
    fullName: string;
    emailAddress: string;
    githubUsername: string;
  };

  type FormContextValue = {
    formData: FormData;
    updateFormData: (newData: Partial<FormData>) => void;
  };

  export const FormContext = createContext<FormContextValue | undefined>(undefined);

  export const FormProvider = ({ children } : PropsWithChildren) => {
    const [formData, setFormData] = useState({
      avatarSrc: '',
      fullName: 'sasasasa',
      emailAddress: '',
      githubUsername: '',
    });

    const updateFormData = (newData: Partial<typeof formData>) => {
      setFormData((prevData) => ({
        ...prevData,
        ...newData,
      }));
    };

    const contextValue = useMemo(() => ({ formData, updateFormData }), [formData]);

    return (
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    );
  };