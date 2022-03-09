#railsアプリの場所
$app_dir = "/var/www/rails-react-app/api"

$worker  = 2
$timeout = 30
# プロセスIDの保存先を指定
$pid  = File.expand_path 'tmp/pids/unicorn.pid', $app_dir

# ポート番号を指定
$listen = File.expand_path 'tmp/sockets/.unicorn.sock', $app_dir

# エラーのログを記録するファイルを指定
$stderr_path File.expand_path '/log/unicorn.stderr.log', $app_dir

# 通常のログを記録するファイルを指定
$stdout_path = File.expand_path '/log/unicorn.stdout.log', $app_dir

#応答時間を待つ上限時間を設定
$timeout 30

working_directory $app_dir
worker_processes $worker
pid $pid
stderr_path $stderr_path
stdout $stdout_path
listen $listen
timeout $timeout

# ダウンタイムなしでUnicornを再起動時する
preload_app true

GC.respond_to?(:copy_on_write_friendly=) && GC.copy_on_write_friendly = true

check_client_connection false

run_once = true

before_fork do |server, worker|
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.connection.disconnect!

  if run_once
    run_once = false # prevent from firing again
  end

  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exist?(old_pid) && server.pid != old_pid
    begin
      sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
      Process.kill(sig, File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH => e
      logger.error e
    end
  end
end

after_fork do |_server, _worker|
  defined?(ActiveRecord::Base) && ActiveRecord::Base.establish_connection
end