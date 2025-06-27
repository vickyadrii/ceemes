import type { SidebarItemType } from "@/types";
import { Link } from "react-router";

type Props = {
  title: string;
  href: string;
  icon?: string;
  children?: SidebarItemType[];
  onShowChildren?: () => void;
  showChildren?: boolean;
};

const SidebarItem = ({ title, href, icon, children, onShowChildren, showChildren }: Props) => {
  return children ? (
    <button className="w-full p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-out" onClick={onShowChildren}>
      <div className="flex items-center gap-2">
        {icon && <img src={icon} alt={`${title} icon`} />}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <img src="/assets/icons/ic_arrow-top.svg" alt="ic_arrow-top" className={`${showChildren ? 'rotate-180' : 'rotate-0'} transition-all duration-200 ease-out`} />
    </button>
  ) : (
    <Link to={href} className="p-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-out">
      {icon && <img src={icon} alt={`${title} icon`} />}
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
};

export default SidebarItem;
