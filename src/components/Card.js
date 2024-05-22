import React from 'react'
//import image1 from '../assets/sid2.JPG'

export default function Card({id,title,image, instructor,url}) {
  return (
    <div className='card'>
        <div className='card-body'>
        <img src={image} width="300" height="200" alt='...'></img>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secundary' >
            Instructor:{instructor}
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-4'>
        Ir al sitio web
        </a>
        </div>
    </div>
  )
}
