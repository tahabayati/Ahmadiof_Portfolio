export const metadata = {
  title: 'Ashkan Ahmadian',
  description: 'Showcasing the work of Ashkan Ahmadian',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          color: '#000',
          fontFamily: 'sans-serif',
          backgroundColor: '#fcfcfc',
          backgroundImage: "url('/background/background_line_3_s1.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <main style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1rem' }}>{children}</main>
      </body>
    </html>
  );
}
