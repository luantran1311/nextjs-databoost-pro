import MainLayout from "@/layout/MainLayout";
import "./global.css";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers><MainLayout>{children}</MainLayout></Providers>;
}
