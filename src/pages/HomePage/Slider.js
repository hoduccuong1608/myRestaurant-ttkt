import { useEffect, useState, useRef } from "react";
import React from 'react';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
 const ImgSlider = [
    "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/695/331/660/digital-art-artwork-women-cityscape-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/952/824/961/makoto-shinkai-kimi-no-na-wa-wallpaper-preview.jpg"
 ];
   let count = 0;
   let slideInterval;
export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();
   
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
      }
    useEffect(() => {
        startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
        clearInterval(slideInterval);
    };
    },[])

    const startSlider = () => {
        slideInterval = setInterval(() => {
          handleOnNextClick();
        }, 3000);
      }

    const pauseSlider = () => {
        clearInterval(slideInterval);
      }

    const handleOnNextClick=()=> {
        count = (count +1) % ImgSlider.length;
        setCurrentIndex(count);
        // slideRef.current.classList.add("fade-anim");
    }

    const handleOnPrevClick=()=> {
        count = (currentIndex + ImgSlider.length - 1) % ImgSlider.length;
        setCurrentIndex(count);
        // slideRef.current.classList.add("fade-anim");
    }

    return (
        <div ref={slideRef} className="relative w-full mb-10">
            <div className="aspect-w-21 aspect-h-9">
                <img className="w-full h-auto" src={ImgSlider[currentIndex]} alt=""/>
                <div className="absolute px-4 flex justify-between w-full items-center top-1/2 transform -translate-y-1/2 ">
                    <button onClick={handleOnNextClick} className=""><BsFillArrowLeftCircleFill size={"30px"}/></button>
                    <button onClick={handleOnPrevClick} className=""><BsFillArrowRightCircleFill size={"30px"}/></button>
                </div>
            </div>
        </div>
    )
 }