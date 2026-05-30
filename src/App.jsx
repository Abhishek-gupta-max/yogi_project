import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      {/* Dynamic API Toast Notification HUD */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0D1117',
            color: '#F0F6FF',
            border: '1px solid rgba(0, 87, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '14px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },
        }}
      />
      
      {/* Route Switcher Panel */}
      <AppRoutes />
    </BrowserRouter>
  );
}
