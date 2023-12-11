docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_44/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_44/app ../..
