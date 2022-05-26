import React, { useEffect, useState } from "react";
import { Person } from "../Models";
import * as teamImages from '../team_images'

interface Props {
  person: Person;
}
const Individual: React.FC<Props> = ({ person }) => {
    const [currentName, setCurrentName] = useState<Person['name']>('')

    useEffect(() => {
        setCurrentName(formatName())
    },[])

    const formatName = () => {
        return person.name.replace(/ /g,'')
    }
  
  return (
    <div>
        <img src={teamImages[currentName as keyof typeof teamImages]}/>
      <span>{person.name}</span>
    </div>
  );
};

export default Individual;
