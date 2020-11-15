import sys
import os
import shutil

from pyspark.sql.types import *
from pyspark.sql import SparkSession
from pyspark.sql.types import *


def process_list_to_df(spark, csv_file, my_schema):
    """"
    :param spark: sparksession
    :param csv_file: data as csv file
    :param schema: schema
    :return:
    """
    data_df = spark.read.csv(csv_file, header=True, schema=my_schema)
    return data_df


def save_df_to_format(file_df, exp_format="parquet", save_path="./mnm_dataset.pq"):
    """"
    :param file_df: input dataframe
    :param exp_format: output format
    :param save_path: destination
    :return: None
    """
    file_df.write.format(exp_format).save(save_path)
    print(f"saved to the format : {exp_format} and @ : {save_path}")


if __name__ == '__main__':
    # schema definition
    my_file = sys.argv[1]
    my_schema = StructType([
        StructField("State", IntegerType(), False),
        StructField("Color", StringType(), False),
        StructField("Count", IntegerType(), False),
        ])

    spark = (SparkSession
             .builder
             .appName("exo5").getOrCreate())

    authors_df = process_list_to_df(spark, my_file, my_schema)
    out = "output.pq"
    if os.path.exists(out):
        shutil.rmtree(out)
    # save csv file to parquet format (it includes data format)
    save_df_to_format(authors_df, exp_format="parquet", save_path=out)

