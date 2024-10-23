// import data from '../../json/data.json';

// export default function handleFormSubmit() {
//   const input = document.getElementById('input-zip-code');
//   const errorMessage = document.getElementById('error-message');
//   const btnWithZipCode = document.querySelector('.btnWithZipCode');

//   const toggleErrorMessage = (show, input, errorMessage) => {
//     if (input) {
//       input.classList.toggle('error', show);
//     }
//     if (errorMessage) {
//       errorMessage.style.display = show ? 'block' : 'none';
//     }
//   };

//   if (input) {
//     input.addEventListener('input', () => {
//       input.value = input.value.slice(0, 5);
//       if (input.value.length === 5) {
//         toggleErrorMessage(false, input, errorMessage);
//       }
//     });
//   }

//   if (btnWithZipCode) {
//     btnWithZipCode.addEventListener('click', () => {
//       const zipCode = input.value;
//       if (zipCode.length !== 5) {
//         toggleErrorMessage(true, input, errorMessage);
//         return;
//       }
//       toggleErrorMessage(false, input, errorMessage);
//       const url = new URL(data.form.link);

//       url.searchParams.append('zipcode', zipCode);
//       window.location.href = url.toString();
//     });
//   }
// }
