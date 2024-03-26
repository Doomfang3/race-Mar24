class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 80
    this.height = 160
    this.top = -this.height
    this.left = Math.round(Math.random() * (this.gameScreen.clientWidth - this.width - 100)) + 50
    this.directionX = 0
    this.directionY = 0
    this.speed = 5
    this.element = document.createElement('img')

    this.element.src = 'images/redCar.png'
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.position = 'absolute'

    this.gameScreen.appendChild(this.element)
  }

  render() {
    this.move()
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
  }

  move() {
    this.top += 4
  }
}
