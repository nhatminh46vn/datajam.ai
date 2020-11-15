from pyspark.sql.types import *
from pyspark.sql import SparkSession


def process_list_to_df(spark, data, schema):
    """"

    :param spark: sparksession
    :param data: data as a multi-d array
    :param schema: schema
    :return:
    """
    data_df = spark.createDataFrame(data, schema)
    return data_df


if __name__=='__main__':
    # DDL definition
    schema = """
             `ID` INT ,
             `author_firstname` STRING ,
             `author_lastname` STRING ,
             `html` STRING ,
             `date`  STRING ,
             `rating` INT ,
             `campaigns` ARRAY <STRING> 
             """
    data = [
        [1, "Jules", "Damji", "https://tinyurl.10x", "1/4/2020", 4531, ["twitter", "LinkedIn"]],
        [2, "Annie", "Sting", "https://tinyurl.11x", "2/4/2020", 3535, ["facebook", "LinkedIn"]],
        [3, "Mireille", "Black", "https://tinyurl.12x", "3/4/2018", 1539, ["facebook", "reddit"]],
        [4, "Marc", "Jay", "https://tinyurl.13x", "7/4/2016", 2234, ["google", "LinkedIn", "twitter"]],
        [5, "Melissa", "Thun", "https://tinyurl.14x", "9/4/2017", 8535, ["instagram", "LinkedIn", "viadeo"]],
    ]

    spark = (SparkSession
             .builder
             .appName("exo3").getOrCreate())

    authors_df = process_list_to_df(spark, data, schema)

    authors_df.show(n=2, truncate=False)
    print(authors_df.printSchema())
