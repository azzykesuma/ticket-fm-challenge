import { motion as m } from "motion/react";

const LoadingOverlay = () => {
  return (
    <m.div
      className="fixed inset-0 flex items-center justify-center bg-neutral-900"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3">
          <div className="animate-spin h-4 w-4 rounded-full border-t-2 border-b-2 border-white"></div>
          <div className="animate-spin h-4 w-4 rounded-full border-t-2 border-b-2 border-white"></div>
          <div className="animate-spin h-4 w-4 rounded-full border-t-2 border-b-2 border-white"></div>
        </div>
        <h1 className="text-white text-2xl text-center my-2">Submitting...</h1>
      </div>
    </m.div>
  );
};

export default LoadingOverlay;
