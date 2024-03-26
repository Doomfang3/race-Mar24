class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 60
    this.height = 120
    this.top = this.gameScreen.clientHeight - this.height - 70
    this.left = this.gameScreen.clientWidth / 2 - this.width / 2
    this.directionX = 0
    this.directionY = 0
    this.speed = 5
    this.element = document.createElement('img')

    this.element.src = '/images/car.png'
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
    if (this.top >= 0 && this.top <= this.gameScreen.clientHeight - this.height) {
      this.top += this.directionY
    }
    if (this.top <= 0) {
      this.top = 0
    }
    if (this.top >= this.gameScreen.clientHeight - this.height) {
      this.top = this.gameScreen.clientHeight - this.height
    }

    if (this.left >= 50 && this.left <= this.gameScreen.clientWidth - this.width - 50) {
      this.left += this.directionX
    }
    if (this.left <= 50) {
      this.left = 50
    }
    if (this.left >= this.gameScreen.clientWidth - this.width - 50) {
      this.left = this.gameScreen.clientWidth - this.width - 50
    }
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    )
  }
}
