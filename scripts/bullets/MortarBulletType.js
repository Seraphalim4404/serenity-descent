const MortarBulletType = extend(ArtilleryBulletType, {
  splashDamage: 1,
  lifetime: 60 * 1,
  speed: 1,
  testCollision(bullet, build) {
});

return this.super$testCollision(bullet, build) && bullet.fin() > minRange / bullet.type.range
