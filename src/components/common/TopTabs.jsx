import React from 'react';

import '../scss/_top_tabs.scss';
import TabsMaterial from "./TabsMaterial";
import Scrolling from "./Scrolling";

const TopTabs = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <TabsMaterial value={value} setValue={setValue}/>
      <Scrolling setValue={setValue}/>
    </>
  );
};

TopTabs.propTypes = {};

export default TopTabs;
