const colorList = ["rose", "pink", "fuchsia"] as const;

type ColorAray = typeof colorList;
type Color = typeof colorList[number];

export function main() {}
