import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

interface Props {
  search:{
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price:string;
    total: string;
  }
}

const SearchResult = ({search}: Props) => {
  return (
<div className='searchResult'>
            <img src={search.img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{search.location}</p>
                    <h3>{search.title}</h3>
                    <p>____</p>
                    <p>{search.description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{search.star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{search.price}</h2>
                        <p>{search.total}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchResult
