// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import TableHead, { styleSheet } from './TableHead';

describe('<TableHead />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(styleSheet);
  });

  it('should render a thead', () => {
    const wrapper = shallow(<TableHead />);
    assert.strictEqual(wrapper.name(), 'thead');
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<TableHead className="woof" />);
    assert.strictEqual(wrapper.hasClass('woof'), true);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  it('should render children', () => {
    const children = <tr className="test" />;
    const wrapper = shallow(
      <TableHead>
        {children}
      </TableHead>,
    );
    assert.strictEqual(wrapper.childAt(0).equals(children), true);
  });
});
