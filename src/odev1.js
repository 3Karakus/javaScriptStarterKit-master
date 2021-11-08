//ASAL OLUP OLMADIĞINI BULMA
function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  let arr = [3, 17, 479, 35, 865];
  
  arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(`${element} Bir asal sayıdır.`);
    } else {
      console.log(`${element} Bir asal sayı değildir.`);
    }
  });

//ARKADAŞ SAYI BULMA
const number1 = 17296
const number2 = 156

let total1 = 0
let total2 = 0


const isFriend = (s1, s2) => {
    for (let index = 0; index < s1; index++) {
        if (number1 % index === 0) {
            total1 += index
        }
    }
    for (let index = 0; index < s2; index++) {
        if (number2 % index === 0) {
            total2 += index
        }
    }

    return (total1 === s2 && total2 === s1) ? "Arkadaş sayı." : "Arkadaş sayı değil."
}


console.log(isFriend(number1, number2))

//1000'E KADARKİ TÜM MÜKEMMEL SAYILAR
function perfectNumbers() {
    for (let i = 0; i < 1000; i++) {
        let total = 0
        for (let j = 0; j <= i; j++) {
            if (i%j == 0) {
                total = total + j
            }  
        }
        if (2*i == total) {
            console.log(i + " Mükemmel sayıdır.")
        }
    }
}

perfectNumbers()

//1000'E KADARKİ TÜM ASAL SAYILAR
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 1000; i++){
    if(isPrime(i)) console.log(i);
}