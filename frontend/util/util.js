//Chronologically sorts from newest to oldest
export const compare = (a,b) => {
  if (a.id > b.id){
    return -1;
  }
  if (a.id < b.id){
    return 1;
  }
  return 0;
};
