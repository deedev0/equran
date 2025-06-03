import TafsirCard from './TafsirCard';

function TafsirCardList({ tafsirs }) {
  return (
    tafsirs.map((tafsir) => (
      <TafsirCard key={tafsir.ayat} ayat={tafsir.ayat} teks={tafsir.teks} />
    ))
  );
}

export default TafsirCardList;
