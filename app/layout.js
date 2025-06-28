export const metadata = {
  title: 'Ashkan Ahmadian',
  description: 'Showcasing the work of Ashkan Ahmadian',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen text-black font-sans"
        style={{
          backgroundColor: '#fcfcfc',
          backgroundImage: "url('/background/TOPOBACK.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
