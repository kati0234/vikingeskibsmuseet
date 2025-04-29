const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
  apikey: key,
  Authorization: `Bearer ${key}`,
};

// 🟢 POST billet (måske skal jeg lige ændte navnet på tabelen)
export async function postTicket(ticket) {
  const response = await fetch(`${url}/vikingeskibsmuseet`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify([ticket]), // VIGTIGT: Send som array til Supabase
  });

  const data = await response.json();
  console.log("POST response:", data);
  return data;
}

// 🟡 PATCH billet (fx hvis jeg vil opdatere) bruger jeg ik lige nu
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

//get aktiviteter henter allle aktiviterer
export async function getActivity() {
  const response = await fetch(`${url}/activities`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  console.log("GET activity response:", data);
  return data;
}
//get aktiviteter henter singel aktivet

export async function getSingleActivity(slug) {
  const response = await fetch(`${url}/aktiviteter?slug=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data[0]; // Supabase returnerer et array – vi tager første element
}
