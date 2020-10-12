export default async (req, res) => {
  let response = await fetch(
    `https://api.spoonacular.com/recipes/${req.body}/information?apiKey=${process.env.API_KEY}&includeNutrition=false`
  );
  let parsedResponse = await response.json();
  console.log(response, parsedResponse);
  res.statusCode = 200;
  res.json(parsedResponse);
};
