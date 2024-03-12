import groups from "../widgets/groups/model/groups.json";
export const getGroups = new Promise((res, rej) => {
  const result = Math.random();
  if (result > 0.5) {
    setTimeout(() => {
      return res({
        result: 1,
        data: groups,
      });
    }, 1000);
  } else {
    return rej(new Error("Error!!!"));
  }
});
