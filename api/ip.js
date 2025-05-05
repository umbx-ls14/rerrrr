export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("1.1.1.1");
  }
  