import { AuthProvider } from "@/contexts/auth.context";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
