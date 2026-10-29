import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MotionConfig } from 'framer-motion';
import AppRoutes from './routes';

export default function App() {
  return (
    // reducedMotion="user": Framer animations respect the OS reduce-motion setting
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        {/* Dynamic API Toast Notification HUD */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            // Theme tokens from src/styles/index.css
            style: {
              background: 'rgb(var(--surface))',
              color: 'rgb(var(--fg))',
              border: '1px solid rgb(var(--line))',
              borderRadius: '12px',
              fontSize: '14px',
              boxShadow: 'var(--shadow-md)',
            },
            success: { iconTheme: { primary: 'rgb(var(--success))', secondary: 'rgb(var(--surface))' } },
            error: { iconTheme: { primary: 'rgb(var(--danger))', secondary: 'rgb(var(--surface))' } },
          }}
        />

        {/* Route Switcher Panel */}
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}
