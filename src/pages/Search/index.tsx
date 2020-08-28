import { Button } from '@material-ui/core'
import React from 'react'
import { SearchResult } from '../../components'
import { searchData } from '../../Mock/data'
import './Search.css'
interface Props {
  
}

const Search = (props: Props) => {
  return (
    <div className='searchPage'>
                  <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

                {searchData.map ((search) => (<SearchResult key={search.id} search={search }/>))}
            </div>
     
    </div>
  )
}

export default Search
