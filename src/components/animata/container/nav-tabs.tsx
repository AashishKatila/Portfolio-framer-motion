import { Link } from "react-scroll";

import { cn } from "../../../lib/utils";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";

interface TabProps {
  text: string;
}

export default function NavTabs({ tabs }: { tabs: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4  rounded-3xl bg-slate-900 px-4 py-2">
      {tabs.map((tab) => (
        <Tab text={tab} key={tab} />
      ))}
    </div>
  );
}

const Tab = ({ text }: TabProps) => {
  const icons = {
    Home: <IoHomeOutline size={24} />,
    About: <CgProfile size={24} />,
    Projects: <AiOutlineProject size={24} />,
    Contact: <IoCallOutline size={24} />,
  };
  return (
    <Link
      to={text.toLocaleLowerCase()}
      activeClass="active-tab"
      smooth={true}
      duration={700}
      spy={true}
    >
      <button
        className={cn("relative rounded-md p-2 text-md  transition-all ")}
      >
        <p className="relative hidden md:block z-50 min-w-20">{text}</p>
        <p className="relative md:hidden flex items-center justify-center z-50 min-w-10">
          {icons[text]}
        </p>
      </button>
    </Link>
  );
};
