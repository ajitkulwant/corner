FROM 200.0.1.100:5000/mysql5.7 

ENV MYSQL_ROOT_PASSWORD=root 

ENV MYSQL_DATABASE=aheremi

COPY w.sql /docker-entrypoint-initdb.d/

EXPOSE 3306