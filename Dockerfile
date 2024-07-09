FROM httpd as base
EXPOSE 80

#DEV-----------
FROM base as dev
ENV VIRTUAL_HOST=alt-routing-demo.sombrepigeon.fr.localhost
ENV LETSENCRYPT_HOST=alt-routing-demo.sombrepigeon.fr.localhost

#PROD----------
FROM base as prod
ENV VIRTUAL_HOST=alt-routing-demo.sombrepigeon.fr
ENV LETSENCRYPT_HOST=alt-routing-demo.sombrepigeon.fr
