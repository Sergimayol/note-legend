import { Settings } from "../types/types";

/**
 * Uploads the settings file to the application
 * @param path The path to the settings file
 * @returns {Settings} The path to the settings file
 */
export const uploadSettings = (_path: string): Settings => {
  // TODO: Implement this function
  return {
    keyMapMode: "vim",
    theme: "dark",
  };
};
