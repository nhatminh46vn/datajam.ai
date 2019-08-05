from pyspark.sql import SparkSession


# COMMON OPERATIONS

def print_k_rows(df):
    print("read the .data file (=csv) and take the 10 first rows\n")
    print(df.take(10))

def print_k_rows_1_col(df):
    print("the 10 first columns of the column _c0")
    # take the first  10 values of the first column
    print(df.select("_c0").take(10))

def  print_k_rows_sql(spark, df,name="iris_table",k=10):
    # Register the table as a temporary view
    df.createOrReplaceTempView(name)
    sqlDF = spark.sql("SELECT * from iris_table LIMIT " + str(k))
    sqlDF.show()

# CHANGING COLUMN NAMES

def change_columns_namesI(df, colnames=("sepal_width","sepal_length","petal_width","petal_length","species")):
    df = df.toDF(*colnames)
    return df

def change_columns_namesII(df):
    df = df.select(\
                   df._c0.alias("sepal_width"),\
                   df._c1.alias("sepal_length"),\
                   df._c2.alias("petal_width"), \
                   df._c3.alias("petal_length"), \
                   df._c4.alias("species"))
    return df

def change_columns_namesIII(df):
    df = df.withColumnRenamed("_c0","sepal_width").\
        withColumnRenamed("_c1", "sepal_length"). \
        withColumnRenamed("_c2", "petal_width"). \
        withColumnRenamed("_c3", "petal_length"). \
        withColumnRenamed("_c4","species")
    return df

def change_columns_namesIV(df, old_names=["_c0","_c1","_c2","_c3","_c4"], new_names=["sepal_width","sepal_length","petal_width","petal_length","species"]):
    for i in range(len(old_names)):
        df = df.withColumnRenamed(str(old_names[i]), str(new_names[i]))
    return(df)

# transform dataframe to pandas, json, or dF
def transform_my_df(df, output="pandas"):
    res=None
    if output.lower() not in ["df","json"]:
        raise ValueError
    
    elif output.lower()=="json":
        res = df.toJSON()
    else :
        res = df.toDF()
    return res

def main():
    # operations on DataFrames a re referred to as "Untyped Dataset Operations" (aka DataFrame Operations)
    
    # set the parameters of the sparkSession
    spark = SparkSession.builder.appName('abc').getOrCreate()
    spark.conf.set("spark.sql.shuffle.partitions", 6)
    spark.conf.set("spark.executor.memory", "2g")
    
    # read csv file with no header
    df = spark.read.format("csv").\
        option("header", "false").\
        option("mode", "DROPMALFORMED").\
        load("/home/newStorage/datasets/iris.data")

    #change the columns names
    new_df = change_columns_namesIV(df)

    #display the table in an human-readable format
    print_k_rows_sql(spark, new_df, name="iris_table",k=10)
    

    my_json_df = transform_my_df(new_df, output="json")
    print(my_json_df.first())




if __name__ =='__main__':
    main()
