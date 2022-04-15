FROM postgres:11.5-alpine
#https://stackoverflow.com/questions/26598738/how-to-create-user-database-in-script-for-docker-postgres
ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/