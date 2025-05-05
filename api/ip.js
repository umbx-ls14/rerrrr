export default function handler(req, res) {
  const key = req.query.key || req.headers.key;
  if (key !== "2504") {
    res.status(404).end();
    return;
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("127.0.0.1");
}
