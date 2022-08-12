function rot13(str) {
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
      
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
      
      var resultStr = [];
      for(let i = 0; i < str.length ; i++){
          for(let j = 0; j < alphabets.length ; j++){
              if(str[i] === alphabets[j]){
              resultStr.push(alphabets13[j]);
              }
          }
      }
      return resultStr.join("");
  }

// İngilizce alfabeye göre 13 harf sonra olan harfi alphabets13 içinde tanımladık. Daha sonra str'yi for loopu içinde döndürüp 13 harf sonra olan versiyonuna dönüştürdük.