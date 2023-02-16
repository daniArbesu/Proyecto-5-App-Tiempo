import { Link } from 'react-router-dom';
import Layout from './Layout';

function Favorites() {
  return (
    <Layout>
      <h2>Favorites</h2>
      <Link to="/">⬅️ Back to Day Weather</Link>
    </Layout>
  );
}

export default Favorites;
