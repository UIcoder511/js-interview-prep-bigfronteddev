export const log = (sectionName = "", data) => {
  const section = sectionName
    .padStart(30, "-")
    .padEnd(60 - sectionName.length, "-");
  const seprator = Array(section.length).fill("-").join("");
  console.log(section);
  console.log(data);
  console.log(seprator);
};
