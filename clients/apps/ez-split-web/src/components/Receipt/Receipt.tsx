import * as React from "react";
import { IReceiptProps } from "./IReceiptProps";
import { Card, Grid, List, ListItemButton } from "@mui/material";
import { Currency } from "../currency";
import { ScreenContainer } from "../screenContainer";

const column0width = 1;
const column1width = 6;
const column2width = 2;
const column3width = 3;

export const Receipt: React.FC<IReceiptProps> = (props) => {
  const { headerContent, items, itemCount, onItemClicked } = props;

  const billTotal = items.reduce(
    (acc, item) => acc + item.price * (itemCount[item.id] || 0),
    0,
  );

  const footer = (
    <Grid container>
      <Grid item xs={10}></Grid>
      <Grid item xs={2}>
        <Currency value={billTotal} />
      </Grid>
    </Grid>
  );

  return (
    <Card
      sx={{
        height: "100%",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <ScreenContainer height={"100%"} header={headerContent} footer={footer}>
        <List>
          {items
            .filter((item) => itemCount[item.id])
            .map(({ id, name, price }) => (
              <ListItemButton key={id} onClick={() => onItemClicked(id)}>
                <Grid container>
                  <Grid item xs={column0width}>
                    {itemCount[id]}
                  </Grid>
                  <Grid item xs={column1width}>
                    {name}
                  </Grid>
                  <Grid item xs={column2width}>
                    <Currency value={price} />
                  </Grid>
                  <Grid item xs={column3width} textAlign="right">
                    <Currency value={price * itemCount[id]} />
                  </Grid>
                </Grid>
              </ListItemButton>
            ))}
        </List>
      </ScreenContainer>
    </Card>
  );
};
