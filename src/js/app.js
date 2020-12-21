
// const heroes = { name: 'Маг', health: 10 };

export default function getHealth(obj) {
  if (obj.health > 50) {
    return ('healthy');
  }
  if (obj.health >= 15 && obj.health <= 50) {
    return ('wounded');
  }
  if (obj.health < 15) {
    return ('critical');
  }
}



