export const RandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/", { method: "GET" });
  return await response.json();
};
