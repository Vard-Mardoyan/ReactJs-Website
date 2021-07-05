import React, { useRef } from 'react'

export default function useRefContainer() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)

  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}
