import styled from "@emotion/styled";

const NavList = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
`;

const NavItem = styled.li`
  display: inline;

  &:after {
    @media only screen and (min-width: 35em) {
      content: "|";
      color: $link-color;
      font-size: 1.25em;
    }
  }

  &:last-child:after {
    @media only screen and (min-width: 35em) {
      content: "";
    }
  }
`;

const NavLink = styled.a`
  color: $link-color;
  font-size: 1.25em;
  line-height: 1.75em;
  padding: 0 0.5em;
  text-decoration: none;

  @media only screen and (min-width: 23em) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 35em) {
    line-height: 1.5em;
    padding: 0 1em;
  }

  &:active,
  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalNav = () => (
  <NavList>
    <NavItem>
      <NavLink href="https://github.com/pierceray" target="_blank">
        GitHub
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.linkedin.com/in/raypierce/" target="_blank">
        LinkedIn
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.instagram.com/pierceray/" target="_blank">
        Instagram
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://www.flickr.com/photos/pierceray/" target="_blank">
        flickr
      </NavLink>
    </NavItem>
  </NavList>
);

export default HorizontalNav;
