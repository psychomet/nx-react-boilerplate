import styles from './user-form.module.less';

/* eslint-disable-next-line */
export interface UserFormProps {}

export function UserForm(props: UserFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UserForm!</h1>
    </div>
  );
}
