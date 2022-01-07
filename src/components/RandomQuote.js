import React from 'react';
import { QUOTES } from "../assets/quotes"


export default function RandomQuote() {
  const index = Math.floor(Math.random() * QUOTES.length)
  const quoteAndFig = QUOTES[index].split(" — ")
  return (
    <figure className='my-5'>
      <blockquote className="blockquote">
        <p>{quoteAndFig[0]}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <cite title="Source">{quoteAndFig[1]}</cite>
      </figcaption>
    </figure>
  )
}