import { Colors } from '@rneui/base';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const lightColors: Partial<Colors> = {
  primary: '#6200EE', // A shade of purple, often used for buttons or highlights
  secondary: '#03DAC6', // A teal color, used for secondary buttons or accents
  background: '#FFFFFF', // White background
  success: '#4CAF50', // Green for success messages
  warning: '#FB8C00', // Orange for warnings
  error: '#F44336', // Red for errors
};

export const darkColors: Partial<Colors> = {
  primary: '#667DFF',
  secondary: '#8F8F91',
  white: '#161618',
  background: '#000000',
  success: '#66BB6A', // Light green for success messages
  warning: '#FFA726', // Light orange for warnings
  error: '#E57373', // Light red for errors
  searchBg: '#2F2F2F',
};

export const EzColors = {
  light: {
    ...lightColors,
    card: '#F8F8F8', // Light gray for cards or surfaces
    text: '#000000', // Black text color
    border: '#E0E0E0', // Light gray border color
    notification: '#FF0266', // A shade of pink for notifications
    info: '#2196F3', // Blue for informational messages
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },

  dark: {
    ...darkColors,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tint: tintColorDark,
    border: '#272727', // Dark gray for borders
    text: '#FFFFFF', // White text color
    card: '#1E1E1E', // Slightly lighter gray for cards or surfaces
    notification: '#FF80AB', // Light pink for notifications
    info: '#64B5F6', // Light blue for informational messages
  },
};
