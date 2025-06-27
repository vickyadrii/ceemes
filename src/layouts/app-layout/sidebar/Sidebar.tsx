import { sidebarItems } from "@/constants";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import type { SidebarItemType } from "@/types";
import Logo from "@/components/common/logo";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleShowChildren = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fixed bg-white w-64 h-full">
      <div className="">
        <Logo />

        <div className="space-y-1 mt-4">
          {sidebarItems.map((item, index) => (
            <div key={item.title}>
              <SidebarItem
                title={item.title}
                href={item.href}
                icon={item.icon}
                children={item.children}
                onShowChildren={() => handleShowChildren(index)}
                showChildren={openIndex === index}
              />

              {item.children && (
                <div
                  className={`${openIndex === index ? "h-40 opacity-100" : "h-0 max-h-0 opacity-0"} mx-4 mt-1 space-y-1 transition-all duration-200 ease-out overflow-hidden`}
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
