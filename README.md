<<<<<<< HEAD
# InfluishTheme UI Library

InfluishTheme is a premium, production-ready React component library designed for high-performance dashboards and modern web applications. It features a robust design system, full dark mode support, and a highly flexible composition-based API.

## 🚀 Quick Start

### 1. Installation
Install the library via npm:

```bash
npm install influish-theme
```

### 2. Setup Provider
Wrap your application with the `ThemeProvider` and import the global CSS:

```tsx
import { ThemeProvider } from 'influish-theme';
import 'influish-theme/dist/esm/index.css';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 🎨 Theming

InfluishTheme uses a deep-merging system for theme customization. You can override colors, typography, and spacing globally.

### Custom Theme Example
```tsx
const myTheme = {
  colors: {
    primary: {
      500: '#6366f1', // Custom indigo
    }
  },
  borderRadius: {
    md: '12px'
  }
};

<ThemeProvider theme={myTheme}>...</ThemeProvider>
```

### Dark Mode
Use the `useTheme` hook to toggle between light and dark modes:
```tsx
const { theme, toggleMode } = useTheme();
// Current mode: theme.mode
```

## 🧱 Core Components

### Layout (Grid & Container)
InfluishTheme provides a powerful 12-column responsive grid system.

```tsx
<Container size="xl">
  <Grid gap="md">
    <GridItem span={8} spanSm={12}>Main Content</GridItem>
    <GridItem span={4} spanSm={12}>Sidebar</GridItem>
  </Grid>
</Container>
```

### Navigation (Navbar & Sidebar)
Both components support a modern composition API.

```tsx
<Navbar sticky bordered>
  <Navbar.Brand href="#">Influish</Navbar.Brand>
  <Navbar.Nav>
    <a href="/">Home</a>
  </Navbar.Nav>
  <Navbar.End>
    <Button size="sm">Action</Button>
  </Navbar.End>
</Navbar>

<Sidebar responsive>
  <Sidebar.Header>Logo</Sidebar.Header>
  <Sidebar.Nav>
    <Sidebar.Item label="Dashboard" icon="🏠" active />
  </Sidebar.Nav>
</Sidebar>
```

### Feedback (Snackbar & Dialog)
Built-in hooks for notifications and accessible modals.

```tsx
const { show } = useSnackbar();

// Trigger a snackbar
show("Action successful!", "success");

// Use Dialog
<Dialog open={isOpen} title="Confirm" onClose={close}>
  Are you sure?
</Dialog>
```

## 📱 Responsive Design
Use the `useMediaQuery` hook for custom responsive logic:

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
```

## 💨 Tailwind CSS Integration

InfluishTheme comes with a Tailwind preset that maps your design tokens to Tailwind utility classes.

### 1. Add Preset to `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('influish-theme/tailwind-preset')
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Use Utility Classes
Now you can use Influish tokens directly in your HTML:
```tsx
<div className="bg-primary-500 text-text-inverse rounded-it-lg p-it-4">
  This matches the library design system!
</div>
```

## 📄 License
MIT © Influish
=======
# influish-ui-library
>>>>>>> 39d88e87ece8d4697b9125f1f202cb5577a2f3fd
