import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import styles from "./Layout.module.css";
import cn from "classnames";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(styles.wrapper)}>
      <Header className={cn(styles.header)} />
      <Sidebar className={cn(styles.sidebar)} />
      <div className={cn(styles.body)}>{children}</div>
      <Footer className={cn(styles.footer)} />
    </div>
  );
}
