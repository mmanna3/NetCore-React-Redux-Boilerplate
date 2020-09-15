import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';
import Table from './Table'
import Thead from './Thead/Thead';

configure({ adapter: new Adapter() });

describe('Calendar Table', () => {

    it('has THead', () => {
        const wrapper = shallow(<Table />);
        const thead = wrapper.find(Thead);
        expect(thead).toHaveLength(1);
    })
})