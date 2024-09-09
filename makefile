update: update-check
	$(MAKE) .update

.update: compose.yml Dockerfile 
	$(MAKE) down
	docker-compose up -d --build
	@touch .update

down:
	docker-compose  down
	@rm -f .update

update-check:
	docker-compose ps -q | grep -q "" || rm -f .update

hash:
	@echo "calcul du hash"
	@find . -type f -print0 | sort -z | xargs -0 sha1sum | sha1sum > html/hash.txt

.PHONY: update update-check down