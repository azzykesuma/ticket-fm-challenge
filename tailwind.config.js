/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
				'neutral-0': 'var(--neutral-0)',
				'neutral-300': 'var(--neutral-300)',
				'neutral-500': 'var(--neutral-500)',
				'neutral-700': 'var(--neutral-700)',
				'neutral-900': 'var(--neutral-900)',
				'orange-500': 'var(--orange-500)',
				'orange-700': 'var(--orange-700)',
    		},
			backgroundImage: {
				'mobile' : "url('/src/lib/assets/images/background-mobile.png')",
				'tablet' : "url('/src/lib/assets/images/background-tablet.png')",
				'desktop' : "url('/src/lib/assets/images/background-desktop.png')",
				'pattern-mobile' : "url('/src/lib/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg')",
				'pattern-desktop' : "url('/src/lib/assets/images/pattern-squiggly-line-bottom-desktop.svg')",
				'pattern-top' : "url('/src/lib/assets/images/pattern-squiggly-line-top.svg')",
				'pattern-lines' : "url('/src/lib/assets/images/pattern-lines.svg')",
				'gradient-text' : 'var(--gradient-text)',
				'ticket' : "url('/src/lib/assets/images/pattern-ticket.svg')",
			},
    	}
    },
    plugins: [require("tailwindcss-animate")],
  }
  