import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../fonts.css';
import { Provider } from 'react-redux';
import { store } from '@/app/store.ts';
import { RouterProvider } from 'react-router/dom';
import { router } from '@/app/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
