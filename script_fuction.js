function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // light on
    img.setAttribute("src", "./assets/fursona.png")
  } else {
    // light off
    img.setAttribute("src", "./assets/Theme=Dark mode.jpg")
  }
}
