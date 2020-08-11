import React from 'react';
import Modal from 'base/Modal';
import renderer from 'react-test-renderer';




test('Modal renders correctly', () => {

    const component = renderer.create(
        <Modal/>
    );

    let tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
''
});

