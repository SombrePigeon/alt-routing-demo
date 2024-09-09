FROM httpd
EXPOSE 80
COPY ./src/html /usr/local/apache2/htdocs/
