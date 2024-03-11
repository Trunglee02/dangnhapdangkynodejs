let backendURL = "http://localhost:3000/";

export async function Get(url = "") {
  var Url = backendURL + url;
  const response = await fetch(Url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function Post(url = "", body) {
  console.log(body);
  var Url = backendURL + url;
  const response = await fetch(Url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function getCookie(cname) { 
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}