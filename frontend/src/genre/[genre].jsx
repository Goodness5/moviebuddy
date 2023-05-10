import React from "react";

const Genre = ({ match }) => {
  const genre = match.params.genre;
  return (
    <>
    {genre}
    <div className="text-black">welcome</div>
    </>
  )
};

export default Genre;