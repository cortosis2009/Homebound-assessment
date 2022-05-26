import React, { useState, useEffect } from "react";
import { Market, People, Person, Team } from "../Models";
import Individual from "./Individual";
import TabBar from "./TabBar";

const AppContent = () => {
  const [selected, setSelected] = useState<Market>(Market.All);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(People);
  const [team, setTeam] = useState<Team>();

  const handleSelectedClick = (input: Market) => {
    setSelected(input);
  };

  //Select a set of users to make up a "Team".
  //A "Team" is defined as one Concierge, one Account Executive,
  //and one Head of Construction (all within the chosen market).

  const filterUsers = () => {
    if (selected !== Market.All) {
      setFilteredPeople(People.filter(person => person.markets.indexOf(selected) > -1));
    } else setFilteredPeople(People);
  };

  const setUserTeam = (person: Person) => {
    let personArray = team ? team.persons : [];
    if (personArray && personArray.length < 3 && !preventDuplicates(person)) {
      personArray.push(person);
      setTeam({
        ...team,
        persons: personArray,
      });
    }
  };

  const preventDuplicates = (person: Person) => {
    let dupe = false;
    if (team) {
      team.persons.map(item => {
        return (dupe = item.name === person.name);
      });
    }
    return dupe;
  };

  const checkClicked = (name: string) => {
    let clicked = false;
    if (team) {
      team.persons.map(item => {
        if (item.name === name) {
           clicked = true;
        } return clicked
      });
    }
    return clicked;
  };

  useEffect(() => {
    filterUsers();
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div className="content-parent">
      <div className="tab-button-parent">
        <TabBar selected={selected} setSelected={handleSelectedClick} />
        <button className="clear-team" onClick={() => setTeam({ persons: [] })}>
          {" "}
          Clear Team
        </button>
      </div>
      <div className="individual-parent">
        {filteredPeople.map(person => {
          return (
            <Individual key={Math.random()} person={person} team={team} clicked={checkClicked(person.name)} setUserTeam={setUserTeam} />
          );
        })}
      </div>
    </div>
  );
};

export default AppContent;
