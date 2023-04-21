from flask import Flask, request
from pymongo import MongoClient
from dbaccount import acc

api = Flask(__name__)

user = None
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
    user = request.args.get('username', None)
    password = request.args.get('password', None)
    cart = request.args.get('cart', None)
    # TODO: hash the password before storing it in the database
    
    #Insert record
    x = mycol.insert_one({'username': user, 'password': password, 'cart': cart})
    print(x.inserted_id)
    
    return f'Welcome {user}. Your password is {password}, Cart is {cart}'



#UserProfileLoad/Authenticate   POST
@api.route('/login', methods=['GET', 'POST'])
def login():

    global user

    user = next((user for user in users if user['id'] == user_id), None)
    if user is None:
        return f'User Not Found! Please Signup'
    return f'Welcome {user}'



#Add & View Cart
#add-to-cart   POST
@api.route('/addtocart', methods=['GET','POST'])

def add_to_cart():
    item = request.form
    cart.append({'name': item.get('name'), 'price': float(item.get('price', 0))})
    return f"Item '{item.get('name')}' added to cart", 200



#view cart   GET
@api.route('/cart', methods=['GET','POST'])
def view_cart():
    cart_items = []
    total_price = 0

    for item in cart.values():
        item_price = float(item['price']) * item['quantity']
        cart_items.append({'name': item['name'], 'quantity': item['quantity'], 'price': item_price})
        total_price += item_price

    return Response(f'Cart Contents: {cart_items}\nTotal Cart Value: {total_price}', status=200)



#Checkout   GET
# test using http://localhost:5000/checkout?item=item1&price_item1=10.99&item=item2&price_item2=20.99


@api.route('/checkout', methods=['GET','POST'])
def checkout():
    # Retrieve items from cart
    items = request.args.getlist('item')
    # Calculate total price
    total_price = sum([float(request.args.get(f'price_{item}')) for item in items])
    # Redirect to payment page
    return f"Redirecting to payment gateway with total price of {total_price:.2f} for items: {', '.join(items)}", 302


if __name__ == "__main__":
    api.run()
