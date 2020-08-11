import React from 'react';
import Iterator from 'base/Iterator';
import renderer from 'react-test-renderer';




test('Iterator renders correctly', () => {

    const component = renderer.create(
        <Iterator/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
''
});

