import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";
import Envelope from "../assets/EnvelopeSimple.png";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <img src={Envelope} />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail" />
      </>
    ),
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.Input placeholder="Type your e-mail" />
      </>
    ),
  },
};
