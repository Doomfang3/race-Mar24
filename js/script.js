window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')
  let game

  function startGame() {
    console.log('start game')
    game = new Game()
    game.start()
  }

  startButton.addEventListener('click', function () {
    startGame()
  })

  restartButton.addEventListener('click', function () {
    startGame()
    // Last option in case you have problems on the restart => window.location.reload()
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'KeyW') {
      game.player.directionY = -game.player.speed
    }
    if (event.code === 'KeyS') {
      game.player.directionY = game.player.speed
    }
    if (event.code === 'KeyA') {
      game.player.directionX = -game.player.speed
    }
    if (event.code === 'KeyD') {
      game.player.directionX = game.player.speed
    }
  })

  document.addEventListener('keyup', event => {
    if (event.code === 'KeyW') {
      game.player.directionY = 0
    }
    if (event.code === 'KeyS') {
      game.player.directionY = 0
    }
    if (event.code === 'KeyA') {
      game.player.directionX = 0
    }
    if (event.code === 'KeyD') {
      game.player.directionX = 0
    }
  })
})
