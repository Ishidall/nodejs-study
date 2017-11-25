file = File.open("nyan.txt", "r");
lines = file.readlines;
file.close;

file = $stdout;
file.write(lines.join);
file.close;
