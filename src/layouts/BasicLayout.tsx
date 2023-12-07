import { Container } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BasicLayoutProps = {
  /**
   * Page content width
   */
  children?: React.ReactNode;
};

/**
 * Renders a simple header, page body, and simple footer
 */
const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default BasicLayout;
