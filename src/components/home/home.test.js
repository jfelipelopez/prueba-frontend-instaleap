import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Home from './Home';

it('Renders all movies and series', () => {
    const wrapper = mount(<Home list={[
        {
          "name": "Parasite",
          "type": "MOVIE"
        },
        {
          "name": "Game of Thrones",
          "type": "SERIES"
        }
    ]}/>);
    expect(wrapper.find('li')).to.have.lengthOf(2);;
});