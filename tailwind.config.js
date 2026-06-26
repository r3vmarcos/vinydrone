export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                drone: '0 24px 80px rgba(0, 0, 0, 0.35)',
            },
            backgroundImage: {
                'radial-noise': 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 35%), radial-gradient(circle at 90% 20%, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at 10% 80%, rgba(168,85,247,0.15), transparent 30%)',
            },
        },
    },
    plugins: [],
};
