import * as React from "react";
import { useContext } from "react";
import { Receipt } from "../../components/Receipt/Receipt.tsx";
import { BillContext, IBillContext } from "../../businessLogic/billState";
import { ScreenContainer } from "../../components/screenContainer";
import { MobileContainer } from "../../components/StyledMUI/MobileContainer.ts";
import { ParticipantReceiptHeader } from "../../components/participantReceiptHeader";
import { useManageRecipientHeaderProps } from "./useManageRecipientHeaderProps.tsx";

export const SplittingController: React.FC = () => {
  const { selectedParticipant, items, bill, ...reducer } =
    useContext<IBillContext>(BillContext);

  const participantRecipientHeaderProps = useManageRecipientHeaderProps();

  return (
    <ScreenContainer>
      <MobileContainer height={"100%"}>
        <MobileContainer height={"50%"} padding={12}>
          <Receipt
            headerContent={
              <ParticipantReceiptHeader {...participantRecipientHeaderProps} />
            }
            items={items}
            itemCount={selectedParticipant?.items || {}}
            onItemClicked={reducer.moveItemToBill}
          />
        </MobileContainer>
        <MobileContainer height={"50%"} padding={12}>
          <Receipt
            headerContent={"Remaining in receipt"}
            items={items}
            itemCount={bill}
            onItemClicked={reducer.moveItemToParticipant}
          />
        </MobileContainer>
      </MobileContainer>
    </ScreenContainer>
  );
};
