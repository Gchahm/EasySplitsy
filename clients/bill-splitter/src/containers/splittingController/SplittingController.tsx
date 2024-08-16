import * as React from "react";
import { Receipt } from "../../components/Receipt/Receipt.tsx";
import { ScreenContainer } from "../../components/screenContainer";
import { MobileContainer } from "../../components/StyledMUI/MobileContainer.ts";
import { ParticipantReceiptHeader } from "../../components/participantReceiptHeader";
import { useManageRecipientHeaderProps } from "./useManageRecipientHeaderProps.tsx";
import { useBill } from "../../businessLogic/billProvider";

export const SplittingController: React.FC = () => {
  const { selectedParticipant, items, bill, ...reducer } = useBill();

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
