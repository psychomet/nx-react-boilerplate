import { Route, Link, Routes } from 'react-router-dom';
import { Dashboard } from './pages';

/* eslint-disable-next-line */
export interface MainRoutesProps {}

export default function MainRoutes(props: MainRoutesProps) {
  return (
    <div className={'container'}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
