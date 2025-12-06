export const randomColor = () => {
  const myColors = [
    "bg-amber-200",
    "bg-red-200",
    "bg-orange-200",
    "bg-cyan-200",
    "bg-orange-200",
    "bg-blue-200",
    "bg-emerald-200",
    "bg-fuchsia-200",
    "bg-lime-200",
    "bg-pink-200",
  ];
  const result = Math.floor(Math.random() * myColors.length);
  return myColors[result];
};
