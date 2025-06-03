// TODO: props-validation
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function SuratCard({ nomor, nama, namaLatin, jumlahAyat, tempatTurun, isTafsir}) {

  const page = isTafsir ? 'tafsir' : 'read';

  return (
    <Link to={`/${page}/${nomor}`} className='nav-link'>    
      <div className='row my-3 border border-2 border-success text-center p-2 mx-1 d-flex justify-content-center align-items-center'>
        <div className="col-2">
          <span className='border-end border-1 p-3 border-dark d-inline-flex justify-content-center align-items-center text-display-3'>{nomor}</span>
        </div>
        <div className="col-7">
          <h3>{namaLatin}</h3> 
          <p>{tempatTurun} | {jumlahAyat} Ayat</p>
        </div>
        <div className="col-3 text-center">
          <h3>{nama}</h3>
        </div>
      </div>
    </Link>
  );
}

export default SuratCard;
