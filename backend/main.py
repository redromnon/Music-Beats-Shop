from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS
from dbaccount import acc


api = Flask(__name__)
CORS(api)

user = None
id = None
cart = None

#MongoDB
cluster = MongoClient(f"mongodb+srv://{acc['username']}:{acc['password']}@atlascluster.si9naku.mongodb.net/?retryWrites=true&w=majority")

#Connect to db
mydb = cluster['MusicBeatsShop']

#Connect to collection
mycol = mydb['User']


#New Signup   POST
@api.route('/signup', methods=['GET', 'POST'])
def signup():

    #global user

    #Local
    #user = request.args.get('username', None)
    #password = request.args.get('password', None)
    data = request.json
    
    user = data.get('username')
    password = data.get('password')

    # TODO: hash the password before storing it in the database
    
    #Insert record
    x = mycol.insert_one({'username': user, 'password': password, 'cart': cart})
    print(x.inserted_id)
    
    return f'Welcome {user}. Your password is {password}, Cart is {cart}'



#UserProfileLoad/Authenticate   POST
@api.route('/login', methods=['GET', 'POST'])
def login():

    global user
    global cart
    global id

    #Local
    #username = request.form.get('username')
    #password = request.form.get('password')
    data = request.json

    username = data.get('username')
    password = data.get('password')

    print(username)
    print(password)

    x = mycol.find_one(
        {
        'username': username, 
        'password': password
        }
    )

    if x is not None:
        
        user = username
        cart = x['cart']
        id = x['_id']
        
        if cart is not None:
            return f"Welcome {user} {id}. Your cart is {cart['name']} & {cart['price']}"
        else:
            return f"Welcome {user} {id}. Your cart is {cart}"
    else:
        return f'Not found {user}. Create account.'


#New Signup   POST
@api.route('/logout', methods=['GET', 'POST'])
def logout():

    global user
    global cart
    global id

    user = None
    cart = None
    id = None

    print(user, cart)

    return f'Log out successful'

#Add & View Cart
#add-to-cart   POST
@api.route('/addtocart', methods=['GET','POST'])
def add_to_cart():
    '''
    item = request.form
    cart.append({'name': item.get('name'), 'price': float(item.get('price', 0))})
    '''
    global cart
    global id
    global user

    prod_name = request.args.get('name')
    prod_price = float(request.args.get('price'))

    if user:

        cart = dict({'name': prod_name, 'price': prod_price})

        mycol.update_one({'username': user}, {'$set':{'cart': cart}}) #Filter , to update
        
        x = mycol.find_one(
            {
            'username': user, 
            '_id': id
            }
        )

        print(x)
        
        
        return f"Item '{prod_name}' added to cart"
    else:

        return f"Please login before adding to cart"



#view cart   GET
@api.route('/cart', methods=['GET','POST'])
def view_cart():

    global cart
    global user

    '''
    cart_items = []
    total_price = 0

    for item in cart.values():
        item_price = float(item['price']) * item['quantity']
        cart_items.append({'name': item['name'], 'quantity': item['quantity'], 'price': item_price})
        total_price += item_price
    '''
    if user:
        return f"Cart Contents: {cart['name']}\nTotal Cart Value: {cart['price']}"
    else:
        return f"Please login before viewing cart"



#Checkout   GET
# test using http://localhost:5000/checkout?item=item1&price_item1=10.99&item=item2&price_item2=20.99


@api.route('/checkout', methods=['GET','POST'])
def checkout():
    # Retrieve items from cart
    #items = request.args.getlist('item')
    # Calculate total price
    #total_price = sum([float(request.args.get(f'price_{item}')) for item in items])
    # Redirect to payment page
    return f"Redirecting to payment gateway with total price of {cart['price']} for items: {cart['name']}"


if __name__ == "__main__":
    api.run()
