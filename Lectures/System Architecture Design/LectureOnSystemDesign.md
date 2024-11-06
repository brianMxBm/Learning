# What is System Design

System design is the process of defiing structures of a system to meet specific requirements. It involves making decisions
based on quantifiable data and justifying these decisions with said data.

# Understanding Requirements

Typically in interviews or when working on a problem, there is a prompt denoting some problem that needs to be solved.
It's vital that we DON'T blurt out a solution. Take the time to think about important questions that we can ask surrounding the problem.

Understanding system requirements is vital to designing efficient Infrastructures, without doing so we're designing in the dark
and are more likely to make mistakes and misunderstand the direction we need to take. There are two types of requirements that
are provided in the process of System Design

1. Business Requirements: These requirements define what the software must achieve to align itself with the business objectives
   This is essentially the "why" and "what". The process of DDD (Domain Driven Development) is vital here as it allows cross functional
   teams with non-techinical stakeholders to get an understanding of the functional requirements. SEE: I don't think this is required in an interview.

2. Functional Requirements: These requirements define how the software will behave to under specific conditions, providing a detailed
   description of how to perform specific tasks. This is essentially the "how" SEE: This is heavily required.

3. Non-Functional Requirements: These requirements define statements about the system qualities that are important to users. Such as
   "The system should be able to" or "The system should be". Focus on:

   1. CAP Theorem: Should the system prioritize cosistency, availability or partition tolerance.

   2. Enviornment Constraints: Are there Constraints in regards to the hardware? Constraints on bandwith?

   3. Latency: How quickly should the system respond to requests, do we need low Latency for some or all requests?

   4. Durability: How important is it that data in the system isn't lost.

   5. Security: How secure does the system need to be?

   6. Fault Tolerance: How well does the system handle failures?

In this case understanding business requrements will allow us to converge on functional requirements. We want to ask qustions such as:

1. "Where does this type of program need to run, web, mobile, both?" - We ask this to get an idea of platforms we're responsible to design for.

2. "How many users does this product have" - We ask this because it allows us to determine important choices regarding scalability and fault tolerance.

3. "What are the most important features for the product" - We ask this because we need to know what exactly we're to design for. From this we can ask more questions
   surrounding the response for said.

4. "What does our data

This step is all about eliminating ambiguity and ensuring we have a deep understanding of what is to be designed.

# Establish Design Scope

Using the functional requirements as a guide, we know have the opportunity to justify what we need to create the infrastructure.

We'd like to use a mechanism that will allow us to estimate system capacity and performance requirements using

#### Back-of-the-envelope estimation

Back-of-the-envelope estmimation involve the process of deterining capacity estmiation regarding

1. Read to Write Ratio's. Determining the ratio of Reads to Writes provides a decent idea on the architecture and what should be
   prioritized.

2. Latency Estimations: Determine target response times for key operations, this will allow us to shift our architecture a bit. For instance certain features dictate lower than others.

3. Traffic Estimations:

   1. Determining DAU (Daily Active Users) accessing the platform.
   2. Determining RPS (Requests Per Second) assessing the amount of user actions. A common formula is
      `RPS = (DAU * AVG RPU) / 84k seconds in a day`
   3. Determining QPS (Queries Per Second) assessing the amount of database queries are triggered per user action. A common forumla is
      `QPS = (RPD / 84k seconds in a day)`

4. Storage Estimations: Determining the amount of data that needs to be stored.
   1. Media: Images or Videos and getting an estimate regarding the sizes of media per feature.
      `Storage = Total Things * Storage Per Thing`
   2. User Data: Metadata for the associated user.
      `Storage = Total Users * Storage Per User`

We'd like to use all of these estimations to brainstorm ways on how we can design an efficient infrastructure.

# Define Core Entities & Relationships

1. Break Down Requirements into Actions and Entities

   1. Identify Core Actions – List the specific actions or tasks that the system must support. This can include interactions, transactions, and any operations users or the system need to perform.

   2. Map Actions to Entities – Determine which entities (main objects) are required to perform each action. Identify the core components that will enable each action and group them into logical entities.

2. Define Entities as Distinct Objects with Specific Roles
   Think of entities as nouns within the system, representing objects or data points that have distinct roles. Each entity should serve a specific purpose and encapsulate the data relevant to that purpose.
   These entities will typically map to database tables or collections. They represent the primary data objects that will be managed within the system.

3. Outline Relationships Between Entities
   Define how these entities interact with each other to fulfill the system’s functionality:
   1. One-to-One: Each instance of an entity is uniquely associated with one instance of another entity.
   2. One-to-Many: An instance of one entity is associated with multiple instances of another.
   3. Many-to-Many: Instances of each entity can relate to multiple instances of the other.

In general we're finding ways to form our schema.

# API Design

This portion is very important to commit to before continuing with the high-level design. In this scenario, we're tasked with
selecting an API (Application Programming Interface) paradigm, which will dictate how we will structure our data flow, manage
interactions between components, and ensure seamless communication across different parts of the system. Choosing the right API
paradigm will impact not only the architecture but also the maintainability, scalability, and performance of our application as
it grows.

1. REST (Representational State Transfer). REST is ideal for systems that require CRUD operations (CREATE READ UPDATE DESTROY) and when
   resources are well-defined. REST uses HTTP methods on the Application Layer (topmost layer of the OSI model) such as:

   1. GET: Request a representation of the specified resources. Requests with GET should only retrieve data and not contain any request content. Retrieval no mutations on the server.

   2. POST: Submit an entity to a specified resource often causing a change of state or side effect on the server

   3. PATCH: Apply partial modification to a resource

   4. PUT: Replaces all current representation of the target resource with the request content

   5. DELETE: sDelete the specified resource on the server

   REST works best when designing systems that require stateless interactins meaning that each request form the client contains all necessary information. One of the downsides
   of REST are the notions of OVER-fetching / UNDER-fetching data leading to redundant endpoint creation.

2. GraphQL. GraphQL is a query language that allows the client to specify the data that they need. It captalizes on the issues of OVER-fetching and UNDER-fetching. GraphQL handles nested complex data in a single query without multiple requests.

There are other paradigms such as websockets and rPC which we'll discuss later.

#### Good REST Practices:

REST API design should maintain the notion of simplicity and efficiency.

1. Good Naming & Syntax Conventions: If working with REST all resources should be a noun and a plural. We'd want to always adhere to a consistent casing (Camel Case, Snake Case).

2. Using Proper HTTP Request Methods: Using the right HTTP method in accordance with the action is vital. Doing so reinforces proper resource management, API consistency and promotes better application design overall.

3. Using Propper HTTP Erorr Codes & Messages: Using the right HTTP error codes allows the client to handle errors gracefuly. This adheres to the notion of availability through the CAP theorem.

4. Versioning API's: Backwards Compatibility is key. A new version of the API shouldn't break clients relying on older versions. This can either be done through HTTP headers, query parameters or through the URI.

# High Level Design

After obtaining an understanding of the requirements, entities and API of the system, it's not time to design the high-level architecture. This process consists of dawing boxes and arrows to represent the different components of the system and how they interact. Components may be servers, databases, caches, etc.

The primary goal is to design an architecture that satisfies the API that's been designed and the requirements defined. In most cases you'll simply go one by one through the API endpoints and build up your design to satisfy each one. It's vital that during this process you prioritize simplicity and focus on scaling and optimizing in the next step.
