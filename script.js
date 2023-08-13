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
      11: 'Jack',
      12: 'Queen',
      13: 'King',
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

  //Adiciona los valores de numero de carta de las manos en un array
  for (var i = 0; i <= 12; i += 3) {
    ordenHand1.push(numeroDeCarta(hand1[i]));
  }

  for (var i = 0; i <= 12; i += 3) {
    ordenHand2.push(numeroDeCarta(hand2[i]));
  }

  //ANALISIS DE QUE MANO ES CADA UNA

  function determinarTipoDeMano1(mano) {
    const contadorNumeros = {}; //Crea objeto que recorre la lista traida (mano con 5 valores de cartas) y monta valores de carta como key y las veces que se repiten como value.
    mano.forEach((numero) => {
      contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
    });
    console.log(contadorNumeros);

    const numNumerosDiferentes = Object.keys(contadorNumeros).length; //Saca la cantidad de numeros que hay en los 5 valores de mano.
    console.log('numNumerosDiferentes: ', numNumerosDiferentes);
    const numRepeticiones = Object.values(contadorNumeros); //Crea una lista con la cantidad de veces que se repite cada valor dentro de la mano.
    console.log('numRepeticiones: ', numRepeticiones);

    if (numRepeticiones.includes(4)) {
      //Revisa si hay algun valor que se repita 4 veces y si es asi saca el valor exacto de la carta que se repite entregando un array con la mano, que tipo y el valor numerico de la carta que se repite.
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 4
      );
      return ['hand1', 'FourOfAKind', parseInt(numeroRepetido)];
    } else if (numRepeticiones.includes(3)) {
      //La misma revision anterior pero con 3 repeticiones de un valor.
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 3
      );
      return ['hand1', 'ThreeOfAKind', parseInt(numeroRepetido)];
    } else if (numRepeticiones.includes(2) && numNumerosDiferentes === 3) {
      //Lo mismo anterior pero analiza 2 valores que se repitan y entrega ambos al final.
      const numerosRepetidos = Object.keys(contadorNumeros).filter(
        (numero) => contadorNumeros[numero] === 2
      );
      const numerosRepetidosNumericos = numerosRepetidos.map((num) =>
        parseInt(num)
      );
      return [
        'hand1',
        'TwoPair',
        numerosRepetidosNumericos[0],
        numerosRepetidosNumericos[1],
      ];
    } else if (numRepeticiones.includes(2)) {
      //La misma revision anterior pero con 1 repeticion de un valor.
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 2
      );
      return ['hand1', 'OnePair', parseInt(numeroRepetido)];
    } else {
      //Como ningun numero se repite entrega lo anterior pero finalizando con el numero de valor mayor dentro de la mano.
      return ['hand1', 'HighCard', Math.max(...mano)];
    }
  }

  // Prueba que muestra que tipo de mano es en consola y guarda su valor en una lista con el numero de mano, el tipo y su carta ganadora.
  const tipoDeMano1 = determinarTipoDeMano1(ordenHand1);
  console.log('Tipo de mano 1:', tipoDeMano1);

  function determinarTipoDeMano2(mano) {
    //Realiza el mismo procedimiento explicado en la mano 1 pero con la mano 2
    const contadorNumeros = {};
    mano.forEach((numero) => {
      contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
    });

    const numNumerosDiferentes = Object.keys(contadorNumeros).length;
    const numRepeticiones = Object.values(contadorNumeros);

    if (numRepeticiones.includes(4)) {
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 4
      );
      return ['hand2', 'FourOfAKind', parseInt(numeroRepetido)];
    } else if (numRepeticiones.includes(3)) {
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 3
      );
      return ['hand2', 'ThreeOfAKind', parseInt(numeroRepetido)];
    } else if (numRepeticiones.includes(2) && numNumerosDiferentes === 3) {
      const numerosRepetidos = Object.keys(contadorNumeros).filter(
        (numero) => contadorNumeros[numero] === 2
      );
      const numerosRepetidosNumericos = numerosRepetidos.map((num) =>
        parseInt(num)
      );
      return [
        'hand2',
        'TwoPair',
        numerosRepetidosNumericos[0],
        numerosRepetidosNumericos[1],
      ];
    } else if (numRepeticiones.includes(2)) {
      const numeroRepetido = Object.keys(contadorNumeros).find(
        (numero) => contadorNumeros[numero] === 2
      );
      return ['hand2', 'OnePair', parseInt(numeroRepetido)];
    } else {
      return ['hand2', 'HighCard', Math.max(...mano)];
    }
  }

  // Prueba que muestra que tipo de mano es en consola y guarda su valor en una lista con el numero de mano, el tipo y su carta ganadora.
  const tipoDeMano2 = determinarTipoDeMano2(ordenHand2);
  console.log('Tipo de mano 2:', tipoDeMano2);

  // Función para comparar manos y determinar al ganador
  function determinarGanador(tipoDeMano1, tipoDeMano2) {
    //Se crea una lista para la jerarquía dentro de las tipos de manos en el poker
    const jerarquia = [
      'FourOfAKind',
      'ThreeOfAKind',
      'TwoPair',
      'OnePair',
      'HighCard',
    ];

    const indexMano1 = jerarquia.indexOf(tipoDeMano1[1]);
    const indexMano2 = jerarquia.indexOf(tipoDeMano2[1]); //Se revisa dentro de la jerarquía en que posicion se encuentra cada mano siendo mayor la importancia de su menor indice (inversamente proporsional)

    if (indexMano1 < indexMano2) {
      //Se comparan los indices de la jerarquía de las manos para determinar cual es la ganadora
      return tipoDeMano1;
    } else if (indexMano2 < indexMano1) {
      return tipoDeMano2;
    } else {
      return 'Empate';
    }
  }

  // Prueba que muestra el array de la mano ganadora y crea una lista final de la mano que gana con los 3 valores necesarios para el test
  const manoGanadora = determinarGanador(tipoDeMano1, tipoDeMano2);
  console.log('Mano ganadora: ', manoGanadora);

  if (manoGanadora[0] == 'hand1') {
    //Si la mano1 es la ganadora se analiza si son TwoPair para entregar el arreglo con ambos valores de los pares ordenados de mayor a menor, si no entrega los valores necesarios en el test y el valor de la carta ganadora
    if (manoGanadora[1] == 'TwoPair') {
      const result = new Result();
      result.winnerHand = tipoDeMano1[0];
      result.winnerHandType = tipoDeMano1[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[2]));
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[3]));
      result.compositionWinnerHand.reverse();
      return result;
    } else {
      const result = new Result();
      result.winnerHand = tipoDeMano1[0];
      result.winnerHandType = tipoDeMano1[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[2]));
      return result;
    }
  } else if (manoGanadora[0] == 'hand2') {
    //El mismo analisis que la ganadora 1 pero con la 2
    if (manoGanadora[1] == 'TwoPair') {
      const result = new Result();
      result.winnerHand = tipoDeMano1[0];
      result.winnerHandType = tipoDeMano1[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[2]));
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[3]));
      result.compositionWinnerHand.reverse();
      return result;
    } else {
      const result = new Result();
      result.winnerHand = tipoDeMano1[0];
      result.winnerHandType = tipoDeMano1[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[2]));
      return result;
    }
  } else if (manoGanadora == 'Empate') {
    //Si el resultado es empate se analiza cual mano tiene la carta de mayor valor y entrega los valores de esa mano para el test
    if (tipoDeMano1[2] > tipoDeMano2[2]) {
      const result = new Result();
      result.winnerHand = tipoDeMano1[0];
      result.winnerHandType = tipoDeMano1[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano1[2]));
      return result;
    } else if (tipoDeMano2[2] > tipoDeMano1[2]) {
      const result = new Result();
      result.winnerHand = tipoDeMano2[0];
      result.winnerHandType = tipoDeMano2[1];
      result.compositionWinnerHand.push(nombreDeCarta(tipoDeMano2[2]));
      return result;
    }
  }

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

  /*const result = new Result();
  result.winnerHand = 'hand1';
  result.winnerHandType = 'HighCard';
  result.compositionWinnerHand.push('As');
  return result;*/
}
