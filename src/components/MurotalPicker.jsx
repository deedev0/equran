// eslint-disable-next-line react/prop-types
function MurotalPicker({ murotalChangeHandler }) {
  return (
    <select className="form-select mt-3" aria-label="Default select example" onChange={murotalChangeHandler}>
      <option selected value="01" disabled>Pilih murotal</option>
      <option value="01">Abdullah-Al-Juhany</option>
      <option value="02">Abdul-Muhsin-Al-Qasim</option>
      <option value="03">Abdurrahman-as-Sudais</option>
      <option value="04">Ibrahim-Al-Dossari</option>
      <option value="05">Misyari-Rasyid-Al-Afasi</option>
    </select>
  )
}

export default MurotalPicker;
