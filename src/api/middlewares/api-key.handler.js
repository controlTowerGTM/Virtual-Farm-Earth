const { config } = require("../../config");

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.get("x-api-key");
  if (!apiKey) {
    return res.status(401).json({ error: "API key missing" });
  }
  if (apiKey !== config.apiKey)
    return res
      .status(403)
      .json({ error: "API key is incorrect. You not allowed." });

  next();
};

module.exports = apiKeyMiddleware;
