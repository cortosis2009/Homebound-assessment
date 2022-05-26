import React, { useEffect, useState } from "react";
import { Person, Team } from "../Models";
import * as teamImages from '../team_images'

interface Props {
  person: Person;
  team: Team | undefined;
  setUserTeam: (person: Person) => void
  clicked: boolean
}
const Individual: React.FC<Props> = ({ person, team, setUserTeam, clicked }) => {
    const [currentName, setCurrentName] = useState<Person['name']>('')

    useEffect(() => {
    }, [team])

    useEffect(() => {
        setCurrentName(formatName())
        // eslint-disable-next-line
    },[])

    const formatName = () => {
        return person.name.replace(/ /g,'')
    }

    const formatRole = () => {
      return person.role.replace(/([A-Z])/g, ' $1').trim();
    }
    
    const formatMarket = () => {
      return person.markets.map((item) => {
        return item + ' '
      })
    }

    const handleOnClick = () => {
      setUserTeam(person)
    }

  return (
    <div className={clicked ? "individual clicked" : "individual"} onClick={handleOnClick}>
        <img src={teamImages[currentName as keyof typeof teamImages]}  width="200" height="200" alt=""/>
      <span className='person-name'>{person.name}</span>
      <span className='person-detail'><span className="detail-title">Role:</span> {formatRole()}</span>
      <span className='person-detail'><span className="detail-title">Markets: </span>{formatMarket()}</span>
    </div>
  );
};

export default Individual;
