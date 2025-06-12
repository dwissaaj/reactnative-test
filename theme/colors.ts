import { Platform } from 'react-native';

const IOS_SYSTEM_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(249, 249, 249)',
    grey5: 'rgb(239, 239, 238)',
    grey4: 'rgb(228, 229, 228)',
    grey3: 'rgb(213, 214, 213)',
    grey2: 'rgb(182, 184, 181)',
    grey: 'rgb(162, 164, 161)',
    background: 'rgb(248, 248, 247)',
    foreground: 'rgb(3, 3, 3)',
    root: 'rgb(248, 248, 247)',
    card: 'rgb(248, 248, 247)',
    destructive: 'rgb(255, 56, 43)',
    primary: 'rgb(122, 166, 89)',
  },
  dark: {
    grey6: 'rgb(28, 28, 27)',
    grey5: 'rgb(46, 47, 46)',
    grey4: 'rgb(59, 60, 58)',
    grey3: 'rgb(79, 81, 78)',
    grey2: 'rgb(123, 125, 121)',
    grey: 'rgb(161, 163, 160)',
    background: 'rgb(1, 2, 1)',
    foreground: 'rgb(252, 253, 251)',
    root: 'rgb(1, 2, 1)',
    card: 'rgb(1, 2, 1)',
    destructive: 'rgb(254, 67, 54)',
    primary: 'rgb(122, 166, 89)',
  },
} as const;

const ANDROID_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(250, 252, 249)',
    grey5: 'rgb(245, 247, 244)',
    grey4: 'rgb(240, 242, 238)',
    grey3: 'rgb(238, 240, 236)',
    grey2: 'rgb(235, 238, 233)',
    grey: 'rgb(232, 235, 230)',
    background: 'rgb(252, 253, 252)',
    foreground: 'rgb(10, 10, 10)',
    root: 'rgb(252, 253, 252)',
    card: 'rgb(252, 253, 252)',
    destructive: 'rgb(186, 26, 26)',
    primary: 'rgb(122, 166, 89)',
  },
  dark: {
    grey6: 'rgb(29, 30, 27)',
    grey5: 'rgb(36, 38, 34)',
    grey4: 'rgb(41, 44, 39)',
    grey3: 'rgb(46, 50, 44)',
    grey2: 'rgb(49, 52, 46)',
    grey: 'rgb(54, 58, 51)',
    background: 'rgb(24, 25, 23)',
    foreground: 'rgb(230, 232, 229)',
    root: 'rgb(24, 25, 23)',
    card: 'rgb(24, 25, 23)',
    destructive: 'rgb(147, 0, 10)',
    primary: 'rgb(122, 166, 89)',
  },
} as const;

const WEB_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(249, 249, 249)',
    grey5: 'rgb(239, 239, 238)',
    grey4: 'rgb(228, 229, 228)',
    grey3: 'rgb(213, 214, 213)',
    grey2: 'rgb(182, 184, 181)',
    grey: 'rgb(162, 164, 161)',
    background: 'rgb(252, 253, 251)',
    foreground: 'rgb(12, 12, 12)',
    root: 'rgb(252, 253, 251)',
    card: 'rgb(252, 253, 251)',
    destructive: 'rgb(186, 26, 26)',
    primary: 'rgb(122, 166, 89)',
  },
  dark: {
    grey6: 'rgb(28, 28, 27)',
    grey5: 'rgb(46, 47, 45)',
    grey4: 'rgb(59, 60, 58)',
    grey3: 'rgb(79, 80, 78)',
    grey2: 'rgb(122, 124, 121)',
    grey: 'rgb(161, 162, 159)',
    background: 'rgb(22, 23, 21)',
    foreground: 'rgb(227, 229, 226)',
    root: 'rgb(22, 23, 21)',
    card: 'rgb(22, 23, 21)',
    destructive: 'rgb(147, 0, 10)',
    primary: 'rgb(118, 157, 89)',
  },
} as const;

const COLORS =
  Platform.OS === 'ios'
    ? IOS_SYSTEM_COLORS
    : Platform.OS === 'android'
      ? ANDROID_COLORS
      : WEB_COLORS;

export { COLORS };
