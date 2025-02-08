document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("1359483961")) {
        const targetElement = `
        <div class="form-container">
            <form id="userForm" class="form">
                <div class="form-group">
                    <input type="text" id="brand" name="brand" placeholder="اسم البراند تبع العطر" required>
                </div>
                <div class="form-group">
                    <input type="text" id="perfume" name="perfume" placeholder="اسم العطر" required>
                </div>
                <div class="form-group">
                    <div class="radio-group" id="type-group">
                        <label>نوع العطر</label>
                        <label><input type="radio" name="type" value="رجالي" required><span>رجالي</span></label>
                        <label><input type="radio" name="type" value="نسائي" required><span>نسائي</span></label>
                    </div>
                </div>
                <div class="form-group">
                    <label>تركيز العطر</label>
                    <input type="number" id="concentration" name="concentration" required>
                </div>
                <div class="form-group">
                    <label>الكمية</label>
                    <input type="number" id="quantity" name="quantity" required>
                </div>
                <button type="submit">اطلب الآن</button>
            </form>
        </div>`;

        document.querySelector('.breadcrumbs').insertAdjacentHTML('afterend', targetElement);

        document.getElementById("userForm").addEventListener("submit", function (event) {
            event.preventDefault();
            
            const brand = document.getElementById("brand").value;
            const perfume = document.getElementById("perfume").value;
            const type = document.querySelector('input[name="type"]:checked').value;
            const concentration = document.getElementById("concentration").value;
            const quantity = document.getElementById("quantity").value;
            
            const message = `طلب جديد:\n\nاسم البراند: ${brand}\nاسم العطر: ${perfume}\nنوع العطر: ${type}\nتركيز العطر: ${concentration}%\nالكمية: ${quantity}`;
            
            const phoneNumber = "+201557882790";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappURL, "_blank");
        });
    } else {
        console.log('Page Not Found');
    }
});
