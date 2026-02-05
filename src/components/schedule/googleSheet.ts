export async function fetchSchedule() {
  const res = await fetch(
    `https://docs.google.com/spreadsheets/d/e/2PACX-1vSvZ2XGGv8uWU7Iyr7zXQ1-3hDKh2-sgSEHO8Uhnf_2hNVUv6cThllpkeHHVbOwgOE9LWXKAYhmHxGf/pubhtml`
  );

  if (!res.ok) throw new Error("Failed to fetch Google Sheet");

  const data = await res.json();
  return data.values as string[][];
}
