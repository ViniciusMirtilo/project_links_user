function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // light on
    img.setAttribute("src", "./assets/fursona_02.png")
  } else {
    // light off
    img.setAttribute("src", "./assets/Theme=Dark mode.jpg")
  }

  // pegar tag alt

  const alt = document.querySelector("#profile img")

  // substituir a legenda

  if (html.classList.contains("light")) {
    // light on
    alt.setAttribute("alt", "Fursona do Mirtilo")
  } else {
    // light off
    alt.setAttribute("alt", "Foto do vinicius")
  }
}
