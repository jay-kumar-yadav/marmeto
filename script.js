document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const quantityInput = document.getElementById('quantity');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const addToCartBtn = document.getElementById('addToCart');
    const cartMessage = document.getElementById('cartMessage');
    const cartProductDetails = document.getElementById('cartProductDetails');
    let selectedColor = null;
    let selectedSize = null;

    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            thumbnails.forEach(el => el.classList.remove('selected'));
            thumbnail.classList.add('selected');
        });
    });

    
    increaseQtyBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    
    decreaseQtyBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    
    document.querySelectorAll('.color-option').forEach(colorOption => {
        colorOption.addEventListener('click', () => {
            selectedColor = colorOption.getAttribute('data-color');
            document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
            colorOption.classList.add('selected');
        });
    });


    document.querySelectorAll('input[name="size"]').forEach(sizeOption => {
        sizeOption.addEventListener('change', () => {
            selectedSize = sizeOption.value;
        });
    });

    
    addToCartBtn.addEventListener('click', () => {
        const quantity = quantityInput.value;
        if (selectedColor && selectedSize && quantity > 0) {
            cartProductDetails.innerHTML = `
                Name: Embrace Sideboard<br>
                Color: ${selectedColor}<br>
                Size: ${selectedSize}<br>
                Quantity: ${quantity}<br>
                Price: $12999.00
            `;
            cartMessage.style.display = 'block';
        } else {
            alert('Please select a color, size, and quantity before adding to cart.');
        }
    });
});
