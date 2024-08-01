//sliders image
let slideIndex = 0;
showSlides();

function showSlides() {
  const sliders = document.querySelectorAll('.mySlides');
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  if (slideIndex >= sliders.length) {
    slideIndex = 0;
  }

  sliders[slideIndex].style.display = 'block';
  slideIndex++;
  setTimeout(showSlides, 2000);
}

// Form Alert
function myFunction() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name == '' || email == '') {
    alert('Data tidak boleh kosong');
    return false;
  } else {
    alert('Data sudah kami terima');
  }
}
