import random

def generate_random_color():
    # Generate random color name
    adjectives = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Pink", "Black", "White", "Gray", "Brown"]
    nouns = ["Apple", "Banana", "Cherry", "Lemon", "Lime", "Orange", "Strawberry", "Grape", "Kiwi", "Peach", "Plum", "Watermelon"]
    color_name = random.choice(adjectives) + " " + random.choice(nouns)

    # Generate random hex value
    hex_value = '#' + ''.join(random.choice('0123456789ABCDEF') for _ in range(6))

    return color_name, hex_value

# Generate and print a random color
random_color_name, random_hex_value = generate_random_color()

with open("site/color.json", "w") as file:
    file.write("{\"name\":\""+random_color_name+"\", \"hex\":\""+random_hex_value+"\"}")
