import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      secondary_100: string;
      secondary_200: string;
      secondary_300: string;
      secondary_400: string;
      secondary_450: string;
      secondary_500: string;
      secondary_600: string;
      secondary_550: string;
      secondary_800: string;
      secondary_900: string;
      primary: string;
      primary_0: string;
      primary_100: string;
      primary_200: string;
      primary_300: string;
      primary_400: string;
      primary_800: string;
      error: string;
      error_100: string;
      warning: string;
      info: string;
      success: string;
      active: string;
      active_100: string;
      star: string;
      active_200: string;
      active_300: string;
      active_400: string;
      active_menu: string;
      background_0: string;
      background_100: string;
      background_200: string;
      success_notification: string;
      error_notification: string;
      warning_notification: string;
      overlay: string;
      facebook: string;
      instagram: string;
      youtube: string;
    };
    zIndex: {
      menu: number;
      dropdown: number;
      header: number;
      multiLevelMenuItem: number;
      copiedLabel: number;
      modal: number;
      notification: number;
    };
    textEditor: {
      textGap: number;
    };
  }
}
