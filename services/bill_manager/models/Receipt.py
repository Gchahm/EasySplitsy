

class ReceiptItem:
    name: str
    price: float
    quantity: int
    total: float

    def __init__(self, name: str, price: str, quantity: str):
        self.name = name.strip()
        self.price = float(price.strip())
        self.quantity = int(quantity.strip())
        self.total = self.quantity * self.price


class Receipt:
    items: list[ReceiptItem]

    def __init__(self):
        self.items = []

    def add_item(self, item: ReceiptItem):
        self.items.append(item)
