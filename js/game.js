class Game {
  constructor() {
    this.gameIntro = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.endScreen = document.getElementById('game-end')
    this.width = 600
    this.height = 800
    this.player
    this.obstacles = []
    this.intervalId
    this.currentFrame = 0
    this.lives = 3
    this.score = 0
    this.gameOver = false
  }

  start() {
    this.gameIntro.style.display = 'none'
    this.gameScreen.style.display = 'block'
    this.endScreen.style.display = 'none'
    this.gameScreen.style.width = `${this.width}px`
    this.gameScreen.style.height = `${this.height}px`

    this.player = new Player(this.gameScreen)
    this.obstacles.push(new Obstacle(this.gameScreen))
    this.animate()
  }

  animate() {
    this.intervalId = setInterval(() => {
      this.currentFrame += 1

      if (this.currentFrame % 100 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen))
      }

      this.player.render()

      const nextObstacles = []
      this.obstacles.forEach(currentObstacle => {
        currentObstacle.render()
        if (this.player.didCollide(currentObstacle)) {
          // remove a life
          this.lives -= 1
          currentObstacle.element.remove()
          // check number of lives
          if (this.lives < 0) {
            this.gameOver = true
          }
        } else if (currentObstacle.top < this.gameScreen.clientHeight) {
          nextObstacles.push(currentObstacle)
        } else {
          this.score += 10
          currentObstacle.element.remove()
        }
      })
      this.obstacles = nextObstacles

      document.getElementById('score').innerText = this.score
      document.getElementById('lives').innerText = this.lives
      if (this.gameOver) {
        this.player.element.remove()
        this.obstacles.forEach(currentObstacle => {
          currentObstacle.element.remove()
        })
        this.gameScreen.style.display = 'none'
        this.endScreen.style.display = 'block'
        clearInterval(this.intervalId)
      }
    }, 1000 / 60)
  }
}
