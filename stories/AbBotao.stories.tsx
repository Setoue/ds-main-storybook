import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { Component } from 'react';
import AbBotao from '../src/components/AbBotao';

export default {
  title: 'Components/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Primario = Template.bind({});
