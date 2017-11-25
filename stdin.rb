file = $stdin;
lines = file.readlines; #標準入力からの入力を全て受け取る
file.close;

file = $stdout;
file.write(lines.join);
file.close;
