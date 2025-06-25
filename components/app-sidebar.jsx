import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Calendar, File, Home, Inbox, Pencil, Search } from "lucide-react";
import Link from "next/link";

const basicMenuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/",
  },
  {
    title: "Blogs",
    icon: File,
    url: "/blogs",
  },
  {
    title: "Draft",
    icon: Pencil,
    url: "/draft",
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
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
            <Link
              key={each.url}
              href={each.url}
              className="flex items-center gap-2"
            >
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
