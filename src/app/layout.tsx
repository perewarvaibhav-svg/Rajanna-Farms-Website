import './globals.css';

export const metadata = {
  title: 'Rajanna Farms | Pure Milk & Products',
  description: 'Fresh Milk. Pure Products. Direct From Our Farm.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
