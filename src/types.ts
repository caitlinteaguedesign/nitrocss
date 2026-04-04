import { SIDEBAR_SECTIONS } from "@/consts";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type SidebarSection =
  (typeof SIDEBAR_SECTIONS)[keyof typeof SIDEBAR_SECTIONS];
