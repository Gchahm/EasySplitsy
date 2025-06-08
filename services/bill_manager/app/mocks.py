from app.models import Receipt, ReceiptItem

def get_mock_receipt():
    return Receipt(
            items=[
                ReceiptItem(
                    name="CROQUETAS DE JAMÓN",
                    price=18,
                    quantity=2,
                    ),
                ReceiptItem(
                     name="COCA COLA",
                     price=5.6,
                     quantity=2,
                     ),
                ReceiptItem(
                     name="ZUMO NARANJA NATURAL",
                     price=5,
                     quantity=2,
                     ),
                ReceiptItem(
                     name="ZUMO PIÑA",
                     price=5,
                     quantity=2,
                     ),
                ReceiptItem(
                     name="CORDERA ESPALDA",
                     price=21,
                     quantity=3,
                     ),
                ReceiptItem(
                     name="MERLUZA PLANCHA",
                     price=13.5,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="MERLUZA CON PATATAS FRIT",
                     price=15.5,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="SALMÓN PLANCH",
                     price=16,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="ROSADA PLANCHA",
                     price=13.5,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="SALSA",
                     price=2.5,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="SANGRÍA 1 LITRO",
                     price=15,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="BOT. MATEUS ROSÉ",
                     price=16,
                     quantity=1,            
                     ),
                ReceiptItem(
                     name="VASO",
                     price=2.8,
                     quantity=4,
                     ),
                ReceiptItem(
                     name="COCA COLA",
                     price=8.4,
                     quantity=3,
                     ),
                ReceiptItem(
                     name="SPRITE",
                     price=2.8,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="SANGRÍA 1 LITRO",
                     price=15,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="COCA COLA",
                     price=2.8,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="ROSADA PLANCHA",
                     price=13.5,
                     quantity=1,
                     ),
                ReceiptItem(
                     name="AGUA 1.5 LITRO",
                     price=2.7,
                     quantity=1,
                     )
                ])
