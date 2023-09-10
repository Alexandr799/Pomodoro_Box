run:
	docker run -d -p 4200:5500 --rm --name pomodoro alexstrigo/pomodoro
# run-dev:
# 	docker run -d -p 3000:5500 -v "/home/alex/my-project/portfolio/Pomodoro_Box:/app" -v /app/node_modules  --rm --name pomodoro_dev alexstrigo/pomodoro
stop:
	docker stop pomodoro