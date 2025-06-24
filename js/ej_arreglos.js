
        function mostrarResultado(id, texto) {
            const elemento = document.getElementById(id);
            elemento.textContent = texto;
            elemento.style.display = 'block';
        }

        function ejercicio1() {
            const frutas = document.getElementById('frutas1').value.split(';');
            const resultado = `frutas[0]: ${frutas[0]}\nfrutas[1]: ${frutas[1]}\nfrutas[2]: ${frutas[2]}`;
            mostrarResultado('result1', resultado);
        }

        function ejercicio2() {
            const numeros = document.getElementById('numeros2').value.split(';').map(Number);
            const agregar = Number(document.getElementById('agregar2').value);
            numeros.push(agregar);
            mostrarResultado('result2', `Resultado: [${numeros.join(', ')}]`);
        }

        function ejercicio3() {
            const datos = [];
            datos[0] = Number(document.getElementById('num1_3').value);
            datos[1] = Number(document.getElementById('num2_3').value);
            mostrarResultado('result3', `Resultado: [${datos.join(', ')}]`);
        }

        function ejercicio4() {
            const saludo = document.getElementById('saludo4').value;
            mostrarResultado('result4', saludo);
        }

        function ejercicio5() {
            const palabra = document.getElementById('palabra5').value;
            mostrarResultado('result5', `Caracteres: ${palabra.length}`);
        }

        function ejercicio6() {
            const nombre = document.getElementById('nombre6').value;
            let resultado = '';
            for (let i = 0; i < nombre.length; i++) {
                resultado += `${nombre[i]}\n`;
            }
            mostrarResultado('result6', resultado);
        }

        function ejercicio7() {
            const palabra = document.getElementById('palabra7').value;
            const letras = palabra.split('');
            mostrarResultado('result7', `[${letras.join(', ')}]`);
        }

        function ejercicio8() {
            const numeros = document.getElementById('numeros8').value.split(';').map(Number);
            mostrarResultado('result8', `[${numeros.join(', ')}]`);
        }

        function ejercicio9() {
            const frutas = document.getElementById('frutas9').value.split(';');
            let resultado = '';
            for (let i = 0; i < frutas.length; i++) {
                resultado += `${frutas[i]}\n`;
            }
            mostrarResultado('result9', resultado);
        }

        function ejercicio10() {
            const frutas = document.getElementById('frutas10').value.split(';');
            let resultado = '';
            let i = 0;
            while (i < frutas.length) {
                resultado += `${frutas[i]}\n`;
                i++;
            }
            mostrarResultado('result10', resultado);
        }

        function ejercicio11() {
            const palabra = document.getElementById('palabra11').value;
            let resultado = '';
            for (let i = 0; i < palabra.length; i++) {
                resultado += `${palabra[i]}\n`;
            }
            mostrarResultado('result11', resultado);
        }

        function ejercicio12() {
            const palabra = document.getElementById('palabra12').value;
            let resultado = '';
            let j = 0;
            while (j < palabra.length) {
                resultado += `${palabra[j]}\n`;
                j++;
            }
            mostrarResultado('result12', resultado);
        }

        function ejercicio13() {
            const palabra = document.getElementById('palabra13').value.toLowerCase();
            let vocales = 0;
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
                    vocales++;
                }
            }
            mostrarResultado('result13', `Vocales: ${vocales}`);
        }

        function ejercicio14() {
            const palabra1 = document.getElementById('palabra14_1').value;
            const palabra2 = document.getElementById('palabra14_2').value;
            let resultado = '';
            for (let i = 0; i < Math.max(palabra1.length, palabra2.length); i++) {
                resultado += `Posición ${i}: ${palabra1[i] === palabra2[i]}\n`;
            }
            mostrarResultado('result14', resultado);
        }

        function ejercicio15() {
            const numeros = document.getElementById('numeros15').value.split(';').map(Number);
            let resultado = '';
            for (let i = 0; i < numeros.length; i++) {
                const numero = numeros[i];
                resultado += `Divisores de ${numero}:\n`;
                let d = 1;
                while (d <= numero) {
                    if (numero % d === 0) {
                        resultado += `${d}\n`;
                    }
                    d++;
                }
                resultado += '\n';
            }
            mostrarResultado('result15', resultado);
        }

        function ejercicio16() {
            const numeros = document.getElementById('numeros16').value.split(';').map(Number);
            let resultado = '';
            for (let i = 0; i < numeros.length; i++) {
                const numero = numeros[i];
                let suma = 0;
                let d = 1;
                while (d < numero) {
                    if (numero % d === 0) {
                        suma += d;
                    }
                    d++;
                }
                resultado += `Suma divisores de ${numero}: ${suma}\n`;
            }
            mostrarResultado('result16', resultado);
        }

        function ejercicio17() {
            const numeros = document.getElementById('numeros17').value.split(';').map(Number);
            let resultado = '';
            for (let i = 0; i < numeros.length; i++) {
                const numero = numeros[i];
                let suma = 0;
                let d = 1;
                while (d < numero) {
                    if (numero % d === 0) {
                        suma += d;
                    }
                    d++;
                }
                if (suma === numero) {
                    resultado += `${numero} es perfecto\n`;
                } else {
                    resultado += `${numero} NO es perfecto\n`;
                }
            }
            mostrarResultado('result17', resultado);
        }