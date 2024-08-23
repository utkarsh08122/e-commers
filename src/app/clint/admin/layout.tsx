import Admin_side_bar from "@/components/Admin_side_bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Admin_side_bar />
        {children}
      </body>
    </html>
  );
}
