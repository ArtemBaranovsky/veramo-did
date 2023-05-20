import { agent } from './veramo/setup.js';

async function main() {
  const identifier = await agent.didManagerGetByAlias({ alias: 'exercise-1' });
  const currentDate = new Date().toISOString();

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      credentialSubject: {
        id: 'did:web:example.com',
        you: 'Artem Baranovskyi',
        studentID: '1005455',
        passport: 'FB924956'
      },
    },
    proofFormat: 'jwt',
  });

  const createCredential = async (type: string, credentialSubject: any) => {
    return agent.createVerifiableCredential({
      fetchRemoteContexts: false,
      keyRef: "",
      proofFormat: 'jwt',
      removeOriginalFields: false,
      save: false,
      credential: {
        id: `http://example.com/credentials/${type}`,
        type: ['VerifiableCredential', type],
        issuer: { id: identifier.did },
        issuanceDate: currentDate,
        credentialSubject,
      },
    });
  };

  const masterDegreeCredential = await createCredential('MasterDegreeCredential', {
    degree: 'Master of Science',
    university: 'HFT Stuttgart',
    graduationYear: 2024,
  });

  const residencePermitCredential = await createCredential('ResidencePermitCredential', {
    permitNumber: '123456789',
    country: 'Federal Republic of Germany',
    validUntil: '2025-12-31',
  });

  const jobPermitCredential = await createCredential('JobPermitCredential', {
    permitNumber: '987654321',
    company: 'HFT Stuttgart',
    position: 'Software Engineer',
    validUntil: '2029-06-30',
  });

  const verifiablePresentation = await agent.createVerifiablePresentation({
    challenge: "",
    domain: "",
    fetchRemoteContexts: false,
    keyRef: "",
    proofFormat: 'jwt',
    removeOriginalFields: false,
    save: false,
    presentation: {
      id: 'http://example.com/presentations/123',
      type: ['VerifiablePresentation', 'JobApplicationPresentation'],
      issuer: {
        id: identifier.did,
      },
      holder: identifier.did,
      issuanceDate: currentDate,
      verifiableCredential: [
        masterDegreeCredential.proof.jwt,
        residencePermitCredential.proof.jwt,
        jobPermitCredential.proof.jwt,
      ],
    },
  });

  console.log(`New credential created`);
  console.log(JSON.stringify(verifiableCredential, null, 2));

  console.log(`New Verifiable Presentation created:`);
  console.log(JSON.stringify(verifiablePresentation, null, 2));
}

main().catch(console.log);
