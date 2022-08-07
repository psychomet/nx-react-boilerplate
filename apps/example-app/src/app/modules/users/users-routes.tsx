import { Route, Link, Routes } from 'react-router-dom';
import { UserForm, UserList } from './pages';

/* eslint-disable-next-line */
export interface MainRoutesProps {}

export default function MainRoutes(props: MainRoutesProps) {
  return (
    <div className={'container'}>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="create" element={<UserForm />} />
        <Route path=":id" element={<UserForm />} />
      </Routes>
    </div>
  );
}
