import React from 'react';
import Router from 'components/Router';
import renderer from 'react-test-renderer';




test('Router renders correctly', () => {

    const component = renderer.create(
        <Router/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();

});

