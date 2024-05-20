Throw data into text files(csv/json) into big distributed storage system like Amazon S3, this approach is called data lake
common approach for big data and unstructured data

Another process ( Amazon Glue) creates a schema for that data.
And cloud based features let you query the data
  Amazon Athena (serverless)
  Amazon RedShift (distrubuted data warehouse)

You still need to think about how to partition the raw data for best performance.


Amazon S3 => AWS Glue => Amazon Athena (access data from AWS Glue schema by establishing  some sql layer commands)
                      => Amazon Redshift (access data from AWS Glue schema by establishing  some sql layer commands)


