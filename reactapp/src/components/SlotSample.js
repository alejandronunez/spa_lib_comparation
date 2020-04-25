import React from 'react';
import './Binding.css';

export function SlotSampleHeader({children}) {
  return (
      <header>{children}</header>
  );
}

export function SlotSampleMain({children}) {
  return (
      <main>{children}</main>
  );
}
export function SlotSampleFooter({children}) {
  return (
      <footer>{children}</footer>
  );
}

function SlotSample({children}) {
  const generated = Math.floor(Math.random()* 100);

  const content = children(generated);
  const components = {};

  content.props.children.forEach(element => {
    components[element.type.name] = element;
  });

  const generate_text = `Random Number: ${generated}`;

  if (!components['SlotSampleFooter']) {
    components['SlotSampleFooter'] = (
      <SlotSampleFooter>
       { generate_text }
      </SlotSampleFooter>
    );
  }

  return [
    components['SlotSampleHeader'],
    components['SlotSampleMain'],
    components['SlotSampleFooter'],
  ];
}

export default SlotSample;
