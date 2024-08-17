import * as React from "react";
import { Receipt } from "../../components/Receipt/Receipt.tsx";
import { ScreenContainer } from "../../components/screenContainer";
import { MobileContainer } from "../../components/StyledMUI";
import { ParticipantReceiptHeader } from "../../components/participantReceiptHeader";
import { useManageRecipientHeaderProps } from "./useManageRecipientHeaderProps.tsx";
import { useBill } from "../../businessLogic/billProvider";
import { useTranslation } from "react-i18next";
import resources from "../../@types/resources.ts";

export const SplittingController: React.FC = () => {
  const { selectedParticipant, items, bill, ...reducer } = useBill();
  const { t } = useTranslation();

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
            headerContent={t(resources.translation.receiptHeader)}
            items={items}
            itemCount={bill}
            onItemClicked={reducer.moveItemToParticipant}
          />
        </MobileContainer>
      </MobileContainer>
    </ScreenContainer>
  );
};
