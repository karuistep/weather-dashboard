import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>Weather dashboard header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
