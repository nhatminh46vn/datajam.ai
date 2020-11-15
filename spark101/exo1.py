# Import the necessary libraries.
# Since we are using Python, import the SparkSession and related functions # from the PySpark module.
import sys
from pyspark.sql import SparkSession
from pyspark.sql.functions import count

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: mnm_count <file>", file=sys.stderr)
        sys.exit(-1)
    # Build a SparkSession using the SparkSession APIs.
    # If one does not exist, then create an instance. There # can only be one SparkSession per JVM.
    spark = (SparkSession
             .builder
             .appName("PythonMnMCount") .getOrCreate())
    # Get the M&M data set filename from the command-line arguments
    mnm_file = sys.argv[1]
    # Read the file into a Spark DataFrame using the CSV
    # format by inferring the schema and specifying that the
    # file contains a header, which provides column names for comma- # separated fields.
    mnm_df = (spark.read.format("csv")
              .option("header", "true")
              .option("inferSchema", "true")
              .load(mnm_file))

    # query with an aggregation (count) based on both (the state and the color)
    count_mnm_df = (mnm_df
                    .select("State", "Color", "Count")
                    .groupBy("State", "Color")
                    .agg(count("Count").alias("Total"))
                    .orderBy("Total", ascending=False))
    # Show the resulting aggregations for all the states and colors; # a total count of each color per state.
    # Note show() is an action, which will trigger the above
    # query to be executed.
    count_mnm_df.show(n=10, truncate=False)
    print("Total Rows = %d" % (count_mnm_df.count()))

    # query with a subset on the state california CA
    # and with an aggregation (count) based on both (the state and the color)
    ca_count_mnm_df = (mnm_df
                       .select("State", "Color", "Count")
                       .where(mnm_df.State == "CA")
                       .groupBy("State", "Color")
                       .agg(count("Count").alias("Total"))
                       .orderBy("Total", ascending=False))
    # Show the resulting aggregation for California.
    # As above, show() is an action that will trigger the execution of the # entire computation.
    ca_count_mnm_df.show(n=10, truncate=False)
    # Stop the SparkSession
    spark.stop()
