from dataclasses import dataclass


@dataclass
class ReceiptItem:
    name: str
    price: float
    quantity: int
    total: float

    def __init__(self, quantity: str | int, name: str, price: str | float):
        self.name = name.strip()
        self.price = float(price.strip()) if isinstance(price, str) else price
        self.quantity = int(quantity.strip()) if isinstance(quantity, str) else quantity
        self.total = round(self.price * self.quantity, 2)


@dataclass
class Receipt:
    items: list[ReceiptItem]

    def __init__(self, items: list[ReceiptItem] = []):
        self.items = items

    def add_item(self, item: ReceiptItem):
        self.items.append(item)

    @staticmethod
    def from_csv(csv: str, delimiter: str = ","):
        receipt = Receipt()
        for line in csv.split("\n"):
            if line.strip() != "":
                try:
                    item = ReceiptItem(*line.split(delimiter))
                    receipt.add_item(item)
                except Exception as e:
                    print(e)
        return receipt
