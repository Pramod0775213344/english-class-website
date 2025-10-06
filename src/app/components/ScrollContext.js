'use client';
import React from 'react'
import {useEffect, useState,createContext,useContext, } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext();

export const useSmoothScrollContext = () => useContext(SmoothScrollContext);

function ScrollContext({ children }) {
  const [lenisRef, setLenis] = useState(null);
  const [rafState, setRaf] = useState(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time) {
      scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setLenis(scroller);
    setRaf(rf);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    }
  },[])
  return (
    <SmoothScrollContext.Provider value={{ lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export default ScrollContext
