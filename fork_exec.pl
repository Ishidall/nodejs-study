use strict;
use warnings;

print "forking...\n";

# forkシステムコールを呼び出す

my $pid = fork;

# forkに失敗すると返り値はundef

die "fork failed." unless defined $pid;

# プロセスが複製され、以下の処理を親プロセスと子プロセスが実行する

print "forked!\n";

# forkで生成された子プロセスでは、forkの返り値が0となる
# 親プロセスでは、生成された子プロセスのpidが入る

if ($pid == 0) {
  # 子プロセスはこちらを実行する

  # execシステムコールでプロセスの中身を書き換える
  exec "ruby -e 'loop do;sleep;end'";
} else {
  # 親プロセスはこちらを実行する

  # 子プロセスの終了を待つ
  waitpid($pid, 0);
}
