import React from 'react';


import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const Scrolling = ({ setValue }) => {
  
  const tobTabsData = [
    { label: "test 1" },
    { label: "test 2" },
    { label: "test 3" },
    { label: "test 4" },
    { label: "test 5" },
    { label: "test 6" },
    { label: "test 7" },
    { label: "test 8" },
    { label: "test 9" },
    { label: "test 10" },
    { label: "test 11" },
    { label: "test 12" },
    { label: "test 13" },
    { label: "test 14" },
    { label: "test 15" },
    { label: "test 16" },
    { label: "test 17" },
    { label: "test 18" },
    { label: "test 19" },
    { label: "test 20" }
  ];
  
  const tabData = [
    { name: " Test 1", color: 'red' },
    { name: " Test 2", color: 'green' },
    { name: " Test 3", color: 'blue' },
    { name: " Test 4", color: 'orange' },
    { name: " Test 5", color: 'brown' },
    { name: " Test 6", color: 'red' },
    { name: " Test 7", color: 'green' },
    { name: " Test 8", color: 'blue' },
    { name: " Test 9", color: 'orange' },
    { name: " Test 10", color: 'brown' },
    { name: " Test 11", color: 'red' },
    { name: " Test 12", color: 'green' },
    { name: " Test 13", color: 'blue' },
    { name: " Test 14", color: 'orange' },
    { name: " Test 15", color: 'brown' },
    { name: " Test 16", color: 'red' },
    { name: " Test 17", color: 'green' },
    { name: " Test 18", color: 'blue' },
    { name: " Test 19", color: 'orange' },
    { name: " Test 20", color: 'brown' }
  ];
  
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const scrollTo = () => {
    scroll.scrollTo(100);
  };
  const scrollMore = () => {
    scroll.scrollMore(100);
  };
  const handleSetActive = (to) => {
    console.log(to);
    setValue(to);
  };
  
  
  const handleChange = (event, newValue) => {
  
  };
  
  
  return (
    <div className="top-tabs">
        {
          tabData.map((singleData, index) => (
            <Element key={index} name={String(index)} className={`element ${singleData.color}`}>
              {singleData.name}
            </Element>
          ))
        }
        
    </div>
  );
};

Scrolling.propTypes = {};

export default Scrolling;
