import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

function NotFoundPage() {
  return (
    <>
      <h1>404 Page Not Found!</h1>
      <Link className='nav-link' to={'/'}><FaBackward /> Back to home.</Link>
    </>
  )
}

export default NotFoundPage;
