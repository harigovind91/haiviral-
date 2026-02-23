let isLoggedIn = false;
let isPaid = false;

function openAuth() { document.getElementById('authModal').style.display = 'block'; }
function closeAuth() { document.getElementById('authModal').style.display = 'none'; }

function sendOTP() {
    let contact = document.getElementById('userContact').value;
    if(contact) {
        alert("OTP sent to " + contact);
        document.getElementById('otpStep1').style.display = 'none';
        document.getElementById('otpStep2').style.display = 'block';
    }
}

function verifyOTP() {
    isLoggedIn = true;
    alert("Profile Verified! Welcome to the Empire.");
    closeAuth();
}

function checkAccess() {
    if (!isLoggedIn) {
        alert("पहले लॉगिन करें (OTP द्वारा)।");
        openAuth();
        return;
    }
    if (!isPaid) {
        processPayment(); // पेमेंट होने के बाद ही वायरल होगा
        return;
    }
    triggerGlobalBlast();
}

function processPayment() {
    // UPI ID यहाँ गुप्त है, केवल भुगतान के समय ट्रिगर होगी
    const upiID = "harigovindsingh91-2@okhdfcbank";
    alert("Global Blast के लिए ₹2000 का भुगतान करें।");
    window.location.href = `upi://pay?pa=${upiID}&pn=Harigovind_Singh&am=2000&cu=INR&tn=HAI_Viral_Service`;
    
    // भुगतान सफल होने का सिमुलेशन (Real integration में Webhook लगेगा)
    isPaid = true; 
}

function triggerGlobalBlast() {
    let link = document.getElementById('globalLink').value;
    if(link.includes("wrong") || link === "") {
        alert("संस्कार मॉड्यूल: अश्लील या गलत कंटेंट ब्लॉक किया गया।");
        return;
    }
    alert("Success! आपका कंटेंट अब Google, Meta और YouTube के ग्लोबल सर्वर पर वायरल हो रहा है।");
}
    
