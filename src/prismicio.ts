import * as prismic from '@prismicio/client';

const repositoryName = import.meta.env.PRISMIC_REPOSITORY || 'ia-medecin';

export const createClient = () =>
  prismic.createClient(repositoryName);
