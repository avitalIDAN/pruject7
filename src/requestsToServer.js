const hostname = "http://localhost:4000";

export async function requestsGet(path) {
  console.log(hostname + path);
  const response = await fetch(hostname + path);
  return await response.json();
}

export async function requestsPost(path, object) {
  let requestBody;
  if (typeof object === "string") {
    requestBody = object;
  } else {
    requestBody = JSON.stringify(object);
  }

  console.log(requestBody);

  const response = await fetch(hostname + path, {
    method: "POST",
    body: requestBody,
    headers: {
      "Content-type": "application/json",
    },
  });

  return response;
}

export async function requestsPut(path, object) {
  try {
    const response = await fetch(hostname + path, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function requestsDelete(path) {
  const response = await fetch(hostname + path, {
    method: "DELETE",
  });
  return response;
}