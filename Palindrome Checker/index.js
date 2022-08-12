// -------------------Türkçe Açıklamalı Palindrome Checker-------------------

function palindrome(str) {
    str = str.toLowerCase() // Bütün karakterleri küçük harf yapıyoruz..
    str = str.replace(/[\W_]/g,""); // Regex yöntemiyle istenmeyen (kelime olmayan) karakterleri almıyoruz..  
    let splitStr = str.split(""); // str'yi array yapıyoruz.
    let reverseStr = splitStr.reverse() // str'yi ters çeviriyoruz.
    let joinStr = reverseStr.join("") // tekrardan string'e çeviriyoruz..
    
    
  
    if (str == joinStr){
      return true
    } else {
      return false
    }
     
  }