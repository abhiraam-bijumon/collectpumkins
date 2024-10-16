namespace SpriteKind {
    export const Timer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Timer, function (sprite, otherSprite) {
    info.changeCountdownBy(10)
    sprites.destroy(otherSprite)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
info.startCountdown(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 a 6 6 a 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 a a a a 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . a a a a a a a a . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 8 . . . 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(5000, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f f . . f . . f . . . . . 
        . . . f . . . f . . f . . . . . 
        . . . f . . . f f f f . . . . . 
        . . . f f . . . . . f . . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.x = randint(0, 160)
    mySprite.y = randint(0, 120)
})
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
        . 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . 1 1 1 1 1 1 1 1 . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . . . 1 1 1 1 1 . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        `, SpriteKind.Enemy)
    mySprite.x = randint(0, 120)
    mySprite.y = randint(0, 120)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . e e e . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . 7 7 e e e . . . 4 4 4 4 . 
        . . . 7 7 7 7 e e e e e 4 4 4 4 
        . . . 4 4 7 7 7 4 4 4 e 4 4 4 4 
        . 4 4 4 4 e 4 4 4 4 4 e 4 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 e 4 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 e e 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 
        4 4 4 4 4 e 4 4 4 4 4 4 e 4 4 4 
        . 4 4 4 4 e e 4 4 4 4 e e 4 4 4 
        . 4 4 4 4 4 . 4 4 4 4 . 4 4 4 4 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), randint(-100, 100))
    projectile.setBounceOnWall(true)
    projectile.lifespan = 1000
})
