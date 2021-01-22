namespace SpriteKind {
    export const box = SpriteKind.create()
    export const box2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`tile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.box, function (sprite, otherSprite) {
    otherSprite.x += 10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    hp.value += -1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(100, 9999), 0)
    music.pewPew.playUntilDone()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    hp.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    hp.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    jetpack_cat.follow(mySprite, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile13`, function (sprite, location) {
    hp.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile20`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`tile19`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    hp.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(true)
})
let projectile: Sprite = null
let hp: StatusBarSprite = null
let jetpack_cat: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 3 5 5 e e 5 5 3 5 5 4 . . 
    4 5 3 4 4 5 5 5 5 4 4 3 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 2 f . f 5 f 
    . . . f 2 2 2 2 2 2 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . 1 1 . . 1 1 . . 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
jetpack_cat = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d f f f f f 
    f d d f d d f d f f f f 2 f 
    f b d d b b d d f f 2 5 5 f 
    . f 2 2 2 2 2 2 f f f f 2 f 
    . f b d d d d d d f f f f f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
hp = statusbars.create(20, 4, StatusBarKind.Health)
hp.setLabel("HP")
hp.positionDirection(CollisionDirection.Top)
hp.value = 50
hp.max = 50
hp.attachToSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.placeOnRandomTile(mySprite, assets.tile`tile10`)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 400
tiles.placeOnRandomTile(jetpack_cat, sprites.dungeon.stairLadder)
jetpack_cat.ay = 400
let move_block = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.box)
move_block.ay = 600
tiles.placeOnRandomTile(move_block, sprites.dungeon.collectibleInsignia)
forever(function () {
    music.powerUp.playUntilDone()
    music.powerDown.playUntilDone()
})
