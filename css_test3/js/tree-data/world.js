const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const getCountriesByRegion = async region => {
  const url = "https://restcountries.eu/rest/v2/region/";
  try {
    const result = await fetch(`${url}${region}`);
    const jsonRes = await result.json();
    const list = await jsonRes.map(i => ({ name: i.name, children: [] }));
    return list;
  } catch (err) {
    console.log(`error: ${err}`);
    return [];
  }
};

export const getList = async () => {
  let list = [];
  for (let region of regions) {
    const children = await getCountriesByRegion(region);
    list.push({ name: region, children: children });
  }

  return [
    {
      name: "Earth",
      children: list
    }
  ];
};
