const form = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const responseText = document.querySelector("#responseText");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  loginButton.disabled = true;
  responseText.textContent = "Sending request...";

  const payload = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    responseText.textContent = await response.text();
  } catch (error) {
    responseText.textContent = "Request failed. Check that the server is running.";
  } finally {
    loginButton.disabled = false;
  }
});

