import React from 'react';
import configureStore from '../_setup';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { specs, describe, it } from 'storybook-addon-specifications'
import { configure,  mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Greeting from '../components/Greeting';


let store = configureStore();
configure({ adapter: new Adapter() });

storiesOf('Greetings with Redux', module)    
    .add('User has no greeting', () => {
        store = configureStore();
        const storyWithProvider = (
            <Provider store={store}>
                <Greeting />
            </Provider>
        );

        store.dispatch({
            type: 'NoAction',
            payload: null
        });

        specs(() => describe('No greeting', function () {
            it('Should have no greeting', function () {
                const output = mount(storyWithProvider);
                expect(output.text()).to.contains('No greeting :S');
            });
        }));
        return storyWithProvider;
    })
    .add('User says hello', () => {
        const storyWithProvider = (
            <Provider store={store}>
                <Greeting />
            </Provider>
        );

        store.dispatch({
            type: 'SayHelloAction',
            payload: 'Jhon Doe'
        });

        specs(() => describe('User says hello', function () {
            it('Should have greeting message with the user name', function () {
                const output = mount(storyWithProvider);
                expect(output.text()).to.contains('Hello: Jhon Doe');
            });
        }));
        return storyWithProvider;
    })
    .add('User says goodbye', () => {
        const storyWithProvider = (
            <Provider store={store}>
                <Greeting />
            </Provider>
        );

        store.dispatch({
            type: 'SayGoodbyeAction',
            payload: 'Jhon Doe'
        });

        specs(() => describe('User says goodbye', function () {
            it('Should have goodbye message with the user name', function () {
                const output = mount(storyWithProvider);
                expect(output.text()).to.contains('Bye: Jhon Doe');
            });
        }));
        return storyWithProvider;
    });