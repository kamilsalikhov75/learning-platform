import { Role } from "entities/auth";

export const ROUTES = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Профиль",
    href: "/profile",
  },
  {
    label: "Администрирование",
    href: "/admin",
    role: Role.Admin,
  },
  {
    label: "Сотрудники",
    href: "/supervisor/users",
    role: Role.Supervisor,
  },
];
