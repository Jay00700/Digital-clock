module.exports = {
  theme: {
    extend: {
      keyframes: {
        'clock-pin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'clock-pin': 'clock-pin 1s linear infinite', // adjust speed as needed
      },
    },
  },
}
