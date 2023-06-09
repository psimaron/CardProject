import React from 'react';
import Item from '../Item/Item';
import { ImSearch, ImUserCheck } from 'react-icons/im'
import { RiPencilRulerLine } from 'react-icons/ri'

class List extends React.Component {

    render () {
      return ( 
      <div>
        <Item icon={<RiPencilRulerLine />} title={"Brief"} text={"Complete brief writing or simple guidance on what to include, we've got you covored"}/>
        <Item icon={<ImSearch />} title={"Search"} text={"In-depth agency search covering; criteria matching, door knocking and due-diligence vetting"}/>
        <Item icon={<ImUserCheck />} title={"Pitch"} text={"Comprehensive pitch management inculiding comms, diary management and pitch hosting"}/>
      </div>
      );
    }
  }

  export default List;