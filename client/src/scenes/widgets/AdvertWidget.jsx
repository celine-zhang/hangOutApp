import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      <img
        width="100%"
        height="auto"
        alt="adver"
        src="https://hangout-kr2s.onrender.com/assets/kattie.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Kattie</Typography>
        <Typography color={medium}>kattiecatmmunity.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Bring your kitty to Hang Out!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
