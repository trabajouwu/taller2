const d = document;


/*Nav */

const $navBtn = d.querySelectorAll(".nav-btn p"),
$navBtnDiv = d.querySelectorAll(".nav-btn"),
$container = d.querySelectorAll(".container");

let selected = undefined;

d.addEventListener("click", e => {
  $navBtn.forEach((el , index) => {
    if (e.target === el || e.target === $navBtnDiv[index]) {
      if (selected !== undefined) {
        $container[selected].classList.remove("visible");
      }
        $navBtn.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
      selected = index;
      $container[index].classList.add("visible")
    }
  })
})

/*Tercer ejercicio */

const palabras = ["Arancel", "Comercio exterior", "Competencia económica", "Globalización"],
palabrasSignificado = ["Es una clase de impuesto dado a un producto extranjero, el cual existe con el fin de obtener dinero y proteger a las empresas locales", "Es el comercio de productos o servicios entre varios países", "Es el término con el que nos referimos a la 'rivalidad' que existe entre dos o más empresas de un sector, las cuales buscan mayor beneficio", "Es el proceso en el que la economía mundial se unifica, disminuyendo los costes de importación y exportación y buscando una mayor cooperación económica internacional"],
$selectorSignificado = d.querySelectorAll(".palabra p"),
$selectorSignificadoDiv = d.querySelectorAll(".palabra"),
$significadosTitulo = d.querySelector(".significado-titulo"),
$significadosTexto = d.querySelector(".significado-texto");

d.addEventListener("click", e => {
  $selectorSignificado.forEach((el, index) => {
    if(e.target === el || e.target === $selectorSignificadoDiv[index]){
      $significadosTitulo.textContent = palabras[index];
      $significadosTexto.textContent = palabrasSignificado[index];
      $selectorSignificado.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})


/*Cuarto ejercicio */

const topPaises = ["Argentina", "El Salvador", "Ecuador", "Panamá", "Uruguay", "Colombia", "Brasil", "México", "Perú", "Chile"],
topPaisesDescripciones = ["El país con mayor deuda pública, con el equivalente de casi el 42% del PIB nominal es Argentina. Esta, además, ha tenido una gran inflación durante los últimos años", "Este pequeño país no sólo es de los más inseguros de la región, sino que es el segundo con mayor deuda externa con el equivalente al 33.2% de su PIB nominal", "Ecuador sigue de cerca al Salvador con casi un tercio de su PIB en deuda externa", "Panamá, a pesar de ser considerado el mayor paraíso fiscal de Latam y tener el canal de Panamá, se encuentra en esta lista con un 31.6% de su PIB nominal en deuda pública", "Uruguay ha experimentado un crecimiento relativamente estable y tiene una clase media marcada. Sin embargo, en su deuda externa, se distancia en tan sólo un 0.2%  de Panamá", "Nuestro país no se queda atrás en la lista, y aunque no alcanza los niveles de Argentina o el Salvador, aún tiene una deuda externa del 16.8% del PIB nominal", "Brasil es uno de los países más desiguales de la región, además de ser uno de los más grandes del mundo. Su deuda externa es del 9.8% de su PIB", "México tiene una economía fuerte, aunque durante su historia ha tenido algunos problemas económicos que lo llevan a situarse en el octavo puesto", "Perú ha sido uno de los países más afectados por la pandemia, lo que sumado a la deuda externa del 7.5% de su PIB que tenía acumulada lo ha afectado mucho", "Chile, a pesar de ser considerado uno de los países con mayor libertad económica del mundo, está en esta lista con una deuda externa del 5.3% de su PIB"],
$selectorPaises = d.querySelectorAll(".numero p"),
$selectorPaisesDiv = d.querySelectorAll(".numero"),
$paisesTitulo = d.querySelector(".paises-titulo"),
$paisesTexto = d.querySelector(".paises-texto");

d.addEventListener("click", e => {
  $selectorPaises.forEach((el, index) => {
    if(e.target === el || e.target === $selectorPaisesDiv[index]){
      $paisesTitulo.textContent = topPaises[index];
      $paisesTexto.textContent = topPaisesDescripciones[index];
      $selectorPaises.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})
