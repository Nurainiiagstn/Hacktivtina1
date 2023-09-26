var form = document.getElementById("formtina")
var nama = document.getElementById("nama")
var availabilty = document.getElementById("availabilty")
var usia = document.getElementById("usia")
var lokasi = document.getElementById("lokasi")
var pengalaman = document.getElementById("yearexperience")
var email = document.getElementById("email")


var NamaProfile = document.getElementById("NamaProfile")
var AvaibilityProfile = document.getElementById("AvailabiltyProfile")
var UsiaProfile = document.getElementById("UsiaProfile")
var LokasiProfile = document.getElementById("LokasiProfile")
var PengalamanProfile = document.getElementById("PengalamanProfile")
var EmailProfile = document.getElementById("EmailProfile")


form.addEventListener("submit",function(event){
    event.preventDefault() 

    NamaProfile.innerText = nama.value
    AvaibilityProfile.innerText = availabilty.value
    UsiaProfile.innerText = usia.value
    LokasiProfile.innerText = lokasi.value
    PengalamanProfile.innerText = pengalaman.value
    EmailProfile.innerText = email.value

})