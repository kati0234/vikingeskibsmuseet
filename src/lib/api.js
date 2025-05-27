const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
  apikey: key,
  Authorization: `Bearer ${key}`,
};

//  🎟️ 📤 POST billet
export async function postTicket(ticket) {
  const response = await fetch(`${url}/vikingeskibsmuseet`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify([ticket]), // Send som array til Supabase i sb er det kollonen jasonb
  });

  const data = await response.json();

  return data;
}

// 📥 🧡 get aktiviteter henter allle aktiviterer
export async function getActivity() {
  const response = await fetch(`${url}/activities`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}
// 📥 🧡 get aktiviteter henter singel aktivet

export async function getSingleActivity(slug) {
  const response = await fetch(`${url}/aktiviteter?slug=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data[0];
}

// 📥 get udstilinger henter alle udstillinger på overview
export async function getUdstillinger() {
  const response = await fetch(`${url}/udstillinger`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}
// 📥  get udstillingeren slug

export async function getSingleUdstillinger(slug) {
  const response = await fetch(`${url}/udstillingerSingel?slug=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data[0]; // Supabase returnerer et array – bureg første element
}

// 📤  post newsletter

export function postNewsletter(email) {
  return fetch(`${url}/newsletter`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify({ email }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((errorData) => {
        const error = new Error(errorData.message || "Fejl ved tilmelding");
        error.status = response.status;
        throw error;
      });
    }
    return response.json();
  });
}
