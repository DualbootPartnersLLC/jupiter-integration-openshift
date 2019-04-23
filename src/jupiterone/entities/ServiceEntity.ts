import { EntityFromIntegration } from "@jupiterone/jupiter-managed-integration-sdk";

export const SERVICE_ENTITY_TYPE = "openshift_service";
export const SERVICE_ENTITY_CLASS = "Task";

export interface ServiceEntity extends EntityFromIntegration {
  uid: string;
  name: string;
  resourceVersion: string;
  namespace?: string;
  creationTimestamp: string;
  clusterIP: string;
  type: string;
}