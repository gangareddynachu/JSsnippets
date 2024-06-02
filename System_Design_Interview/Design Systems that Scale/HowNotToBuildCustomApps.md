1) Define the architecture and data model, before building any component

Table extension from any OOB application.. eg add a parent table  in case you have million records and they can be categorised, helps maintaining easily

2) seperation of no of UI nodes and number of worker nodes
Validate the database sizing in advance if archiving and auditing is a must need to be stored on the platform.

3) Security
Secure the data, restrict it to the application,
create app-specific admin role

4) Have Default Deny Access on these tables

5) Coding practises and Integration with Apps
Encapusulate app logic into centralised utility functions for easy reuse: Script Include Functions
Add Scripted Rest Apis endpoiints that wrap these utility functions (helps in calling these functions from outside SN scope)
Add Flow designeer Actions that wrap these utility functions

6) Keep Database footprint in check!
proactively setup configurations to keep yout footprint under control eg archive or delete data at regular intervals
Regular checks to audit your instance and check the factors increading the size of DB

7)Moniotring and Analytics
log only required= option to enable/disbale logging by keeping system propery

8)Focus on the load and UI testing
Load the instance with atleast 2x expected data and validate the key areas like form load considering single and concurrnt users
Also run multiple loads to validae the database inseito/updating avergae time.

Nonfunctional requirements, or NFRs, are a set of specifications that describe the system's operation capabilities and constraints. 

9) Save build time by using OOB capabilities
Ex: Now Assist/Form builder / App Engine Management Studio/Guided app creator 

10) Build a POC first
helps in identify major roadblocks ahead
helps in building confidence that proppsed soltion works under certain load

11) User Experience
Run design sessions upfrom with UI/UX to understand how to make app easy and engaging.

