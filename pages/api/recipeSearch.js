export default async (req, res) => {
  const rawQuery = req.body.split(" ");
  const parsedQuery = rawQuery.join("%20");
  let response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${parsedQuery}&number=12`
  );
  let parsedResponse = await response.json();
  res.statusCode = 200;
  res.json(parsedResponse);
};
