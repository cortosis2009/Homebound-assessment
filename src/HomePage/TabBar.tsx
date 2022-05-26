import React, { useState } from "react";

const TabBar = () => {
  const [selected, setSelected] = useState<string>("All");

  const getClassName = (key: string) => {
    return selected === key ? 'tab selected' : 'tab unselected'
  }

  return (
    <div className="tab-bar">
      <div className={getClassName('All')} onClick={() => setSelected('All')}>All</div>
      <div className={getClassName('NorCal')} onClick={() => setSelected('NorCal')}>NorCal</div>
      <div className={getClassName('SoCal')} onClick={() => setSelected('SoCal')}>SoCal</div>
    </div>
  );
};

export default TabBar;
