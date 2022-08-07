import { Route, Link, Routes, Navigate, Outlet } from 'react-router-dom';
import { AuthLogin } from './pages';

export default function AuthRoutes() {
  return (
    <div className={'container'}>
      <Routes>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<AuthLogin />} />
      </Routes>
    </div>
  );
}
