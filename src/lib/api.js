const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
  apikey: key,
  Authorization: `Bearer ${key}`,
};

// 🟢 POST billet
export async function postTicket(ticket) {
  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify([ticket]), // VIGTIGT: Send som array til Supabase
  });

  const data = await response.json();
  console.log("POST response:", data);
  return data;
}

// 🟡 PATCH billet (fx hvis du vil opdatere)
export async function patchTicket(id, patchData) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    method: "PATCH",
    headers: headersList,
    body: JSON.stringify(patchData),
  });

  const data = await response.json();
  console.log("PATCH response:", data);
  return data;
}
