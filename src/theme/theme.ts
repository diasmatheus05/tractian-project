import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Montserrat, Sans-serif",
    colorText: "#FFF",
  },
  components: {
    Typography: {
      sizeMarginHeadingVerticalEnd: 0,
      sizeMarginHeadingVerticalStart: 0,
      colorSuccess: "#16A349",
      colorWarning: "#FE8F09",
      colorError: "#FD2223",
    },
    Menu: {
      colorItemTextSelected: "#FFF",
      colorItemBgSelected: "#1D3A8A",
    },
  },
};
