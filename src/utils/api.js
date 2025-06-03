const BASE_URL = 'https://equran.id/api/v2';

async function getSurats() {
  const response = await fetch(`${BASE_URL}/surat`);

  const responseJson = await response.json();

  return responseJson.data;
}

async function getAyat(nomorSurat) {
  const response = await fetch(`${BASE_URL}/surat/${nomorSurat}`);

  const responseJson = await response.json();

  return responseJson.data;
}

async function getTafsirs(nomorSurat) {
  const response = await fetch(`${BASE_URL}/tafsir/${nomorSurat}`);

  const responseJson = await response.json();

  return responseJson.data;
}

export { getSurats, getAyat, getTafsirs };
