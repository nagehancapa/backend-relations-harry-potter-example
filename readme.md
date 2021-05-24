=> Steps to add relations

1. Create migration file to add extra column
2. Modify the file to have a reference
3. Modify the models
4. Query
5. Dont forget to modify the seeds

=> Steps to set up a Many to Many

1. Create a join table with the to id's you need: npx sequelize-cli model:generate --name studentBook --attributes studentId:integer,bookId:integer
2. Modify the migration files to add the references
3. Create a few seeds to test
4. Modify the models to describe the relations
5. Query the relations
