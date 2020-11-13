function main() {
  // Put your code here
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
  console.log("All Place Names")

  names.map(name => console.log(name))

  console.log("")

  const theNames = names.filter(n => n.startsWith("The"))
  theNames.map(name => console.log(name))

}

main();