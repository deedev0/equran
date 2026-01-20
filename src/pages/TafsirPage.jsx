import React from 'react';
import SuratCardList from '../components/SuratCardList';
import { getSurats } from '../utils/api';
import SearchBar from '../components/SearchBar';

function TafsirPage() {
  const [surats, setSurats] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

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

    // Logika Filter: Mencocokkan nama surat dengan query pencarian
    const filteredSurats = surats.filter((surat) =>
      surat.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surat.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <>
        <h3>Tafsir Qur&apos;an</h3>

        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {filteredSurats.length > 0 ? (
          <SuratCardList surats={filteredSurats} isTafsir />
        ) : (
          <p>Surat &quot;{searchQuery}&quot; tidak ditemukan.</p>
        )}
      </>
    )
}

export default TafsirPage;
