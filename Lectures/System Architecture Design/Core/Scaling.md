# What Is Scaling?

Scaling in regards to system infrastructure is the process of increasing a systems performance and resources to handle growing traffic and workloads. It's crucal for production applications that are used by potentially millions a day.

# How Do Applications scale?

If an application starts getting many visitors, the single server responsible for transferring data between themselves and the client will inevitably grow slow.

There are various ways that an an application can scale.

#### Scaling The Server

1. Vertically Scaling (Scaling Up)
   Scaling Vertically involves increasing the "power" of the server. This is either done by increasing RAM, CPU (Cores), Network Bandwith.

   1. Benefits: This is typically the prefered solution at first as it's very easy to upgrade server hardware than setting up new servers. All of the server code is containerized within a single server which makes it incredibly easy to update code.

   2. Drawbacks: There's a limit to how much a server can be upgraded due to limitions (Moores Law). It's also incredibily expensive to upgrade a server.

2. Horziontally Scaling (Scaling Out)
   Scaling Vertically involves increasing the amount of servers and distributing the workload across said servers. This also involves a mechanism called Load Balancers (see Load Balancers)

   1. Benefits: Distributed Systems focus heavily on availability by ensuring redundancy (see Replication & Redundancy). Essentially there's no single point of failure, if one server fails there's the potential for another one to be created or another instance to be used. It's also cheaper than Vertically Scaling.

   2. Drawbacks: Managing a distributed system is complex, especially for stateful mechanisms in the system like Databases. (see Sharding). Maintaining data consistency across multiple nodes in the system will also require data replication mechanisms, (see data replication).

# When to choose?

It's vital to understand what to choose to Scale Up or Scale Out, there are various factors that play a role.

1. Workload. Depending on the workload in the system i.e. if the workload is unpredictible or bursty. Auto-scaling with Horizontal Scaling will work better.
2. Resource limitations. If there are limitations on memory or processing power, vertical scaling (scaling up) can be more effective, as it increases the capacity of an individual machine. However, if these resources are becoming a bottleneck, horizontal scaling (scaling out) by adding more instances may provide better distribution of load and redundancy.

3. Cost. Scaling up is typically more cost-effective for simpler applications but can become expensive at higher tiers. Scaling out can spread costs more predictably, though it requires more complex management of additional servers or instances.

4. High availability and fault tolerance. Horizontal scaling tends to offer better fault tolerance, as the load can be distributed across multiple nodes. This can be critical for systems that require high availability, as individual node failures are less likely to disrupt the entire system.

5. Application architecture. Some applications are better suited for horizontal scaling, such as microservices or stateless services. Other applications, like monolithic architectures, may benefit more from vertical scaling.

# Load Balancers

Load balancers is a network device or software application that distrbutes and baalnces the incoming traffic among multiple servers to reinforce the notion of high availability, efficient utilization of servers, and high performance. It typically sits in front of a server or API gateway to route client requests across all servers.

#### How do they work?

When a user tries to acess a website or application, the request first goes to the load balancer instead of directly to a server. Load balancers continuously monitors the status of other servers by doing health checks (small requests to ensure the server is still active). They distrubute traffic based on a myriad of factors such as server load, response time, or proximity to the most appropriate server. Reducing the possibility that one servers gets overloaded

https://chatgpt.com/share/672b4661-8f64-8005-bf79-532e4728c917 Refer to this later

#### Types Of Load Balancers

1. Software Load Balancers

   1. Cloud Load Balancers. Cloud Providers such as AWS, Google Coud and Azure automatically distribute traffic. For instnace AWS allows for Load Balancers on EC2 Servers (see EC2) utilizng AWS ELB (Elastic Load Balancing).

   2. Layer 4 (Transport Layer) Load Balancer (see OSI Model)
      This type of Load Balancer uses IP addresses and port numbers to distrbute traffic. Since they operate at the Transport Layer they don't need to examine the data in the payload making them handle high traffic volumes with little overhead. They are cheaper compared to other load balancers as well. The main drawback with L4 load balancers is that they can't route traffic based on Appliaction data (i.e if you wanted to route based off of a user's location, device type or other metadata)

   3. Layer 7 (Application Layer)
