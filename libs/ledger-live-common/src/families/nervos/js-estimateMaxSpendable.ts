import { BigNumber } from "bignumber.js";
import { Account, AccountLike } from "@ledgerhq/types-live";

import { getMainAccount } from "../../account";

import type { Transaction } from "./types";

import { createTransaction } from "./js-transaction";
import { getEstimatedFees } from "./js-getFeesForTransaction";

/**
 * Returns the maximum possible amount for transaction
 *
 * @param {Object} param - the account, parentAccount and transaction
 */
export const estimateMaxSpendable = async ({
  account,
  parentAccount,
  transaction,
}: {
  account: AccountLike;
  parentAccount?: Account;
  transaction?: Transaction;
}): Promise<BigNumber> => {
  const a = getMainAccount(account, parentAccount);
  const t = {
    ...createTransaction(),
    ...transaction,
    amount: a.spendableBalance,
  };

  const fees = await getEstimatedFees({ a, t });

  return a.spendableBalance.minus(fees);
};
