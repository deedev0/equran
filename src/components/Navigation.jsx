import { Link, useLocation } from 'react-router-dom';
import { FaQuran, FaRegListAlt, FaThList } from 'react-icons/fa';

function Navigation() {
  const location = useLocation();

  const isAyatPage = location.pathname.startsWith('/read') || location.pathname === '/';
  const isTafsirPage = location.pathname.startsWith('/tafsir');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className='navbar-brand' to={'/'}><FaQuran /> E-Qur&apos;an</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isAyatPage && 'active' }`} to={'/'}><FaThList /> Ayat</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isTafsirPage && 'active' }`} to={'/tafsir'}><FaRegListAlt /> Tafsir</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
