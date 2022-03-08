import React, { useState,useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import {FiChevronLeft, FiChevronRight } from "react-icons/fi"
import data from "./data";

const Review = () => {
  // const [varName,setVarName] = useState(default value of variable);
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  const nextSlide = () => {
    // setIndex(newValue)
    setIndex((oldIndex)=>{
      let tempIndex = oldIndex+1
      if(tempIndex>people.length-1){
        tempIndex = 0
      }
      return tempIndex
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex)=>{
      let tempIndex = oldIndex-1
      if(tempIndex<0){
        tempIndex = people.length-1
      }
      return tempIndex
    })  
  }

  useEffect(() => {
    // effect
    let slider = setTimeout(()=>{
      setIndex((oldIndex)=>{
        let ind = oldIndex+1;
        if(ind>people.length-1){
          ind = 0
        }
        return ind
      })
      },3000)
    return () => {
      // cleanup
      clearTimeout(slider)
    };
  }, [index,people.length]);

  return (
    <div className="section-center">
      {
        people.map((person,personIndex)=>{
          const { id,name, image,title, quote } = person;

          let position = 'nextSlide'

          if(personIndex===index){
            position = 'activeSlide'
          }
          if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
            position = "lastSlide"
          }

          return(
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>  
              <p className="text">{quote}</p>  
              <FaQuoteRight className="icon" />
            </article>
          )
          
        })
      }
      <button className="prev" onClick={prevSlide}><FiChevronLeft /></button>
      <button className="next" onClick={nextSlide}><FiChevronRight /></button>
    </div>
  );
};

export default Review;
