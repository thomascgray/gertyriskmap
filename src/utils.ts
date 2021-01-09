import { EPlayerColour, ITerritoryDataMap } from "./types";
export const distributeIntoGroups = (array: any[], groupCount: number) => {
  const groups: any[][] = [];

  for (let i = 0; i < groupCount; i++) {
    groups.push([]);
  }

  let j = 0;
  let insertIntoGroupIndex = 0;
  while (j < array.length) {
    groups[insertIntoGroupIndex].push(array[j]);
    insertIntoGroupIndex++;
    j++;

    if (insertIntoGroupIndex >= groupCount) {
      insertIntoGroupIndex = 0;
    }
  }

  return groups;
};

export const territoryNamesToInitialTroopCount = (
  territoryNames: string[]
): ITerritoryDataMap => {
  const obj: ITerritoryDataMap = {};

  territoryNames.forEach((tn) => {
    obj[tn] = {
      armyCount: 1,
    };
  });

  return obj;
};

export const randomPlayerColours = (count: number): string[] => {
  const copyOfColours = Object.keys({ ...EPlayerColour });

  const pickedColours = [];

  for (let i = 0; i < count; i++) {
    const pickedColour =
      copyOfColours[Math.floor(Math.random() * copyOfColours.length)];
    pickedColours.push(pickedColour);
    const index = copyOfColours.indexOf(pickedColour);
    if (index > -1) {
      copyOfColours.splice(index, 1);
    }
  }

  return pickedColours;
};
