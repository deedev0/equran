import React from 'react';
import { useParams } from 'react-router-dom';
import { getTafsirs } from '../utils/api';
import AyatHeader from '../components/AyatHeader';
import TafsirCardList from '../components/TafsirCardList';

function ReadTafsirPage() {
  const { nomor } = useParams();
  console.log(nomor)
  const [ tafsir, setTafsir ] = React.useState(null);

  React.useEffect(() => {
    async function getTafsirFromApi() {
      const data = await getTafsirs(nomor);
      setTafsir(data);
    }

    getTafsirFromApi();
  }, [nomor]);

  if ( tafsir === null ) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <AyatHeader nomor={nomor} namaLatin={tafsir.namaLatin} tempatTurun={tafsir.tempatTurun} arti={tafsir.arti} jumlahAyat={tafsir.jumlahAyat}/>
      <TafsirCardList tafsirs={tafsir.tafsir} />
    </>
  )
}

export default ReadTafsirPage;
