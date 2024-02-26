import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FooterContainer } from "./footer-container";

export default {
  title: "UI/FooterContainer",
  component: FooterContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof FooterContainer>;

const Template: StoryFn<typeof FooterContainer> = () => <FooterContainer />;

export const Default = Template.bind({});
