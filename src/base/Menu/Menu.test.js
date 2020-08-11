import React from 'react';
import Menu from 'base/Menu';
import renderer from 'react-test-renderer';




test('Menu renders correctly', () => {

    const component = renderer.create(
        <Menu/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
''
});

