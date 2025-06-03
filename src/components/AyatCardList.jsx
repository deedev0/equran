import AyatCard from './AyatCard';

function AyatCardList({ ayats }) {
  return (
    ayats.map((ayat) => (
      <AyatCard key={ayat.nomorAyat} nomorAyat={ayat.nomorAyat} teksArab={ayat.teksArab} teksLatin={ayat.teksLatin} teksIndonesia={ayat.teksIndonesia} />
    ))
  );
}

export default AyatCardList;
