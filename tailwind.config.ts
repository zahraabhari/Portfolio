import type { Config } from "tailwindcss";
// import colors from 'tailwindcss/colors'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          
        // kgroubacnd: "var(--background)",
        // foreground: "var(--foreground)",
        gray1000:"#141219",
        gray900:"#111827",
        gray800:"#1F2937",
        gray700:"#374151",
        gray600:"#4B5563",
        gray500:"#6B7280",
        gray400:"#9CA3AF",
        gray300:"#D1D5DB",
        gray200:"#E5E7EB",
        gray100:"#F3F4F6",
        gray50:"#F9FAFB",
        white1:"#FFFFFF",
        // ...colors
      },
      // screens: {
      //   xs: '0px',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
    },
    
  },
  plugins: [
    function ({ addComponents }) {
      const typography = {
        '.title': {
          fontFamily:"MontserratAlternates",
          fontSize: '64px', 
            lineHeight: '64px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '72px',
          lineHeight: '72px',
          },
        },
        '.titleS': {
          fontFamily:"MontserratAlternates",
          fontSize: '24px', 
            lineHeight: '24px',
          '@screen sm': {
            fontSize: '32px',
          lineHeight: '32px',
          },
        },
        '.regular1': {
          fontFamily:"Inter-Regular",
          fontSize: '20px', 
            lineHeight: '28px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '24px',
          lineHeight: '32px',
          },
        },
        '.regular2': {
          fontFamily:"Inter-Regular",
          fontSize: '18px', 
          lineHeight: '28px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '20px',
          lineHeight: '32px',
          },
        },
        '.regular3': {
          fontFamily:"Inter-Regular",
          fontSize: '14px', 
            lineHeight: '20px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '16px',
          lineHeight: '24px',
          },
        },
        '.medium1': {
          fontFamily:"Inter-Medium",
          fontSize: '14px', 
            lineHeight: '20px',
          
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '36px',
          lineHeight: '24px',
          },
        },
        '.medium2': {
          fontFamily:"Inter-Medium",
          fontSize: '14px', 
            lineHeight: '20px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '24px',
          lineHeight: '24px',
          },
        },
        '.medium3': {
          fontFamily:"Inter-Medium",
          fontSize: '14px', 
            lineHeight: '20px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '20px',
          lineHeight: '24px',
          },
        },
        '.medium4': {
          fontFamily:"Inter-Medium",
          fontSize: '14px', 
            lineHeight: '20px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '18px',
          lineHeight: '24px',
          },
        },
        '.medium5': {
          fontFamily:"Inter-Medium",
          fontSize: '14px', 
            lineHeight: '20px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '16px',
          lineHeight: '24px',
          },
        },
        '.medium6': {
          fontFamily:"Inter-Medium",
          fontSize: '12px', 
            lineHeight: '16px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '14px',
          lineHeight: '20px',
          },
        },
        '.semi-bold': {
          fontFamily:"Inter-SemiBold",
          fontSize: '16px', 
            lineHeight: '28px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '18px',
          lineHeight: '32px',
          },
        },
        '.inter-bold': {
          fontFamily:"Inter-Bold",
          fontSize: 'px20', 
            lineHeight: '28px',
          letterSpacing:'0.04em',
          '@screen sm': {
            fontSize: '24px',
          lineHeight: '32px',
          },
        },

      }
      addComponents(typography)
    },
  ],

} 
export default config
