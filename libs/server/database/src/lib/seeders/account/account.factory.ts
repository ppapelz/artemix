import { Account } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const AccountFactory = setSeederFactory(Account, () => {
    const account = new Account();
    account.id = 1;
    account.email = "ozkanlang@gmail.com"
    account.displayName = "Ozkan Canli";
    account.createdAt = new Date();
    account.updatedAt = new Date();
    return account;
});
