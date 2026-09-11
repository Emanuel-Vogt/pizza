(async function () {
    const {
        data: { session },
        error
    } = await supabaseClient.auth.getSession();

    if (error || !session) {
        location.href = "login.html";
        return;
    }
})();

const dialog = document.getElementById("product-dialog");
const list = document.getElementById("product-list");

let allProducts = [];

const labels = {
    "pizzas-salgadas": "🍕 Pizzas Salgadas",
    "monte-sua-pizza": "🍕 Monte sua Pizza",
    "pizzas-doces": "🍫 Pizzas Doces",
    "xis-artesanais": "🍔 Xis Artesanais",
    "xis-calota": "👑 Xis Calota",
    "porcoes": "🍟 Porções",
    "bebidas": "🥤 Bebidas"
};

function money(value) {
    return `R$ ${Number(value || 0)
        .toFixed(2)
        .replace(".", ",")}`;
}

async function loadProducts() {
    const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("id", { ascending: true });

    if (error) {
        console.error("Erro ao carregar produtos:", error);

        list.innerHTML = `
            <p class="error">
                Erro ao carregar produtos: ${error.message}
            </p>
        `;

        return;
    }

    allProducts = data || [];

    console.log("Produtos carregados:", allProducts);

    render();
}

function render() {
    const searchElement = document.getElementById("search");
    const categoryElement = document.getElementById("category-filter");

    const search = searchElement
        ? searchElement.value.toLowerCase().trim()
        : "";

    const category = categoryElement
        ? categoryElement.value
        : "";

    const items = allProducts.filter(product => {
        const productName = String(
            product.name || ""
        ).toLowerCase();

        return (
            (!category || product.category === category) &&
            productName.includes(search)
        );
    });

    const totalCount = document.getElementById("total-count");
    const availableCount = document.getElementById("available-count");
    const hiddenCount = document.getElementById("hidden-count");

    if (totalCount) {
        totalCount.textContent = allProducts.length;
    }

    if (availableCount) {
        availableCount.textContent =
            allProducts.filter(product => product.available).length;
    }

    if (hiddenCount) {
        hiddenCount.textContent =
            allProducts.filter(product => !product.available).length;
    }

    if (!list) {
        console.error(
            'Elemento com id="product-list" não foi encontrado.'
        );
        return;
    }

    list.innerHTML = "";

    if (items.length === 0) {
        list.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    items.forEach(product => {
        const article = document.createElement("article");

        article.className =
            "neo-card product-row" +
            (!product.available ? " disabled" : "");

        const categoryProducts = allProducts
            .filter(item => item.category === product.category)
            .sort((a, b) => {
                const orderA = Number(a.sort_order || 0);
                const orderB = Number(b.sort_order || 0);

                if (orderA !== orderB) {
                    return orderA - orderB;
                }

                return Number(a.id) - Number(b.id);
            });

        const currentIndex = categoryProducts.findIndex(
            item => item.id === product.id
        );

        const isFirst = currentIndex === 0;

        const isLast =
            currentIndex === categoryProducts.length - 1;

        let priceText;

        if (product.type === "pizza") {
            priceText = `
                ${money(product.price_25)}
                ·
                ${money(product.price_35)}
                ·
                ${money(product.price_30x50)}
            `;
        } else {
            priceText = money(product.price);
        }

        article.innerHTML = `
            <div class="product-info">

                <span class="category">
                    ${labels[product.category] || product.category || ""}
                </span>

                <h3>
                    ${product.name || "Produto sem nome"}
                </h3>

                <p>
                    ${product.description || ""}
                </p>

                <b>
                    ${priceText}
                </b>

            </div>

            <div class="row-actions">

                <button
                    class="neo-button"
                    title="Subir produto"
                    onclick="moveProduct(${product.id}, 'up')"
                    ${isFirst ? "disabled" : ""}
                >
                    ⬆️
                </button>

                <button
                    class="neo-button"
                    title="Descer produto"
                    onclick="moveProduct(${product.id}, 'down')"
                    ${isLast ? "disabled" : ""}
                >
                    ⬇️
                </button>

                <button
                    class="neo-button"
                    onclick="editProduct(${product.id})"
                >
                    ✏️ Editar
                </button>

                <button
                    class="neo-button"
                    onclick="toggleProduct(${product.id}, ${product.available})"
                >
                    ${product.available ? "🙈 Ocultar" : "👁️ Mostrar"}
                </button>

                <button
                    class="neo-button danger"
                    onclick="deleteProduct(${product.id})"
                >
                    🗑️
                </button>

            </div>
        `;

        list.appendChild(article);
    });
}

window.editProduct = function (id) {
    const product = allProducts.find(
        item => Number(item.id) === Number(id)
    );

    if (!product) {
        alert("Produto não encontrado.");
        return;
    }

    document.getElementById("form-title").textContent =
        "Editar produto";

    document.getElementById("product-id").value =
        product.id || "";

    document.getElementById("num").value =
        product.num || "";

    document.getElementById("name").value =
        product.name || "";

    document.getElementById("description").value =
        product.description || "";

    document.getElementById("category").value =
        product.category || "";

    document.getElementById("type").value =
        product.type || "single";

    document.getElementById("pizza-type").value =
        product.pizza_type || "salgada";

    document.getElementById("is-custom").checked =
        Boolean(product.is_custom);

    document.getElementById("available").checked =
        Boolean(product.available);

    document.getElementById("price").value =
        product.price ?? "";

    document.getElementById("price-25").value =
        product.price_25 ?? "";

    document.getElementById("price-35").value =
        product.price_35 ?? "";

    document.getElementById("price-30x50").value =
        product.price_30x50 ?? "";

    typeChanged();

    dialog.showModal();
};

window.toggleProduct = async function (id, available) {
    const { error } = await supabaseClient
        .from("products")
        .update({
            available: !available
        })
        .eq("id", id);

    if (error) {
        console.error(error);

        alert(
            "Erro ao alterar produto: " +
            error.message
        );

        return;
    }

    await loadProducts();
};

window.deleteProduct = async function (id) {
    const confirmed = confirm(
        "Tem certeza que deseja excluir este produto?"
    );

    if (!confirmed) {
        return;
    }

    const { error } = await supabaseClient
        .from("products")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);

        alert(
            "Erro ao excluir produto: " +
            error.message
        );

        return;
    }

    await loadProducts();
};

window.moveProduct = async function (id, direction) {
    const currentProduct = allProducts.find(
        product => Number(product.id) === Number(id)
    );

    if (!currentProduct) {
        return;
    }

    const categoryProducts = allProducts
        .filter(
            product =>
                product.category === currentProduct.category
        )
        .sort((a, b) => {
            const orderA = Number(a.sort_order || 0);
            const orderB = Number(b.sort_order || 0);

            if (orderA !== orderB) {
                return orderA - orderB;
            }

            return Number(a.id) - Number(b.id);
        });

    const currentIndex = categoryProducts.findIndex(
        product => Number(product.id) === Number(id)
    );

    const targetIndex =
        direction === "up"
            ? currentIndex - 1
            : currentIndex + 1;

    if (
        targetIndex < 0 ||
        targetIndex >= categoryProducts.length
    ) {
        return;
    }

    const targetProduct =
        categoryProducts[targetIndex];

    const currentOrder =
        Number(currentProduct.sort_order || 0);

    const targetOrder =
        Number(targetProduct.sort_order || 0);

    const { error: error1 } = await supabaseClient
        .from("products")
        .update({
            sort_order: -999999
        })
        .eq("id", currentProduct.id);

    if (error1) {
        alert(
            "Erro ao mover produto: " +
            error1.message
        );
        return;
    }

    const { error: error2 } = await supabaseClient
        .from("products")
        .update({
            sort_order: currentOrder
        })
        .eq("id", targetProduct.id);

    if (error2) {
        alert(
            "Erro ao mover produto: " +
            error2.message
        );
        return;
    }

    const { error: error3 } = await supabaseClient
        .from("products")
        .update({
            sort_order: targetOrder
        })
        .eq("id", currentProduct.id);

    if (error3) {
        alert(
            "Erro ao mover produto: " +
            error3.message
        );
        return;
    }

    await loadProducts();
};

function typeChanged() {
    const typeElement =
        document.getElementById("type");

    const pizzaFields =
        document.getElementById("pizza-fields");

    const singleField =
        document.getElementById("single-field");

    if (!typeElement || !pizzaFields || !singleField) {
        return;
    }

    const isPizza =
        typeElement.value === "pizza";

    pizzaFields.style.display =
        isPizza ? "grid" : "none";

    singleField.style.display =
        isPizza ? "none" : "block";
}

const typeElement = document.getElementById("type");

if (typeElement) {
    typeElement.addEventListener(
        "change",
        typeChanged
    );
}

const newProductButton =
    document.getElementById("new-product");

if (newProductButton) {
    newProductButton.addEventListener(
        "click",
        function () {
            const form =
                document.getElementById("product-form");

            form.reset();

            document.getElementById(
                "form-title"
            ).textContent =
                "Adicionar produto";

            document.getElementById(
                "product-id"
            ).value = "";

            document.getElementById(
                "available"
            ).checked = true;

            typeChanged();

            dialog.showModal();
        }
    );
}

["close-dialog", "cancel"].forEach(function (id) {
    const button = document.getElementById(id);

    if (button) {
        button.addEventListener(
            "click",
            function () {
                dialog.close();
            }
        );
    }
});

const logoutButton = document.getElementById("logout");

if (logoutButton) {
    logoutButton.addEventListener("click", async function () {
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            console.error("Erro ao sair:", error);
            alert("Não foi possível encerrar a sessão.");
            return;
        }

        location.href = "login.html";
    });
}

const searchInput =
    document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener(
        "input",
        render
    );
}

const categoryFilter =
    document.getElementById("category-filter");

if (categoryFilter) {
    categoryFilter.addEventListener(
        "change",
        render
    );
}

const productForm =
    document.getElementById("product-form");

if (productForm) {
    productForm.addEventListener(
        "submit",
        async function (event) {
            event.preventDefault();

            const id =
                document.getElementById(
                    "product-id"
                ).value;

            const type =
                document.getElementById(
                    "type"
                ).value;

            const num =
                document.getElementById(
                    "num"
                ).value;

            const category =
                document.getElementById(
                    "category"
                ).value;

            const name =
                document.getElementById(
                    "name"
                ).value.trim();

            const description =
                document.getElementById(
                    "description"
                ).value.trim();

            const available =
                document.getElementById(
                    "available"
                ).checked;

            const pizzaType =
                document.getElementById(
                    "pizza-type"
                ).value;

            const isCustom =
                document.getElementById(
                    "is-custom"
                ).checked;

            const price =
                document.getElementById(
                    "price"
                ).value;

            const price25 =
                document.getElementById(
                    "price-25"
                ).value;

            const price35 =
                document.getElementById(
                    "price-35"
                ).value;

            const price30x50 =
                document.getElementById(
                    "price-30x50"
                ).value;

            if (!name) {
                alert("Digite o nome do produto.");
                return;
            }

            const payload = {
                num: num,
                category: category,
                type: type,
                name: name,
                description: description,
                available: available,

                pizza_type:
                    type === "pizza"
                        ? pizzaType
                        : null,

                is_custom:
                    type === "pizza"
                        ? isCustom
                        : false,

                price:
                    type === "single"
                        ? Number(price || 0)
                        : null,

                price_25:
                    type === "pizza"
                        ? Number(price25 || 0)
                        : null,

                price_35:
                    type === "pizza"
                        ? Number(price35 || 0)
                        : null,

                price_30x50:
                    type === "pizza"
                        ? Number(price30x50 || 0)
                        : null
            };

            let result;

            if (id) {
                result = await supabaseClient
                    .from("products")
                    .update(payload)
                    .eq("id", id);
            } else {
                const sameCategory =
                    allProducts.filter(
                        product =>
                            product.category === category
                    );

                const maxOrder =
                    sameCategory.reduce(
                        function (max, product) {
                            return Math.max(
                                max,
                                Number(
                                    product.sort_order || 0
                                )
                            );
                        },
                        0
                    );

                result = await supabaseClient
                    .from("products")
                    .insert({
                        ...payload,
                        sort_order: maxOrder + 1
                    });
            }

            if (result.error) {
                console.error(
                    "Erro ao salvar:",
                    result.error
                );

                alert(
                    "Erro ao salvar o produto: " +
                    result.error.message
                );

                return;
            }

            dialog.close();

            await loadProducts();
        }
    );
}

loadProducts();