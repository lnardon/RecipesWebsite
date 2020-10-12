export default async (req, res) => {
  let response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${req.body}`
  );
  let parsedResponse = await response.json();
  res.statusCode = 200;
  res.json(parsedResponse);
};
