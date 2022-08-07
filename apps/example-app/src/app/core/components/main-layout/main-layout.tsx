import styles from './main-layout.module.less';
import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */

export function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
