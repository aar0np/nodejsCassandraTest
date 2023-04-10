# nodejsCassandraTest
Helping someone on StackOverflow with Nodejs driver

## To run
1. Install Nodejs & Cassandra

2. Create a new keyspace named "stackoverflow" and this table inside that keyspace:
```SQL
    CREATE TABLE stackoverflow.user_track (
        key TEXT PRIMARY KEY,
        text TEXT,
        date DATE);
```

3. Install Nodejs Cassandra driver
```bash
npm install cassandra-driver
```

4. Clone this repo
```bash
git clone git@github.com:aar0np/nodejsCassandraTest.git
```

5. `cd` into the `nodejsCassandraTest` directory, and run:
```bash
cd nodejsCassandraTest
node app.js
```

6. Verify table contents:
```SQL
SELECT * FROm stackoverflow.user_track;


 key      | date       | text
----------+------------+----------------
 hendrix1 | 2023-04-10 | Changed email1
 hendrix2 | 2023-04-10 | Changed email2

(2 rows)
```
