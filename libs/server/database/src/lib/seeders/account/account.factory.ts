import { AccountEntity } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const AccountFactory = setSeederFactory(AccountEntity, () => {
    const account = new AccountEntity();
    account.id = "1";
    account.email = "ozkanlang@gmail.com"
    account.displayName = "Ozkan Canli";
    account.createdAt = new Date();
    account.updatedAt = new Date();
    return account;
});
