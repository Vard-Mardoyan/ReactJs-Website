import React, { useState } from 'react';
import countries from '../data/countries.json';
import Countries from './Countries';
export const Pagination = () => {
  const [data] = useState(countries);

  return (
    <>
      <div className="container px-2">
        <Countries data={data} itemsPerPage={10} />
        <Countries data={data} itemsPerPage={5} startFrom={15} />
      </div>
    </>
  )
}
export default Pagination

