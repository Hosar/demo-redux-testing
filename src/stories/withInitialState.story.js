import React from 'react';
import configureStore from '../_setup';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { specs, describe, it } from 'storybook-addon-specifications'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Greeting from '../components/Greeting';

const initState = {
    greeting: {
        greetingMessage: 'No messages'
    }
};

configure({ adapter: new Adapter() });

storiesOf('Redux With Initial State', module)
    .add('User Just Arrived', () => {
        const store = configureStore(initState);
        const storyWithProvider = (
            <Provider store={store}>
                <Greeting />
            </Provider>
        );        

        specs(() => describe('No greeting', function () {
            it('Should have no greeting', function () {
                const output = mount(storyWithProvider);
                expect(output.text()).to.contains('No greeting :S');
            });
        }));
        return storyWithProvider;
    });