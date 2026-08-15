import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/directors">Back to Directors</Link>
    </div>
  );
};

export default ErrorPage;