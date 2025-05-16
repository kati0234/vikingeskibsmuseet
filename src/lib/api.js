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
  // console.log("POST response:", data);
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
  // console.log("PATCH response:", data);
  return data;
}

//get aktiviteter henter allle aktiviterer
export async function getActivity() {
  const response = await fetch(`${url}/activities`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  // console.log("GET activity response:", data);
  return data;
}
//get aktiviteter henter singel aktivet

export async function getSingleActivity(slug) {
  const response = await fetch(`${url}/aktiviteter?slug=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  // return data; tror det skal være den pg ok den anden
  return data[0]; // Supabase returnerer et array – vi tager første element
}

//get udstilinger henter alle udstillinger på overview
export async function getUdstillinger() {
  const response = await fetch(`${url}/udstillinger`, {
    method: "GET",
    headers: headersList,
  });

  // husk at slet log
  const data = await response.json();
  // console.log("GET udstilinger response:", data);
  return data;
}

export async function getSingleUdstillinger(slug) {
  const response = await fetch(`${url}/udstillingerSingel?slug=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data[0]; // Supabase returnerer et array – vi tager første element
}

// export async function postNewsletter(email) {
//   const response = await fetch(`${url}/newsletter`, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify({ email }), // Send som objekt
//   });

//   return await response.json(); // Returnér altid JSON – selv ved fejl
// }

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
