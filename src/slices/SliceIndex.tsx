import { SliceZoneComponents } from "@prismicio/react";
import { TextBox } from "./TextBox";

type Slices = TextBox;

export const components: SliceZoneComponents<Slices> = {
  text_box: TextBox,
};
