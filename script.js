// Base de Dados Oficial - Maná Pizza X
const defaultProducts = [
    // PIZZAS SALGADAS (Preço por sabor)
    { id: 1, num: "01", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Calabresa Especial", desc: "Molho de tomate, mussarela, calabresa fatiada, cebola, azeitonas e orégano.", prices: { size25: 48, size35: 70, size30x50: 115 } },
    { id: 2, num: "02", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Frango com Catupiry", desc: "Molho de tomate, mussarela, frango desfiado e Catupiry.", prices: { size25: 48, size35: 70, size30x50: 115 } },
    { id: 3, num: "03", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Portuguesa", desc: "Molho de tomate, mussarela, presunto, ovo, cebola, pimentão, azeitonas e orégano.", prices: { size25: 48, size35: 70, size30x50: 115 } },
    { id: 4, num: "04", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Quatro Queijos", desc: "Molho de tomate, mussarela, Catupiry, provolone e parmesão.", prices: { size25: 53, size35: 78, size30x50: 125 } },
    { id: 5, num: "05", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Bacon com Cheddar", desc: "Molho de tomate, mussarela, bacon crocante, cheddar e orégano.", prices: { size25: 53, size35: 78, size30x50: 125 } },
    { id: 6, num: "06", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Lombo Canadense", desc: "Molho de tomate, mussarela, lombo canadense, milho e Catupiry.", prices: { size25: 53, size35: 78, size30x50: 125 } },
    { id: 7, num: "07", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Strogonoff de Frango", desc: "Molho de tomate, mussarela, strogonoff de frango e batata palha.", prices: { size25: 58, size35: 85, size30x50: 135 } },
    { id: 8, num: "08", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Strogonoff de Carne", desc: "Molho de tomate, mussarela, strogonoff de carne e batata palha.", prices: { size25: 58, size35: 85, size30x50: 135 } },
    { id: 9, num: "09", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Maná Especial", desc: "Molho de tomate, mussarela, frango, calabresa, bacon, milho, cheddar e cebola roxa.", prices: { size25: 58, size35: 85, size30x50: 135 } },
    { id: 10, num: "10", category: "pizzas-salgadas", type: "pizza", pizzaType: "salgada", name: "Costela Barbecue", desc: "Molho de tomate, mussarela, costela desfiada, cebola roxa e molho barbecue.", prices: { size25: 62, size35: 90, size30x50: 145 } },

    // MONTE SUA PIZZA
    { id: 99, num: "★", category: "monte-sua-pizza", type: "pizza", pizzaType: "salgada", isCustom: true, name: "Monte Sua Pizza Customizada", desc: "Monte sua pizza do seu jeito! Escolha até 2 sabores (25cm), 3 sabores (35cm) ou 4 sabores (30x50cm) diretamente no cardápio.", prices: { size25: 60, size35: 80, size30x50: 140 } },

    // PIZZAS DOCES
    { id: 11, num: "01", category: "pizzas-doces", type: "pizza", pizzaType: "doce", name: "Chocolate ao Leite", desc: "Creme de avelã, chocolate ao leite e raspas de chocolate.", prices: { size25: 55, size35: 80, size30x50: 135 } },
    { id: 12, num: "02", category: "pizzas-doces", type: "pizza", pizzaType: "doce", name: "Morango Supreme", desc: "Creme de avelã, chocolate ao leite, morangos frescos e leite em pó.", prices: { size25: 60, size35: 85, size30x50: 145 } },
    { id: 13, num: "03", category: "pizzas-doces", type: "pizza", pizzaType: "doce", name: "Prestígio", desc: "Creme de avelã, chocolate ao leite, coco ralado e leite condensado.", prices: { size25: 55, size35: 80, size30x50: 135 } },
    { id: 14, num: "04", category: "pizzas-doces", type: "pizza", pizzaType: "doce", name: "Banoffee", desc: "Doce de leite, banana, leite em pó e canela.", prices: { size25: 65, size35: 90, size30x50: 155 } },
    { id: 15, num: "05", category: "pizzas-doces", type: "pizza", pizzaType: "doce", name: "Oreo", desc: "Chocolate branco, Oreo triturado e leite em pó.", prices: { size25: 65, size35: 90, size30x50: 155 } },

    // XIS ARTESANAIS 18cm
    { id: 16, num: "01", category: "xis-artesanais", type: "single", name: "X Salada", desc: "Hambúrguer artesanal de coxão mole, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 30 },
    { id: 17, num: "02", category: "xis-artesanais", type: "single", name: "X Frango", desc: "Filé de frango, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 32 },
    { id: 18, num: "03", category: "xis-artesanais", type: "single", name: "X Calabresa", desc: "Hambúrguer artesanal de coxão mole, calabresa fatiada, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 35 },
    { id: 19, num: "04", category: "xis-artesanais", type: "single", name: "X Bacon", desc: "Hambúrguer artesanal de coxão mole, bacon, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 35 },
    { id: 20, num: "05", category: "xis-artesanais", type: "single", name: "X Costela", desc: "Hambúrguer artesanal de coxão mole, costela desfiada, cheddar cremoso, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 40 },
    { id: 21, num: "06", category: "xis-artesanais", type: "single", name: "X Strogonoff de Frango", desc: "Strogonoff de frango, bacon, cheddar cremoso, Catupiry, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup.", price: 40 },
    { id: 36, num: "07", category: "xis-artesanais", type: "single", name: "X Strogonoff de Carne", desc: "Strogonoff de carne, cheddar cremoso, ovo frito, mussarela, batata palha, maionese, ketchup.", price: 40 },
    { id: 22, num: "08", category: "xis-artesanais", type: "single", name: "X Tudo", desc: "Hambúrguer artesanal de coxão mole, filé de frango, bacon, calabresa, presunto, cheddar cremoso, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese, ketchup e mostarda.", price: 45 },
    { id: 23, num: "09", category: "xis-artesanais", type: "single", name: "X Maná Especial", desc: "2 hambúrgueres artesanais de coxão mole, bacon crocante, cheddar cremoso, Catupiry, cebola caramelizada, ovo frito, mussarela, batata palha, maionese, ketchup e mostarda.", price: 48 },

    // XIS CALOTA 30cm
    { id: 24, num: "01", category: "xis-calota", type: "single", name: "X Calota Salada", desc: "Pão de 30cm, hambúrguer artesanal de coxão mole, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese e ketchup.", price: 85 },
    { id: 25, num: "02", category: "xis-calota", type: "single", name: "X Calota Frango", desc: "Pão de 30cm, filé de frango, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese e ketchup.", price: 85 },
    { id: 26, num: "03", category: "xis-calota", type: "single", name: "X Calota Calabresa", desc: "Pão de 30cm, hambúrguer artesanal de coxão mole, calabresa fatiada, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese e ketchup.", price: 95 },
    { id: 27, num: "04", category: "xis-calota", type: "single", name: "X Calota Bacon", desc: "Pão de 30cm, hambúrguer artesanal de coxão mole, bacon, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese e ketchup.", price: 95 },
    { id: 28, num: "05", category: "xis-calota", type: "single", name: "X Calota Tudo", desc: "Pão de 30cm, hambúrguer artesanal de coxão mole, filé de frango, bacon, calabresa, presunto, ovo frito, mussarela, alface, tomate, milho, ervilha, maionese e ketchup.", price: 110 },

    // PORÇÕES E BEBIDAS
    { id: 29, num: "", category: "porcoes", type: "single", name: "Batata Frita 400g", desc: "Porção de batata frita crocante (400g).", price: 20 },
    { id: 30, num: "", category: "bebidas", type: "single", name: "Coca-Cola 2L", desc: "Garrafa de 2 Litros gelada.", price: 15 },
    { id: 31, num: "", category: "bebidas", type: "single", name: "Guaraná Antarctica 2L", desc: "Garrafa de 2 Litros gelada.", price: 12 },
    { id: 32, num: "", category: "bebidas", type: "single", name: "Coca-Cola Lata", desc: "Lata 350ml.", price: 5 },
    { id: 33, num: "", category: "bebidas", type: "single", name: "Guaraná Antarctica Lata", desc: "Lata 350ml.", price: 5 },
    { id: 34, num: "", category: "bebidas", type: "single", name: "Água com Gás 500ml", desc: "Garrafa 500ml.", price: 3 },
    { id: 35, num: "", category: "bebidas", type: "single", name: "Água sem Gás 500ml", desc: "Garrafa 500ml.", price: 3 }
];

const categoriesMeta = [
    { key: "all", label: "Todos" },
    { key: "pizzas-salgadas", label: "🍕 Pizzas Salgadas", sub: "Todas acompanham Borda Recheada!" },
    { key: "monte-sua-pizza", label: "🍕 Monte Sua Pizza", sub: "Escolha até 4 sabores diretamente!" },
    { key: "pizzas-doces", label: "🍫 Pizzas Doces", sub: "Com Bordas Doces Especiais!" },
    { key: "xis-artesanais", label: "🍔 Xis Artesanais (18cm)", sub: "Hambúrguer 100% Coxão Mole" },
    { key: "xis-calota", label: "👑 Xis Calota (30cm)", sub: "Mais Recheio, Mais Sabor!" },
    { key: "porcoes", label: "🍟 Porções", sub: "" },
    { key: "bebidas", label: "🥤 Bebidas", sub: "" }
];

const pizzaSizes = [
    { key: "size25", label: "25 cm (até 2 sabores)", maxFlavors: 2 },
    { key: "size35", label: "35 cm (até 3 sabores)", maxFlavors: 3 },
    { key: "size30x50", label: "30x50 cm (até 4 sabores)", maxFlavors: 4 }
];

const bordasSalgadas = ["Cheddar", "Catupiry"];
const bordasDoces = ["Doce de Leite", "Chocolate Branco", "Creme de Avelã com Chocolate"];

// Estado Global
let products = defaultProducts;
let cart = [];
let currentProduct = null;
let selectedSizeKey = "size25";
let selectedBordas = [];
let selectedFlavors = [];

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderCategoryNav();
    renderMenu();
    setupPaymentListener();
}

function renderCategoryNav() {
    const navScroll = document.getElementById('category-scroll');
    navScroll.innerHTML = '';
    
    categoriesMeta.forEach((cat, idx) => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${idx === 0 ? 'active' : ''}`;
        btn.innerText = cat.label;
        btn.onclick = (e) => filterCategory(cat.key, e.target);
        navScroll.appendChild(btn);
    });
}

function filterCategory(catKey, btnEl) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(sec => {
        if (catKey === 'all' || sec.id === `sec-${catKey}`) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });

    if (btnEl) {
        btnEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

function renderMenu() {
    const container = document.getElementById('dynamic-sections');
    container.innerHTML = '';

    categoriesMeta.filter(c => c.key !== 'all').forEach(cat => {
        const section = document.createElement('section');
        section.className = 'menu-section';
        section.id = `sec-${cat.key}`;

        const catProds = products.filter(p => p.category === cat.key);

        if (catProds.length > 0) {
            section.innerHTML = `
                <div class="section-title">
                    <span>${cat.label}</span>
                    ${cat.sub ? `<span class="sub-badge">${cat.sub}</span>` : ''}
                </div>
                <div class="grid" id="grid-${cat.key}"></div>
            `;
            container.appendChild(section);

            const grid = document.getElementById(`grid-${cat.key}`);
            catProds.forEach(p => {
                const card = document.createElement('div');
                card.className = 'card';
                
                let priceText = p.type === 'pizza' 
                    ? `A partir de R$ ${(p.prices.size25 || 0).toFixed(2)}` 
                    : `R$ ${(p.price || 0).toFixed(2)}`;

                card.innerHTML = `
                    <div>
                        <div class="card-header-info">
                            <span class="card-title">${p.name}</span>
                            ${p.num ? `<span class="card-num">#${p.num}</span>` : ''}
                        </div>
                        <p class="card-desc">${p.desc}</p>
                    </div>
                    <div class="card-footer">
                        <div>
                            <span class="card-price-label">${p.type === 'pizza' ? 'Inicial' : 'Valor'}</span>
                            <div class="card-price">${priceText}</div>
                        </div>
                        <button class="btn-primary" onclick="openModal(${p.id})">${p.isCustom ? 'Montar Pizza' : 'Adicionar'}</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    });
}

// Modal de Adição / Seleção de Sabores
function openModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    document.getElementById('modal-title').innerText = currentProduct.name;
    document.getElementById('modal-desc').innerText = currentProduct.desc;
    document.getElementById('item-obs').value = '';
    selectedFlavors = [];

    const optionsContainer = document.getElementById('modal-options');
    optionsContainer.innerHTML = '';

    if (currentProduct.type === 'pizza') {
        selectedSizeKey = "size25";
        const bordaList = [...bordasSalgadas, ...bordasDoces];
        selectedBordas = [bordaList[0]];

        // 1. Tamanho
        let sizeHTML = '<div class="modal-group"><h4>1. Escolha o Tamanho:</h4>';
        pizzaSizes.forEach((s, idx) => {
            const price = currentProduct.prices[s.key] || 0;
            sizeHTML += `
                <button class="option-btn ${idx === 0 ? 'selected' : ''}" onclick="selectSize('${s.key}', this)">
                    <span>${s.label}</span>
                    <strong>R$ ${price.toFixed(2)}</strong>
                </button>
            `;
        });
        sizeHTML += '</div>';

        // 2. Se for "Monte Sua Pizza", exibe o Seletor de Sabores por Checkbox
        let flavorHTML = '';
        if (currentProduct.isCustom) {
            flavorHTML = renderFlavorPicker();
        }

        // 3. Borda
        const bordaLabel = currentProduct.isCustom ? '3.' : '2.';
        const bordaTitle = currentProduct.isCustom ? 'Escolha até 2 Bordas Recheadas:' : 'Borda Recheada Inclusa:';
        let bordaHTML = `<div class="modal-group"><h4>${bordaLabel} ${bordaTitle}</h4>`;
        bordaList.forEach((b, idx) => {
            bordaHTML += `
                <button class="option-btn ${selectedBordas.includes(b) ? 'selected' : ''}" onclick="selectBorda('${b}', this)">
                    <span>${currentProduct.isCustom ? b : `Borda de ${b}`}</span>
                    <small style="color:#25d366;font-weight:700;">Grátis</small>
                </button>
            `;
        });
        bordaHTML += '</div>';

        optionsContainer.innerHTML = sizeHTML + flavorHTML + bordaHTML;
    }

    updateModalPrice();
    document.getElementById('modal-overlay').classList.add('active');

    document.getElementById('btn-add-modal').onclick = () => {
        if (currentProduct.isCustom && selectedFlavors.length === 0) {
            alert('Por favor, selecione pelo menos 1 sabor para a sua pizza!');
            return;
        }
        addToCart();
        closeModal();
    };
}

// Renderiza a lista de Sabores disponíveis
function renderFlavorPicker() {
    const allowSweetFlavors = currentProduct.isCustom;
    const availableFlavors = products.filter(p => {
        if (p.isCustom) return false;
        if (currentProduct.pizzaType === 'doce') return p.category === 'pizzas-doces';
        return p.category === 'pizzas-salgadas' || (allowSweetFlavors && p.category === 'pizzas-doces');
    });
    const sizeObj = pizzaSizes.find(s => s.key === selectedSizeKey);
    const max = sizeObj ? sizeObj.maxFlavors : 2;

    let html = `
        <div class="modal-group" id="flavor-group">
            <h4>2. Escolha os Sabores (Selecione até <span id="max-flavors-count">${max}</span>):</h4>
            <div class="flavor-counter-badge" id="flavor-counter">Sabores selecionados: 0 / ${max}</div>
            <div class="flavor-picker-grid">
    `;

    availableFlavors.forEach(f => {
        const isSelected = selectedFlavors.includes(f.name);
        html += `
            <div class="flavor-checkbox-item ${isSelected ? 'selected' : ''}" onclick="toggleFlavor('${f.name}', this)">
                <input type="checkbox" ${isSelected ? 'checked' : ''} style="pointer-events:none;">
                <span>${f.name}</span>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function toggleFlavor(flavorName, el) {
    const sizeObj = pizzaSizes.find(s => s.key === selectedSizeKey);
    const max = sizeObj ? sizeObj.maxFlavors : 2;

    const index = selectedFlavors.indexOf(flavorName);

    if (index > -1) {
        selectedFlavors.splice(index, 1);
        el.classList.remove('selected');
        el.querySelector('input').checked = false;
    } else {
        if (selectedFlavors.length >= max) {
            alert(`Você pode escolher no máximo ${max} sabores para o tamanho de ${sizeObj.label.split(' ')[0]}!`);
            return;
        }
        selectedFlavors.push(flavorName);
        el.classList.add('selected');
        el.querySelector('input').checked = true;
    }

    const counter = document.getElementById('flavor-counter');
    if (counter) counter.innerText = `Sabores selecionados: ${selectedFlavors.length} / ${max}`;
}

function selectSize(key, btn) {
    selectedSizeKey = key;
    btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    if (currentProduct && currentProduct.isCustom) {
        const sizeObj = pizzaSizes.find(s => s.key === selectedSizeKey);
        const max = sizeObj ? sizeObj.maxFlavors : 2;

        if (selectedFlavors.length > max) {
            selectedFlavors = selectedFlavors.slice(0, max);
        }

        const flavorGroup = document.getElementById('flavor-group');
        if (flavorGroup) {
            flavorGroup.outerHTML = renderFlavorPicker();
        }
    }

    updateModalPrice();
}

function selectBorda(borda, btn) {
    if (!currentProduct?.isCustom) {
        selectedBordas = [borda];
        btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        return;
    }

    const isSelected = selectedBordas.includes(borda);
    if (isSelected) {
        selectedBordas = selectedBordas.filter(b => b !== borda);
        btn.classList.remove('selected');
        return;
    }

    if (selectedBordas.length >= 2) {
        alert('Você pode selecionar no máximo 2 bordas.');
        return;
    }

    selectedBordas.push(borda);
    btn.classList.add('selected');
}

function updateModalPrice() {
    let total = currentProduct.type === 'pizza' ? (currentProduct.prices[selectedSizeKey] || 0) : (currentProduct.price || 0);
    document.getElementById('modal-total-price').innerText = `R$ ${total.toFixed(2)}`;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

function closeModalOnOverlay(e) {
    if (e.target.id === 'modal-overlay') closeModal();
}

// Carrinho
function addToCart() {
    let finalPrice = 0;
    let details = "";
    const obs = document.getElementById('item-obs').value.trim();

    if (currentProduct.type === 'pizza') {
        finalPrice = currentProduct.prices[selectedSizeKey] || 0;
        const sz = pizzaSizes.find(s => s.key === selectedSizeKey);
        const szLabel = sz.label.split(' ')[0];
        const bordaText = selectedBordas.length > 1 ? `Bordas: ${selectedBordas.join(' + ')}` : `Borda: ${selectedBordas[0] || ''}`;
        
        if (currentProduct.isCustom && selectedFlavors.length > 0) {
            details = `${szLabel}, Sabores: ${selectedFlavors.join(' + ')}, ${bordaText}`;
        } else {
            details = `${szLabel}, ${bordaText}`;
        }
    } else {
        finalPrice = currentProduct.price || 0;
    }

    cart.push({
        name: currentProduct.name,
        type: currentProduct.type,
        price: finalPrice,
        details: details,
        obs: obs
    });

    updateCartUI();
    toggleCart(true);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, idx) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        
        const icon = item.type === 'pizza' ? '🍕' : '🍔';

        itemEl.innerHTML = `
            <div class="cart-item-info">
                <h5>${icon} ${item.name}</h5>
                ${item.details ? `<p>${item.details}</p>` : ''}
                ${item.obs ? `<div class="cart-item-obs">Obs: ${item.obs}</div>` : ''}
                <button class="remove-btn" onclick="removeFromCart(${idx})">Remover</button>
            </div>
            <div class="cart-item-price" style="font-weight:800;font-size:0.9rem;">R$ ${item.price.toFixed(2)}</div>
        `;
        cartItems.appendChild(itemEl);
    });

    document.getElementById('cart-total-price').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('cart-bar-total-price').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('cart-count').innerText = cart.length;

    const slices = Math.floor(total / 90);
    const fidelityAlert = document.getElementById('fidelity-alert');
    if (total >= 90) {
        fidelityAlert.innerHTML = `⭐ <strong>Parabéns!</strong> Este pedido garante <strong>${slices} fatia(s)</strong> no Cartão Fidelidade!`;
    } else {
        fidelityAlert.innerHTML = `🎁 A cada R$ 90,00 você ganha 1 fatia no cartão fidelidade.`;
    }
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (forceOpen) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    } else {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function setupPaymentListener() {
    const paySelect = document.getElementById('cust-payment');
    const changeInput = document.getElementById('cust-change');
    paySelect.addEventListener('change', (e) => {
        changeInput.style.display = e.target.value === 'Dinheiro' ? 'block' : 'none';
    });
}

// Checkout WhatsApp
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (cart.length === 0) {
        alert('O seu carrinho está vazio!');
        return;
    }

    const name = document.getElementById('cust-name').value;
    const address = document.getElementById('cust-address').value;
    const payment = document.getElementById('cust-payment').value;
    const change = document.getElementById('cust-change').value;

    let total = cart.reduce((acc, item) => acc + item.price, 0);

    let message = `🧾 *Pedido - Maná Pizza X*

`;

    cart.forEach(item => {
        let detailsStr = item.details ? ` (${item.details})` : '';
        let obsStr = item.obs ? `
   └ _Obs: ${item.obs}_` : '';
        message += `• *${item.name}*${detailsStr} - R$ ${item.price.toFixed(2)}${obsStr}
`;
    });

    message += `
💰 *Total:* R$ ${total.toFixed(2)}

`;
    message += `👤 *Nome:* ${name}
`;
    message += `📍 *Endereço:* ${address}
`;
    message += `💳 *Pagamento:* ${payment}`;
    
    if (payment === 'Dinheiro' && change) {
        message += ` (Troco para R$ ${change})`;
    }

    const slices = Math.floor(total / 90);
    if (slices > 0) {
        message += `
⭐ *Cartão Fidelidade:* +${slices} fatia(s) acumulada(s)!`;
    }

    const phone = "5555996575594";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});
