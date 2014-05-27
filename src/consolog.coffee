module.exports = (args...)->
  process.stdout.write args.join(" ")
  process.stdout.write "\n"
