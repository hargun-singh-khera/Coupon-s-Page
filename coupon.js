function firstCoupon() {
    alert("Your voucher of Amazon has been applied successfully");
    document.getElementById('btn-first').innerHTML = "Applied Successfully";
    document.getElementById('btn-second').style.display = "none";
    document.getElementById('btn-third').style.display = "none";
    document.getElementById('btn-fourth').style.display = "none";
}

function secondCoupon() {
    alert("Your voucher of McDonalds has been applied successfully");
    document.getElementById('btn-second').innerHTML = "Applied Successfully";
    document.getElementById('btn-first').style.display = "none";
    document.getElementById('btn-third').style.display = "none";
    document.getElementById('btn-fourth').style.display = "none";
}

function thirdCoupon() {
    alert("Your voucher of KFC has been applied successfully");
    document.getElementById('btn-third').innerHTML = "Applied Successfully";
    document.getElementById('btn-first').style.display = "none";
    document.getElementById('btn-second').style.display = "none";
    document.getElementById('btn-fourth').style.display = "none";
}

function fourthCoupon() {
    alert("Your voucher of Nike has been applied successfully");
    document.getElementById('btn-fourth').innerHTML = "Applied Successfully";
    document.getElementById('btn-first').style.display = "none";
    document.getElementById('btn-second').style.display = "none";
    document.getElementById('btn-third').style.display = "none";
}
