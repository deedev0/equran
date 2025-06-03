import SuratCard from './SuratCard';

function SuratCardList({ surats, isTafsir }) {
  return (
      surats.map((surat) => (
        <SuratCard key={surat.nomor} isTafsir={isTafsir} nomor={surat.nomor} namaLatin={surat.namaLatin} tempatTurun={surat.tempatTurun} nama={surat.nama} jumlahAyat={surat.jumlahAyat} />
      ))
  )
}

export default SuratCardList;
