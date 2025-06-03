// eslint-disable-next-line react/prop-types
function AyatCard({ nomorAyat, teksArab, teksLatin, teksIndonesia}) {
  return (
    <>
      <div key={nomorAyat} className="row">
        <div className="col-2 text-success"><h4>{nomorAyat}</h4></div>
        <div className="col-10 text-right d-flex justify-content-end"><h2>{teksArab}</h2></div>
        <p className='text-success'>{teksLatin}</p>
        <p className=''>{teksIndonesia}</p>
      </div>
      <hr />
    </>
  )
}

export default AyatCard;
