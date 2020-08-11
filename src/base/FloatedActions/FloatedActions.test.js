import React from 'react';
import FloatedActions from 'base/FloatedActions';
import renderer from 'react-test-renderer';




test('FloatedActions renders correctly', () => {

    const component = renderer.create(
        <FloatedActions/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
''
});

