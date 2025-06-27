import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import type { SidebarItemType } from "@/types";

import SidebarItem from "./SidebarItem";
import Logo from "@/components/common/Logo";

const Sidebar = () => {
  const items = useAppSelector((state) => state.menuGroup);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleShowChildren = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fixed bg-white w-64 h-full z-10">
      <div>
        <Logo />

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

              {!!item.children && item.children.length > 0 && (
                <div
                  className={`${openIndex === index ? "h-auto opacity-100" : "h-0 max-h-0 opacity-0"} mx-4 mt-1 space-y-1 transition-all duration-200 ease-out overflow-hidden`}
                >
                  {item.children.map((child: SidebarItemType) => (
                    <SidebarItem key={child.title} title={child.title} href={child.href} icon={child.icon} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
