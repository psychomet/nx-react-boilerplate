// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './core/components';

const AuthRoutes = React.lazy(() => import('./modules/auth/auth-routes'));
const MainRoutes = React.lazy(() => import('./modules/main/main-routes'));

export function App() {
  return (
    <Routes>
      <Route
        path="auth/*"
        element={
          <React.Suspense fallback={<>...</>}>
            <AuthRoutes />
          </React.Suspense>
        }
      />
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <MainRoutes />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<>Not match</>} />
    </Routes>
  );
}

export default App;
