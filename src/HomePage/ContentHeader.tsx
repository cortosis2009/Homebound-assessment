import React from "react";
import TabBar from './TabBar'
const ContentHeader = () => {
  return (
    <div>
      <div className="app-title"> Homebound Employee Portal</div>
      <input className="search-field" type="text" placeholder="Search" />
      <TabBar />
    </div>
  );
};

export default ContentHeader;
