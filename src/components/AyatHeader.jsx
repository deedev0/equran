/* eslint-disable react/prop-types */
// TODO: props validation
function AyatHeader({ nomor, namaLatin, tempatTurun, arti, jumlahAyat}) {
  return (
    <>
      <h5>{nomor}. {namaLatin}</h5>
      <div className="row border border-1 text-center d-flex align-items-center">
        <div className="col-2">{tempatTurun}</div>
        <div className="col-8"><h5>{arti}</h5></div>
        <div className="col-2">{jumlahAyat} Ayat</div>
      </div>
    </>
  )
}

export default AyatHeader;
