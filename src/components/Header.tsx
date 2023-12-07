import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Breadcrumbs, Link as MUILink, useTheme } from "@mui/material";
import { Home } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: theme.spacing(2, 0) }}>
      <Breadcrumbs aria-label="breadcrumb">
        <NextLink href="/" passHref legacyBehavior>
          <MUILink
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </MUILink>
        </NextLink>
      </Breadcrumbs>
    </Box>
  );
};

export default Header;
