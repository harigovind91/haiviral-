function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'hi'}, 'google_translate_element');
}

function pay(amt) {
    const upiID = "harigovindsingh91-2@okhdfcbank";
    // मोबाइल पर सीधे भुगतान ऐप खोलना
    window.location.href = `upi://pay?pa=${upiID}&pn=Harigovind_Singh&am=${amt}&cu=INR&tn=HAI_Viral_Access`;
    
    // भुगतान के बाद डैशबोर्ड पर भेजें
    setTimeout(() => { window.location.href = "dashboard.html"; }, 5000);
}

function saveUser() {
    alert("Profile Created Successfully! Please pay to start Viral Blast.");
}

