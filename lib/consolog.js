(function() {
  var __slice = [].slice;

  module.exports = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    process.stdout.write(args.join(" "));
    return process.stdout.write("\n");
  };

}).call(this);
