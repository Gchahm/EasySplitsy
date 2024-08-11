import * as React from "react";
import { useContext } from "react";
import { IReceiptProps } from "./IReceiptProps";
import { AvatarGroup, Grid, List, ListItemButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Currency } from "../currency";
import { ScreenContainer } from "../screenContainer";
import { ReceiptFooter } from "../receiptFooter";
import { IItem } from "../../interfaces/IItem";
import { BillContext, IBillContext } from "../../businessLogic/billState";
import { ParticipantAvatar } from "../StyledMUI/ParticipantAvatar";

const column0width = 4;
const column1width = 2;
const column2width = 2;
const column3width = 4;
const avatarSx = { width: 24, height: 24 };

export const Receipt: React.FC<IReceiptProps> = () => {
  const { participants, selectedParticipant, items, bill, ...reducer } =
    useContext<IBillContext>(BillContext);
  const [selectedItem, setSelectedItem] = React.useState<IItem | undefined>();

  // const selectedParticipantItems = selectedParticipant?.items || {};
  const handleMoveItemToParticipant = () =>
    selectedItem && reducer.moveItemToParticipant(selectedItem.id);
  const handleMoveItemToBill = () =>
    selectedItem && reducer.moveItemToBill(selectedItem.id);

  const footer = (
    <ReceiptFooter
      selectedItem={selectedItem}
      selectedParticipant={selectedParticipant}
      onMoveToParticipantClick={handleMoveItemToParticipant}
      onMoveToBillClick={handleMoveItemToBill}
      billItems={bill}
    />
  );

  const header = (
    <Grid container textAlign="left" padding="2">
      <Grid item xs={column2width}></Grid>
      <Grid item xs={column0width}>
        Item
      </Grid>
      <Grid item xs={column1width}>
        Price
      </Grid>
      <Grid item xs={column3width}>
        <PersonIcon />
      </Grid>
    </Grid>
  );

  const isItemSelected = (id: string) => selectedItem?.id === id;

  return (
    <ScreenContainer header={header} footer={footer}>
      <List>
        {items.map(({ id, name, price }) => (
          <ListItemButton
            selected={isItemSelected(id)}
            onClick={() => setSelectedItem({ id, name, price })}
          >
            <Grid container>
              <Grid item xs={column2width}>
                {bill[id] ? bill[id] : 0}
              </Grid>
              <Grid item xs={column0width}>
                {name}
              </Grid>
              <Grid item xs={column1width}>
                <Currency value={price} />
              </Grid>
              <Grid item xs={column3width}>
                <AvatarGroup
                  max={4}
                  slotProps={{ additionalAvatar: { sx: avatarSx } }}
                >
                  {participants.map(
                    (participant) =>
                      participant.items[id] && (
                        <ParticipantAvatar {...participant} />
                      ),
                  )}
                </AvatarGroup>
              </Grid>
            </Grid>
          </ListItemButton>
        ))}
      </List>
    </ScreenContainer>
  );
};