import styled from "@emotion/styled";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import HorizontalNav from "@/components/HorizontalNav";

const Container = styled.div`
  margin: 0 auto 20px;
`;

const Index = () => {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <div id="main" role="main">
        <HorizontalNav />
      </div>
      <Footer />
    </Container>
  );
};

export default Index;
