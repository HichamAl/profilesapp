import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmations/resource';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});