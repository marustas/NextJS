import { PropsWithChildren } from "react";
import SideNavigation from "../components/SideNavigation";

export default function AccountLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16em_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
