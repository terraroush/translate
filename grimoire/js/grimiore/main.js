function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------");

  allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5
    }
  ]

  const goodSpellBook = allSpells.filter(spell => !spell.IsEvil)
  const evilSpellBook = allSpells.filter(spell => spell.IsEvil)

  const goodSpells = goodSpellBook.map(spell => spell.Name).toString().split(",").join("\n")
  const evilSpells = evilSpellBook.map(spell => spell.Name).toString().split(",").join("\n")



  console.log("Good Book")
  console.log(goodSpells)
  console.log("")
  console.log("Evil Book")
  console.log(evilSpells)
}

main();