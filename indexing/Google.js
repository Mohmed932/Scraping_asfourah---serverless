import { google } from "googleapis";

export const indexing = async (urlToIndex) => {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["https://www.googleapis.com/auth/indexing"],
    null
  );

  try {
    const tokens = await jwtClient.authorize();

    const notification = {
      url: urlToIndex,
      type: "URL_UPDATED",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access_token}`,
      },
      body: JSON.stringify(notification),
    };

    const response = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
