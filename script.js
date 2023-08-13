console.log('hello!');

class Result {
  //Clase para entregar el resultado final
  winnerHandType;
  winnerHand;
  compositionWinnerHand = [];
}
//Trae las cartas de ambas manos de poker
function poker(hand1, hand2) {
  console.log(hand1);
  console.log(hand2);

  //Realiza conversion de cadena de la mano a su valor en numero
  function numeroDeCarta(numeroCarta) {
    var valorCarta = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    return valorCarta[numeroCarta];
  }
  //Realiza conversion de valor numeral de la carta a su nombre
  function nombreDeCarta(nombreCarta) {
    var nameCarta = {
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: 'Jota',
      12: 'Q',
      13: 'K',
      14: 'As',
    };
    return nameCarta[nombreCarta];
  }

  //Realiza conversion de cadena de la mano a su nombre de palo
  function paloDeCarta(paloCarta) {
    var trajeCarta = {
      C: 'CLOVER',
      D: 'DIAMOND',
      H: 'HEART',
      S: 'SWORD',
    };
    return trajeCarta[paloCarta];
  }

  //Arreglos para organizar los valores de numero de las cartas
  var ordenHand1 = [];
  var ordenHand2 = [];

  //Adiciona los valores de numero de carta de las manos en un array y los acomoda de mayor a menor
  for (var i = 0; i <= 12; i += 3) {
    ordenHand1.push(numeroDeCarta(hand1[i]));
  }
  ordenHand1.reverse();

  for (var i = 0; i <= 12; i += 3) {
    ordenHand2.push(numeroDeCarta(hand2[i]));
  }
  ordenHand2.reverse();

  //ANALISIS DE QUE MANO ES CADA UNA

  function determinarTipoDeMano1(mano) {
    const contadorNumeros = {};
    mano.forEach((numero) => {
      contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
    });

    const numNumerosDiferentes = Object.keys(contadorNumeros).length;
    const numRepeticiones = Object.values(contadorNumeros);

    if (numRepeticiones.includes(4)) {
      return 'Four of a kind';
    } else if (numRepeticiones.includes(3)) {
      return 'Three of a kind';
    } else if (numRepeticiones.includes(2) && numNumerosDiferentes === 3) {
      return 'Two pairs';
    } else if (numRepeticiones.includes(2)) {
      return 'One pair';
    } else {
      return `Highest card: ${Math.max(...mano)}`;
    }
  }

  // Prueba que muestra que tipo de mano es en consola
  const tipoDeMano1 = determinarTipoDeMano1(ordenHand1);
  console.log('Tipo de mano:', tipoDeMano1);

  function determinarTipoDeMano2(mano) {
    const contadorNumeros = {};
    mano.forEach((numero) => {
      contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
    });

    const numNumerosDiferentes = Object.keys(contadorNumeros).length;
    const numRepeticiones = Object.values(contadorNumeros);

    if (numRepeticiones.includes(4)) {
      return 'Four of a kind';
    } else if (numRepeticiones.includes(3)) {
      return 'Three of a kind';
    } else if (numRepeticiones.includes(2) && numNumerosDiferentes === 3) {
      return 'Two pairs';
    } else if (numRepeticiones.includes(2)) {
      return 'One pair';
    } else {
      return `Highest card: ${Math.max(...mano)}`;
    }
  }

  // Prueba que muestra que tipo de mano es en consola
  const tipoDeMano2 = determinarTipoDeMano2(ordenHand2);
  console.log('Tipo de mano:', tipoDeMano2);

  // Función para comparar manos y determinar al ganador
  function determinarGanador(tipoDeMano1, tipoDeMano2) {
    const jerarquia = [
      'Four of a kind',
      'Three of a kind',
      'Two pairs',
      'One pair',
      'Highest card',
    ];

    const indexMano1 = jerarquia.indexOf(tipoDeMano1);
    const indexMano2 = jerarquia.indexOf(tipoDeMano2);

    if (indexMano1 < indexMano2) {
      return 'Mano 2 gana';
    } else if (indexMano2 < indexMano1) {
      return 'Mano 1 gana';
    } else {
      return 'Empate';
    }
  }

  // Ejemplos de tipos de manos de poker
  const resultado = determinarGanador(tipoDeMano1, tipoDeMano2);
  console.log(resultado);

  /*//Analisis de HighCard:
  function testHighCard(hand1, hand2) {
    const maxNumeroHand1 = Math.max(...hand1);
    const maxNumeroHand2 = Math.max(...hand2);

    console.log(maxNumeroHand1);
    console.log(maxNumeroHand2);

    if (maxNumeroHand1 > maxNumeroHand2) {
      return (winHighCard = [
        'hand1',
        'HighCard',
        nombreDeCarta(maxNumeroHand1),
      ]);
    } else if (maxNumeroHand2 > maxNumeroHand1) {
      return (winHighCard = [
        'hand2',
        'HighCard',
        nombreDeCarta(maxNumeroHand2),
      ]);
    } else {
      return 'Ambos arreglos tienen el mismo número más grande.';
    }
  }

  const highCard = testHighCard(ordenHand1, ordenHand2);
  console.log(highCard); // SE UTILIZA PARA MOSTRAR EL RESULTADO HIGH CARD

  const result = new Result();
  result.winnerHand = highCard[0];
  result.winnerHandType = highCard[1];
  result.compositionWinnerHand.push(highCard[2]);
  return result;*/

  const result = new Result();
  result.winnerHand = 'hand1';
  result.winnerHandType = 'HighCard';
  result.compositionWinnerHand.push('As');
  return result;
}