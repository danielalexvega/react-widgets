import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: "Who's the best NBA player in the game today?",
    content: 'Lebron James, the 16-time all-NBA 4-time MVP 3-time Champ.'
  }
];

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
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">

      </Route>
    </div>
  )
}