# Types Of Different Architecture Patterns

When designing systems it's important to recognize that there are different types of patterns that are better suited for some systems compared to others.

## Client-Server Architecture Pattern

This pattern consists of two major seperate entities. A server and multiple clients. The server has the resources (data, files, servuices) and a client requests the server for a resource. The server processes the request and responds accordingly. The main pitfall with this architecture is that due to there being a single point of failure (one server) if it fails all clients lose access.

## Monolithic Pattern

This pattern consists of a single unified entitity that has all aspects of the application, UI, business logic and data access layers. Everything is tightly coupled and deployable in a single container. The main pital with this architecture is that due to everything being coupled so tightly and must be deployed as a single unit. The primary method is scaling is vertical, horizontal is also an option however you'd need to replicate the entire monolithic application in a container and have a shared database for data consistency aswell as load balancers.

## Microservices Pattern

This pattern consists of loosely coupled service that is designed to peform specific functions, each microservice can be develop and deployed and scaled independently. Microservices are language agnostic, some portions may be writte in one langauge and others in another language. There are various things that makeup a microservices architecture. Each microservice handled a dedication function in a large scale application i.e (Shopping Cart, Billing, Profile, Notifications). They communicate with eachother over interfaces over surface areas which promote fault tolerance. They communicate over a combination of RPC (see Remote Procedural Calls), Event Streaming (see Event Streaming), and Message Brokers (see Kafka). Microservices typically means abstracting Monolithic databses and breaking down the database into potentially seperate schemas with it's own database cluster (see Database Clusters) or it's own seperate database. However, due to breaking up the databases it's referential equality is destroyed (see Referential Equality) and thus has to be maintained in the Application Layer.

# Event Driven Architecture Pattern

This pattern consists of services that communicate asynchronously by reacting to events. The main focus is decoupling producers and consumers of events allowing services to act autonomously in response to the events they recieve. It consists of Events, Event Producers, and Event Consumers. There's a message broker or event bus that's responsible for sending events. (see SNS & Kafka)

# Broker Architecture Pattern
