import { TOKEN } from "@/constants";

export const getAccessToken = () => {
  const tokenString = localStorage.getItem(TOKEN);
  if (tokenString) {
    return JSON.parse(tokenString);
  }
};

export const setAccesstoken = (token: string) => {
  localStorage.setItem(TOKEN, JSON.stringify(token));
};

export const removeAccessToken = () => {
  localStorage.removeItem(TOKEN);
};
