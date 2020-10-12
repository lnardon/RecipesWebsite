export default async (req, res) => {
  let response = await fetch(
    `https://api.spoonacular.com/recipes/${req.body.id}/information?apiKey=${process.env.API_KEY}?includeNutrition=false`
  );
  let parsedResponse = await response.json();
  res.statusCode = 200;
  res.json(parsedResponse);
};
