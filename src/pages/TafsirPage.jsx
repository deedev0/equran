import React from 'react';
import SuratCardList from '../components/SuratCardList';
import { getSurats } from '../utils/api';

function TafsirPage() {
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
      <>
        <h3>Tafsir Qur&apos;an</h3>
        <SuratCardList surats={surats} isTafsir />
      </>
    )
}

export default TafsirPage;
