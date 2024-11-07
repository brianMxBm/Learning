# Example Process For Client-Server Systems.

1. FN Requirements

2. NF Requirements

3. Estimation (RPS, QPS, Blob Storage, DB Storage)

4. Entities and Actions (Don't Define Schemas)

5. API Design (Typically Rest), create endpoints that justify the FN.

6. Scalability With Servers (Always start small, don't just directly into Microservices & Horizontal Scaling)

   - Servers can be scaled horizontally so easily due to them being stateless.

   1. Talk first about basic monolithic client-server architecture with vertical scaling

   2. Talk about how this wouldn't work according to the Estimations regarding RPS and QPS.

   3. Talk about horizontal scaling for the containerized servers (client-server pattern still) deployed (Typically hosted via EC2 or some other hosting service).

   4. Talk about the need for Load Balancers and the type there are (L4 operate in the TCP layer uses IP addresses and port numbers to route to servers and L7 operate in the Application Layer and can inspect HTTP payloads to perform content based routing).. This is pretty vital for microservices, otherwise for client-server just use L4 and direct routing. What algorithims are used for distributing traffic (Round Robin, Weighted Round Robin, Least Connections, etc)

7. Scalability With Databases

   1. Talk first about a single shared database being accessed by multiple servers concurrently. Talk about how it's possible to vertically scale the database but this solution has it's limitations and will still have bottlenecks. Bottlenecks that could occur include:

   - Deadlocks due to write concurrency, meaning multiple write transactions occuring on the same row cause deadlock leading to high latency and rollbacks.

   - Write Throughput: Write-heavy requests can slow down as servers will compete for write access.

   - Read Throughput, as read requests pile up latency for responses keeps getting higher.

   2. Talk about ways to scale databases and the different methods to do so.

   - Remember to talk about the difference between noSQL databases and SQL databases.

   - Normaliation: Normalization involves the process of organizing data into tables and establishing relationships according to rules. Reducing data redundancy and inconsistencies.

   - SQL Databases are ACID Compliant

     1. (A)TOMICITY: It can manage a set of operations as a single unit so either all operations succeed or everything is aborted and rolled back in the database.

     2. (C)onsistency: It ensures that the transactions adhere to constraints and ensuring that the database moves from one valid state to another valid state after a transaciton. IF it can't the state is rolledback.

     3. (I)solation: It ensures that a database can allow multiple transactions to access the simultaneously without interfering with each other.

     4. (D)urability: It ensures that once a transaction is complete, the changes in that transactin are written to the database. Ensuring that data is persisted on the disk.

   - Sharding & Partitioning & Replication.

     - Sharding is essentially distrbuting data across multiple databases to improve scalability and availability. Each shard holds a subset of the main database's data and they work collectivley as a single database. There are many different ways to distribute data into seperate databases:

       1. Key Based Sharding: Sharded databases use a hash function to locate data.

       2. Range Based Sharding: Sharded databases divide data into chunks depending on the ranges of a certain value. Take for instance the price of the product, and placing each respective price column with the product key in different databases.

     - Partitioning is the process of dividing a database table into smaller more managable tables. This is done to improve performance within a single database system.

     - Replication is the process of creating multiple copies of an entire database (or specific parts) to distribute the workload. There are multiple ways to implement Reaplication.

       1. Leader - Follower Replication

       - In this implementation we have a leader database that's responsible for handling all writes (insert, updates, deletes), and follower database replicas are responsible for updating based off of the primary data. This can either be done Synchronously or Asynchronously.

       - If done Synchronously that means that the client waits for the transactions to fully complete on both the follower and leader databases to give the client a response. This ensures consistency with follower databases. However if a follower database goes down the response will either take a long time increasing latency or fail causing a rollback on the transaction changes.

       - If done Asynchronously that means that the client doesn't wait for the transaction to complete on the follower databases. It is faster but leads to inconsistent data between the leader and follower databases, especially if the leader database goes down.

     2. Read Only Replicas

     - In this implementation, it's possible to create duplicates of a database via a main Primary database that updates these replicas with the latest data. The Primary database handles all write operations, while the Read-Only replicas manage read requests. This approach improves query performance by reducing the load on the Primary database, enabling it to focus on write tasks, while read operations are distributed across multiple replicas. This setup is particularly beneficial for applications with high read demand, as it enhances scalability and availability by ensuring that even if a replica fails, other replicas can continue to serve read requests.d
