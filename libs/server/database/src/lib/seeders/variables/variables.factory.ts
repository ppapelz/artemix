import { Variable } from "@artemix/server/models";
import { setSeederFactory } from "typeorm-extension";

export const VariablesFactory = setSeederFactory(Variable, () => {
    const variable = new Variable();
    variable.promptId = 1;
    variable.label = 'Label1';
    variable.type = 'Type1';
    variable.name = 'Var1';
    variable.description = 'Description1';
    variable.defaultValue = 'DefaultValue1';
    variable.contentLimit = 100;
    variable.createdAt = new Date();
    variable.updatedAt = new Date();
    return variable;
});
