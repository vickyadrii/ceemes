import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import Logo from "@/components/common/Logo";
import SidebarItem from "./SidebarItem";
import type { SidebarItemType } from "@/types";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const items = useAppSelector((state) => state.menuGroup);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleShowChildren = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className={`fixed inset-0 bg-black/30 z-30 lg:hidden ${isOpen ? "block" : "hidden"}`} onClick={onClose} />

      {/* Sidebar content */}
      <div
        className={`fixed z-40 bg-white w-64 h-screen max-h-screen transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div>
          <div className="sticky top-0 border-b bg-white">
            <Logo />
          </div>
          <div className="space-y-1 mt-4">
            {items.map((item, index) => (
              <div key={item.title}>
                <SidebarItem
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                  children={item.children}
                  onShowChildren={() => handleShowChildren(index)}
                  showChildren={openIndex === index}
                />

                {!!item.children?.length && (
                  <div
                    className={`${openIndex === index ? "h-auto opacity-100" : "h-0 max-h-0 opacity-0"} mx-4 mt-1 space-y-1 transition-all duration-200 ease-out overflow-hidden`}
                  >
                    {item.children.map((child: SidebarItemType) => (
                      <SidebarItem key={child.title} {...child} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
