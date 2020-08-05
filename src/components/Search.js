import React from "react"

const Search = () => {
  return (
    <section className='searchBox'>
      <h2>What coin would you like to get the price of?</h2>
      <p>
        <form onSubmit=''>
          Coin: <input type='text' className='coinInput' />
        </form>
      </p>
    </section>
  )
}

export default Search
