import logo from "@/lib/assets/images/logo-mark.svg";
import { useFormContext } from "@/hooks/useFormContext";
import githubIcon from "@/lib/assets/images/icon-github.svg"

const Ticket = () => {
    const {formData} = useFormContext();
  return (
    <div className="my-6 px-4 w-fit mx-auto mt-20">
      <div className="bg-ticket bg-contain bg-no-repeat p-4 relative w-[350px] lg:scale-110">
        <div className="flex justify-between items-center gap-4">
          <div>
            <div className="flex gap-2 items-start mb-6">
              <img src={logo} alt="logo-mark" className="w-5 h-5" />
              <div className="translate-y-[-10px]">
                <h1 className="text-neutral-0 text-2xl">Coding conf</h1>
                <p className="text-neutral-500">Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img src={formData.avatarSrc} alt="logo-mark" className="w-14 h-14 rounded" />
              <div>
                <h1 className="text-neutral-0 text-xl">{formData.fullName}</h1>
                <div className="flex items-center gap-1">
                  <img src={githubIcon} alt="icon-github" className="w-3 h-3" />
                  <p className="text-neutral-500">{formData.githubUsername}</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-neutral-500 rotate-90 text-2xl w-fit translate-x-5">#01609</h3>
        </div>
      </div>
    </div>
  );
}

export default Ticket
