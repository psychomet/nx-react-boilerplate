import styles from './dashboard.module.less';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Dashboard!</h1>
    </div>
  );
}
