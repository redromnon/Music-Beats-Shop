from pymongo import MongoClient
from dbaccount import acc

cluster = MongoClient(f"mongodb+srv://{acc['username']}:{acc['password']}@atlascluster.si9naku.mongodb.net/?retryWrites=true&w=majority")

#Get all databases
#print(cluster.list_database_names())


#Connect to db
mydb = cluster['MusicBeatsShop']


#Get collections
#print(mydb.list_collection_names())


#Connect to collection
mycol = mydb['User']


#Insert record
#x = mycol.insert_one({'_id': 5, 'username': 'R', 'password': '456'})
#print(x.inserted_id)


#Find all data
for x in mycol.find():
    print(x)


#Find particular record
'''
x = mycol.find_one({'username': 'A', 'password': '1234'})
if x is not None:
    print(x)
else:
    print("Not found")
'''


#Delete record
#mycol.delete_one({'username': 'B'})


#Update record
#mycol.update_one({'username': 'B'}, {'$set':{'password': '456'}}) #Filter , to update