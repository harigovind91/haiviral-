const MASTER_KEY = "HARI_SCIENTIST_2026"; // आपकी मास्टर की

function unlockAdmin() {
    const key = document.getElementById('masterKeyInput').value;
    if(key === MASTER_KEY) {
        document.getElementById('adminLock').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        alert("Command Center Unlocked. Welcome Harigovind Ji.");
    } else {
        alert("ACCESS DENIED: अमान्य सुरक्षा कुंजी।");
    }
}

function killBlast() { alert("Admin: ब्लास्ट तुरंत रोक दिया गया।"); }
function boost() { alert("Admin: वायरल स्पीड 500 V-MPH तक बढ़ाई गई।"); }
