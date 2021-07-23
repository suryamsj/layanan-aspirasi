const scriptURL = 'LINK GOOGLE SCRIPT MU';
const form = document.forms['form-aspirasi'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then((response) => {

            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Terima kasih sudah mengisi'
            });

            form.reset();
            console.log('Success!', response);
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Maaf silahkan coba lagi'
            });
        });
});