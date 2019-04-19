import { IntegrationInstance } from "@jupiterone/jupiter-managed-integration-sdk";
import { createAccountEntity } from "./AccountEntityConverter";

test("convert account", async () => {
  const instance = {
    id: "id",
    name: "name",
    config: {
      cluster: "example.com",
    },
  } as IntegrationInstance;

  const accountEntity = createAccountEntity(instance);

  expect(accountEntity).toEqual({
    _class: "Account",
    _key: "openshift_account_id",
    _type: "openshift_account",
    cluster: "example.com",
    displayName: "name",
  });
});
