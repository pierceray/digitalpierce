import styled from "@emotion/styled";
import { black, lightGray, red, white } from "@/common/colors";

const Sticker = styled.div`
  background-color: ${red};
  border-radius: 2em;
  border: 0.31em solid $white;
  box-shadow: 0.25em 0.25em 1em 0.125em ${lightGray};
  color: ${white};
  height: 10em;
  margin: 3em auto;
  padding: 0 0 2em 0;
  transform: rotate(5deg);
  width: 16em;

  @media only screen and (min-width: 35em) {
    /* Style adjustments for viewports that meet the condition */
    height: 16em;
    padding: 1em 0 2em 0;
    width: 30em;
  }
`;

const Stickertitle = styled.div`
  margin: 0;
  padding: 0;
  span {
    display: block;
    text-align: center;
  }
`;

const Stickerbody = styled.div`
  background-color: ${white};
  color: ${black};
  font-family: "Homemade Apple", cursive;
  font-size: 1.1em;
  padding: 0.2em;
  text-align: center;

  @media only screen and (min-width: 35em) {
    font-size: 2em;
  }

  h1 {
    margin: 0;
  }
`;

const Hello = styled.span`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold;

  @media only screen and (min-width: 35em) {
    font-size: 2.3em;
  }
`;

const MyNameIs = styled.span`
  font-size: 1.7em;

  @media only screen and (min-width: 35em) {
    font-size: 1.9em;
  }
`;

const FirstName = styled.span`
  display: inline-block;
  transform: rotate(-5deg);
`;

const LastName = styled.span`
  display: inline-block;
  transform: rotate(3deg);
`;
const Logo = () => (
  <Sticker>
    <Stickertitle>
      <Hello>Hello,</Hello>
      <MyNameIs>my name is:</MyNameIs>
    </Stickertitle>
    <Stickerbody>
      <h1>
        <FirstName>Ray</FirstName> <LastName>Pierce</LastName>
      </h1>
    </Stickerbody>
  </Sticker>
);

export default Logo;
