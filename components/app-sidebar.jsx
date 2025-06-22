import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { File, PenTool } from "lucide-react";
import Link from "next/link";

const basicMenuItems = [
  {
    title: "Blogs",
    icon: File,
    url: "/blogs",
  },
  {
    title: "Draft",
    icon: PenTool,
    url: "/draft",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        {basicMenuItems.map((each) => {
          return (
            <Link href={each.url} className="flex items-center gap-2">
              <each.icon />
              {each.title}
            </Link>
          );
        })}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
