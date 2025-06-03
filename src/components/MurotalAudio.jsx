// TODO: props validation
// eslint-disable-next-line react/prop-types
import React, { useEffect, useRef } from 'react';

function MurotalAudio({ audioFull }) {
  const audioRef = useRef(null);

  React.useEffect(() => {
    audioRef.current.load();
  }, [audioFull])

  return (
    <audio controls ref={audioRef} className="w-100 my-3 ">
      <source src={audioFull} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default MurotalAudio;
