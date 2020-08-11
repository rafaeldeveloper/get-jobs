import React from 'react';
import ExtraInfo from 'base/ExtraInfo';
import renderer from 'react-test-renderer';




test('ExtraInfo renders correctly', () => {

    const component = renderer.create(
        <ExtraInfo/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
''
});

