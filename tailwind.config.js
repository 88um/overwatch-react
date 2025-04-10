// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          // Brand Colors
          heroic: {
            DEFAULT: '#F99E1A', // Orange
          },
          pulse: {
            DEFAULT: '#007ACC', // Blue
          },
  
          // UI Backgrounds
          carbon: '#1C1C1E',       // Dark BG
          titanium: '#F5F5F7',     // Light BG
          gunmetal: '#2C2C2E',     // Card Background
          tactical: '#3A3A3C',     // Border/Divider
  
          // Text Colors
          ink: '#1A1A1A',         // Text on light BG
          signal: '#EDEDED',      // Text on dark BG
  
          // Feedback
          nano: '#2BD9C5',        // Teal (Success)
          critical: '#D32F2F',    // Red (Error/Warning)
        },
  
        backgroundImage: {
          'payload-push': 'linear-gradient(90deg, #007ACC 0%, #2BD9C5 100%)',
          'ult-ready': 'linear-gradient(90deg, #F99E1A 0%, #D32F2F 100%)',
        },
      },
    },
  };
  