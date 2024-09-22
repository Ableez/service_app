import { config } from "@tamagui/config/v3";
import { color, radius, size, space, themes, zIndex } from "@tamagui/themes";

import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  color: {
    ...color,
    darkPrimary: "#08C26B",
    darkPrimary7: "#30CD84",
    darkPrimary6: "#58CB95",
    darkPrimary5: "#89D2B0",
    darkPrimary4: "#B9E1CE",
    darkPrimary3: "#D4EDE1",
    darkPrimary2: "#E3F3EB",
    darkPrimary1: "#EEF6F2",
    lightPrimary: "#08C26B",
    lightPrimary7: "#58CB95",
    lightPrimary6: "#89D2B0",
    lightPrimary5: "#B9E1CE",
    lightPrimary4: "#D4EDE1",
    lightPrimary3: "#E3F3EB",
    lightPrimary2: "#E3F3EB",
    lightPrimary1: "#EEF6F2",
  },
  space,
  size,
  radius,
  zIndex,
});

export const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    dark: {
      primary: tokens.color.darkPrimary,
      primary7: tokens.color.darkPrimary7,
      primary6: tokens.color.darkPrimary6,
      primary5: tokens.color.darkPrimary5,
      primary4: tokens.color.darkPrimary4,
      primary3: tokens.color.darkPrimary5,
      primary2: tokens.color.darkPrimary2,
      primary1: tokens.color.darkPrimary1,
    },
    light: {
      primary: tokens.color.lightPrimary,
      primary7: tokens.color.lightPrimary7,
      primary6: tokens.color.lightPrimary6,
      primary5: tokens.color.lightPrimary5,
      primary4: tokens.color.lightPrimary4,
      primary3: tokens.color.lightPrimary5,
      primary2: tokens.color.lightPrimary2,
      primary1: tokens.color.lightPrimary1,
    },
  },
});

export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
