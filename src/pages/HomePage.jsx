import React from 'react';
import SuratCardList from '../components/SuratCardList';
import { getSurats } from '../utils/api';

function HomePage() {
  const [surats, setSurats] = React.useState(null);

  React.useEffect(() => {
    getSurats().then((data) => {
      setSurats(data);
    });
  }, []);

    if (surats === null) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <SuratCardList surats={surats} />
    )
}

export default HomePage;
