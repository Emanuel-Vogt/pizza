(async function () {
    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    // Se já estiver logado, vai direto para a dashboard
    if (session) {
        location.href = "admin.html";
        return;
    }

    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("login-error");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        errorElement.textContent = "";

        const submitButton = form.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;
        submitButton.textContent = "Entrando...";

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

        submitButton.disabled = false;
        submitButton.textContent = "Entrar";

        if (error) {
            console.error("Erro no login:", error);

            errorElement.textContent =
                "Email ou senha incorretos.";

            return;
        }

        if (data.session) {
            location.href = "admin.html";
        }
    });
})();