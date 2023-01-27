export interface ViewNoteProps {
  filename: string;
  content: string;
}

export type keyMapMode = "vim" | "emacs" | "default";

export type ComponentSize = "half" | "full";

export type Theme = "light" | "dark";

export type Settings = {
  keyMapMode: keyMapMode;
  theme: Theme;
};
