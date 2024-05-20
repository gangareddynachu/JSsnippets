Horizontal Scaling of Databases: Sharding:

MongoDB:

Config Server | Config Server| Config Server => App Server | Mongos => Primary => Secondary | Secondary | Secondary | Secondary  (Replica set 1) ex: min->1000 users
                                     => Primary => Secondary | Secondary | Secondary | Secondary    (Replica set 2) ex: 1000-> 5000 users
                                      => Primary => Secondary | Secondary | Secondary | Secondary     (Replica set 3) ex: 5000 -> max

In case of failure, one among the secondary nodes gets elected as primary DB and process continues...


Among Three Config Server, mongos server is initailly configured to talk to one config server(primary)
But incase of any failure, another one is elected as primary server.

We have high availability in these scenarios..

Ex: Cassandra (mongodb example)

Sharded databases are sometimes calleed as NoSQL
1) becomes tough to join across shards
2) Resharding
3) Hotspots
4) Most NoSQL databases actually do support most SQL operations and use SQL as thier API
5) Still works best with simple key/value lookups
6) A formal schema may not be needed
7) Ex: MongoDB/DynamoDB/Cassandra/ HBase




Relational Data: Normalisaed data: less storage space/more lookups/ updates in one place.
Denormalizing data: More storage place, one lookup , updates are hard (NoSQL data, data duplication takes place(more storage place)












      
