// eslint-disable-next-line react/prop-types
function TafsirCard({ ayat, teks }) {
  return (
    <>
      <div key={ayat} className="row mt-3">
        <div className="col-2 text-success"><h4>{ayat}</h4></div>
        <p className='col-10 text-success'>{teks}</p>
      </div>
      <hr />
    </>
  )
}

export default TafsirCard;
