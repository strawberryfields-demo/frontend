export const getReactQueryKeysFromURL = (url: string) => {
  return url.split("/").filter((part) => part !== "");
};
