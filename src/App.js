import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers'
//   },
//   {
//     title: "Who's the best NBA player in the game today?",
//     content: 'Lebron James, the 16-time all-NBA 4-time MVP 3-time Champ.'
//   }

// ];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'A certain shade of green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* { showDropdown ? 
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        /> : null
      } */}
      <Translate />
    </div>
  )
}