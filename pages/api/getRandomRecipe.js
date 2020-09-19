export default async (req, res) => {
  let response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`
  );
  let parsedResponse = await response.json();
  res.statusCode = 200;
  res.json(parsedResponse);
};
