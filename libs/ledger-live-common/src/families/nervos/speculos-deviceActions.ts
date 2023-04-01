import type { DeviceAction } from "../../bot/types";
import type { Transaction } from "./types";
import { deviceActionFlow } from "../../bot/specs";

export const acceptTransaction: DeviceAction<Transaction, any> =
  deviceActionFlow({
    steps: [
      {
        title: "Confirm",
        button: "Rr",
      },
      {
        title: "Input",
        button: "Rr",
      },
      {
        title: "Source",
        button: "Rr",
      },
      {
        title: "Amount",
        button: "Rr",
      },
      {
        title: "Fee",
        button: "Rr",
      },
      {
        title: "Destination",
        button: "Rr",
      },
      {
        title: "Reject",
        button: "Rr",
      },
      {
        title: "Accept",
        button: "LRlr",
      },
    ],
  });
