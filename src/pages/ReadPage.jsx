// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAyat } from '../utils/api';
import AyatHeader from '../components/AyatHeader';
import MurotalAudio from '../components/MurotalAudio';
import AyatCardList from '../components/AyatCardList';
import MurotalPicker from '../components/MurotalPicker';

function ReadPage() {
  const navigate = useNavigate();
  const { nomor } = useParams();
  const [ surat, setSurat ] = React.useState(null);
  const [ murotal, setMurotal ] = React.useState(null);

  const nomorSurat = parseInt(nomor);

  if ( nomorSurat < 1 || nomorSurat > 114 || isNaN(nomorSurat)) {
    navigate('/NotFoundPage', { replace: true });
  }

  React.useEffect(() => {
    async function getAyatFromApi() {
      const data = await getAyat(nomor);
      setSurat(data);
      setMurotal(data.audioFull['01']);
    }

    getAyatFromApi();
  }, [nomor]);

  const onMurotalChangeHandler = (event) => setMurotal(surat.audioFull[event.target.value]);

  if ( surat === null) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <AyatHeader nomor={nomor}  namaLatin={surat.namaLatin} tempatTurun={surat.tempatTurun} arti={surat.arti} jumlahAyat={surat.jumlahAyat}/>
      <MurotalPicker murotalChangeHandler={onMurotalChangeHandler} />
      <MurotalAudio audioFull={murotal} />
      <AyatCardList ayats={surat.ayat} />
    </>
  )
}

export default ReadPage;
