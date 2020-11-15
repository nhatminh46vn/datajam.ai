# Import the necessary libraries.
# Since we are using Python, import the SparkSession and related functions # from the PySpark module.
import sys
from pyspark.sql import SparkSession
from pyspark.sql.functions import count


def function_count_by_(mnm_file, spark):
    """
    fucntion which reads a csv file and realize simple operations
    return aggregation result from grouping by state AND color
    :param mnm_file:
    :return:
    """


    mnm_file_df = spark.read.format("csv")\
                             .option("header", "true")\
                             .option("inferSchema", "true")\
                             .load(mnm_file)

    count_mnm_file_df = (mnm_file_df
                         .select("State", "Color","Count")
                         .groupBy("State", "Color")
                         .agg(count("Count").alias("Total"))
                         .orderBy("Total", ascending=True))

    return count_mnm_file_df

if __name__ == "__main__":
    if len(sys.argv) >= 2:
        mnm_file = sys.argv[1]
        spark = (SparkSession
                 .builder
                 .appName("PythonMnMCount").getOrCreate())

        res = first_function(mnm_file, spark)
        res.show(n=10, truncate=False)
        spark.stop()