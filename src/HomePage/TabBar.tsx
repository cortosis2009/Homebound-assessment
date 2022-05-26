import React from "react";
import { Market } from "../Models";

interface Props {
  selected: Market,
  setSelected: (input: Market) => void
}

const TabBar: React.FC<Props> = ({selected, setSelected}) => {

  const getClassName = (key: string) => {
    return selected === key ? 'tab selected' : 'tab unselected'
  }

  return (
    <div className="tab-bar">
      <div className={getClassName('All')} onClick={() => setSelected(Market.All)}>All</div>
      <div className={getClassName('NorCal')} onClick={() => setSelected(Market.NorCal)}>NorCal</div>
      <div className={getClassName('SoCal')} onClick={() => setSelected(Market.SoCal)}>SoCal</div>
    </div>
  );
};

export default TabBar;
