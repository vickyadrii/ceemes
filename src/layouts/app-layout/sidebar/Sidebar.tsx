import { sidebarItems } from "@/constants";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import type { SidebarItemType } from "@/types";

const Sidebar = () => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="fixed bg-white w-64 h-full">
      <div className="">
        <div className="p-4 flex items-center gap-2 border-b border-b-gray-100">
          <img src="/assets/images/logo.webp" alt="Ceemes Logo" className="w-10 h-10 object-cover" />
          <h3 className="text-purple-500 text-2xl font-bold">Ceemes</h3>
        </div>

        {sidebarItems.map((item) => (
          <div key={item.title}>
            <SidebarItem
              title={item.title}
              href={item.href}
              icon={item.icon}
              children={item.children}
              onShowChildren={handleShowChildren}
              showChildren={showChildren}
            />

            {item.children && (
              <div
                className={`${showChildren ? "h-40 opacity-100" : "h-0 max-h-0 opacity-0"} mx-4 transition-all duration-200 ease-out`}
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
  );
};

export default Sidebar;
