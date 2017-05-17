import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe("Eventcrolus", () => {
  const app = mount(<App />)

  it("always renders a div", () => {
    const divs = app.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = app.find("div");
      const wrappingDiv = divs.first();

      expect(wrappingDiv.children()).toEqual(app.children());
    });
  });


})
