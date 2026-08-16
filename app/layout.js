import "./globals.css";
export const metadata = {
  title: "ArchanaAPI — Developer API Platform",
  description: "Real REST API platform with Supabase authentication, API keys, usage analytics and admin API management."
};
export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
