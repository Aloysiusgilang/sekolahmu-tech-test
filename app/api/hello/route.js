export default async function handler(req, res) {
  const url = "https://api.dev.sekolah.mu/se-test/invoice";
  const headers = {
    Authorization: "secret_auth_token!!$$",
  };

  try {
    const response = await fetch(url, {
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data invoice");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data invoices" });
  }
}
