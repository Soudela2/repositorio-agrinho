document.addEventListener('DOMContentLoaded', () => {
    const ticketButtons = document.querySelectorAll('.ticket-card button');
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    const checkoutButton = document.getElementById('checkout-button');
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    let cart = []; // Array to store cart items

    // Function to update the cart display
    function updateCartDisplay() {
        cartItemsList.innerHTML = ''; // Clear current cart display
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block'; // Show empty message
            checkoutButton.disabled = true; // Disable checkout button
        } else {
            emptyCartMessage.style.display = 'none'; // Hide empty message
            checkoutButton.disabled = false; // Enable checkout button
            cart.forEach(item => {
                const li = document.createElement('li');document.addEventListener('DOMContentLoaded', () => {
    const ticketButtons = document.querySelectorAll('.ticket-card button');
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    const checkoutButton = document.getElementById('checkout-button');
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    let cart = []; // Array to store cart items

    // Function to update the cart display
    function updateCartDisplay() {
        cartItemsList.innerHTML = ''; // Clear current cart display
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block'; // Show empty message
            checkoutButton.disabled = true; // Disable checkout button
        } else {
            emptyCartMessage.style.display = 'none'; // Hide empty message
            checkoutButton.disabled = false; // Enable checkout button
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-quantity">x${item.quantity}</span>
                    <span>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    <button class="cart-item-remove" data-ticket-type="${item.type}">X</button>
                `;
                cartItemsList.appendChild(li);
                total += item.price * item.quantity;
            });
        }

        totalAmountSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`; // Update total
    }

    // Add event listeners to "Adicionar ao Carrinho" buttons
    ticketButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const ticketType = event.target.dataset.ticketType;
            const ticketPrice = parseFloat(event.target.dataset.price);
            const ticketName = event.target.parentNode.querySelector('h3').textContent;

            const existingItem = cart.find(item => item.type === ticketType);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    type: ticketType,
                    name: ticketName,
                    price: ticketPrice,
                    quantity: 1
                });
            }
            updateCartDisplay();
        });
    });

    // Add event listener for removing items from the cart
    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-item-remove')) {
            const ticketTypeToRemove = event.target.dataset.ticketType;
            const itemIndex = cart.findIndex(item => item.type === ticketTypeToRemove);

            if (itemIndex > -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    cart.splice(itemIndex, 1); // Remove item if quantity is 1
                }
            }
            updateCartDisplay();
        }
    });

    // Simulate checkout
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Compra finalizada com sucesso! Total: ' + totalAmountSpan.textContent + '\n\nObrigado por adquirir seus ingressos para a Festa de Marechal Cândido Rondon!');
            cart = []; // Clear cart after checkout
            updateCartDisplay();
        } else {
            alert('Seu carrinho está vazio. Por favor, adicione ingressos antes de finalizar a compra.');
        }
    });

    // Initial display update
    updateCartDisplay();
});
                li.innerHTML = `
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-quantity">x${item.quantity}</span>
                    <span>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    <button class="cart-item-remove" data-ticket-type="${item.type}">X</button>
                `;
                cartItemsList.appendChild(li);
                total += item.price * item.quantity;
            });
        }

        totalAmountSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`; // Update total
    }

    // Add event listeners to "Adicionar ao Carrinho" buttons
    ticketButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const ticketType = event.target.dataset.ticketType;
            const ticketPrice = parseFloat(event.target.dataset.price);
            const ticketName = event.target.parentNode.querySelector('h3').textContent;

            const existingItem = cart.find(item => item.type === ticketType);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    type: ticketType,
                    name: ticketName,
                    price: ticketPrice,
                    quantity: 1
                });
            }
            updateCartDisplay();
        });
    });

    // Add event listener for removing items from the cart
    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-item-remove')) {
            const ticketTypeToRemove = event.target.dataset.ticketType;
            const itemIndex = cart.findIndex(item => item.type === ticketTypeToRemove);

            if (itemIndex > -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    cart.splice(itemIndex, 1); // Remove item if quantity is 1
                }
            }
            updateCartDisplay();
        }
    });

    // Simulate checkout
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Compra finalizada com sucesso! Total: ' + totalAmountSpan.textContent + '\n\nObrigado por adquirir seus ingressos para a Festa de Marechal Cândido Rondon!');
            cart = []; // Clear cart after checkout
            updateCartDisplay();
        } else {
            alert('Seu carrinho está vazio. Por favor, adicione ingressos antes de finalizar a compra.');
        }
    });

    // Initial display update
    updateCartDisplay();
});