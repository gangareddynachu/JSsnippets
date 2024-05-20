Software Design Principles:
Insider tips for your system design interview from a former Amazon hiring manager – plus 6 mock interviews for practice!
Scalability:

Horizontal vs Vertical Scaling:

Single Server Design: personal website (HTTP server, database)
Disadvantages: Single point of failure

We have to switch the DNS entry to point to new server incase of any failure

To Solve, this
We can seperate out the database

Vertical Scaling:
Add biger server instead of more severs
servers only come large, but still have single point of failure, we still need to maintain servers

Horizontal Scaling:

muliptle severs, we have load balancer to distribute load between these servers
when one of the host is down, LB can reroute the traffic automatically to the other servers, so that you have no downtime

It works perfectly only if the severs are stateless, meaining the subsequent requests are not dependatn on the other servers response



DataCenters:
1) can be provisioned in own compoanys; data center
2) Cloud services like Amazon EC2/ Google compute engine/ Azure VM's)
3) Fully managed serverless services(Lambda/kinesis/Athena)


Scaling Database:

1) Failover servers: Cold standby
when database gows down => periodic backup of data => restore the data => send it to other (standby server)
Some amount of downtime => as standby device needs to backup and restore data./ some amount of unbacked up data is lost


2) Failover servers: Warm standby
constantly copy data from primary DB to secondary DB (Replication)
miminal downtime/less amount of data is lost.


3) Failover servers: Hot standby
Instead of relying on replication, wen servers instead write to all the databases simulatenously.










