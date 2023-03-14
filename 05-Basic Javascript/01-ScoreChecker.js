let result;
result = 80;
  // TODO
if (result >= 90 && result <= 100){
  result = "'Selamat! Anda mendapatkan nilai A.'";
} else if (result >= 80 && result <= 89) {
  result = "'Selamat! Anda mendapatkan nilai B.'";
} else if (result >= 70 && result <= 79) {
  result = "'Selamat! Anda mendapatkan nilai C.'";
} else if (result >= 60  && result <= 69) {
  result = "'Selamat! Anda mendapatkan nilai D.'";
} else if (result < 60 && result >= 0) {
  result = "'Selamat! Anda mendapatkan nilai E.'";
}  else {
    result = null;
} 

console.log(result);

  // Jangan hapus kode ini
  return result;