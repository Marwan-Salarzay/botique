
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('shipping-form');
    const inputs = form.querySelectorAll('input, select');
    const progressBar = document.querySelector('.progress');
    const submitBtn = document.querySelector('.submit-btn');


    function updateProgress() {
        const totalFields = inputs.length;
        let filledFields = 0;

        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                filledFields++;
            }
        });

        const progress = (filledFields / totalFields) * 100;
        progressBar.style.width = `${progress}%`;
    }

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('focused');
            }
        });

        input.addEventListener('input', updateProgress);

        if (input.value.trim() !== '') {
            input.parentElement.classList.add('focused');
        }
    });

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        let tempItems = []
        let imgName = ""
        let imgSrc = ""
        let allItemsPrice = 0
        let quantity = ""
        let size = ""
        let produtUID = ""
        let FBRtax = 10
        let salestax = 800
    
        let localList = localStorage.getItem("mylist")
        if(localList){
            JSON.parse(localList).forEach((element)=>{
                tempItems.push(element)
            })
            console.log(tempItems);
        }
        tempItems.forEach((e)=>{
            produtUID += `__${e.uId}`
            imgName += `__${e.imgName}`;
            imgSrc += `__${e.imgSrc}`;
            allItemsPrice += parseInt(e.allItemsPrice*e.quantity);
            quantity += `__${e.quantity}`;
            size += `__${e.size}`;

            console.log(allItemsPrice);

        })
        console.log(allItemsPrice);
        // console.log(allItemsPrice);
        // allItemsPrice.toString()


        const formData = {
            firstName: document.getElementById('first-name').value.trim(),
            lastName: document.getElementById('last-name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim(),
            city: document.getElementById('city').value.trim(),
            state: document.getElementById('state').value.trim(),
            zip: document.getElementById('zip').value.trim(),
            paymentMethod: document.getElementById('payment-method').value.trim(),
            country: document.getElementById('country').value.trim(),
            productId:produtUID,
            imgName:imgName, 
            imgSrc:imgSrc,
            allItemsPrice:allItemsPrice+salestax+FBRtax ,
            quantity:quantity,
            size:size 
        };
        

        console.log("Collected Form Data:", formData); 
        submitBtn.classList.add('loading');

        try {
            const response = await fetch('http://localhost:3000/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log("Server Response:", result);

            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            submitBtn.querySelector('.btn-text').textContent = 'Order Placed!';
            
            setTimeout(() => {
                form.reset();
                submitBtn.classList.remove('success');
                submitBtn.querySelector('.btn-text').textContent = 'Complete Order';
                progressBar.style.width = '0%';
                inputs.forEach(input => input.parentElement.classList.remove('focused'));
                localStorage.clear()
                showPopup()
            }, 2000);

        } catch (error) {
            console.error("Error submitting form:", error);

            alert("An error occurred while submitting the form. Please try again.");

            submitBtn.classList.remove('loading');
        }
    });

    updateProgress();
});


const overlay = document.getElementById('thankYouOverlay');
    const continueBtn = document.getElementById('continueBtn');
    
    function hidePopup() {
        overlay.classList.remove('active');
        window.location.href = "index.html"
    }
    function showPopup() {
        overlay.classList.add('active');
    }
    
    continueBtn.addEventListener('click', hidePopup);