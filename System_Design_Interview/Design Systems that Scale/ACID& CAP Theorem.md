Atomicity: entire transaction should either fails/succeeds...no in between..no half written/half baked data
Consistency: All database rules are enforced , or else entire transaction is rolled back...ex: if there is a rule that certain column holds only positvr values and we supply negative, then entireransaction gets rolled back
    In other places, it can be refered as reading back the data correctly that we have written

Isolation: no transaction is affected by other transaction that is still in progress

Durability: Once a transaction is commited, it stays even if it system gets crashed...




CAP: Conssistency Availability Partition tolerance
CA = MySQL = can't easily scale horizontally, hence P is slightly difficlt to achieve
CP = Apache hbase , MongoDB, Amazon Dynamo DB => where if one  primary server fails other will be replaced as primary... but there will be slight downtime to recover.. so we may lose avalabilty
AP = Cassandra => ring of nodes, no single master, data written has to rewritten across all the nodes.. so we may lose consistency.
