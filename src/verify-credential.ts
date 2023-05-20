import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      "credentialSubject": {
        "you": "Artem Baranovskyi",
        "studentID": "1005455",
        "passport": "FB924956",
        "id": "did:web:example.com"
      },
      "issuer": {
        "id": "did:ethr:goerli:0x03eca6c8243f47e96fb7011def6f3db8825a00ceb11d860fba9f0e48f3ce32670f"
      },
      "type": [
        "VerifiableCredential"
      ],
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "issuanceDate": "2023-05-20T07:15:11.000Z",
      "proof": {
        "type": "JwtProof2020",
        "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IkFydGVtIEJhcmFub3Zza3lpIiwic3R1ZGVudElEIjoiMTAwNTQ1NSIsInBhc3Nwb3J0IjoiRkI5MjQ5NTYifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20iLCJuYmYiOjE2ODQ1NjY5MTEsImlzcyI6ImRpZDpldGhyOmdvZXJsaToweDAzZWNhNmM4MjQzZjQ3ZTk2ZmI3MDExZGVmNmYzZGI4ODI1YTAwY2ViMTFkODYwZmJhOWYwZTQ4ZjNjZTMyNjcwZiJ9.NTskpxmwqXNGQnbZkzXytWQFD7HmhmuryMfYrNbon2jSmAT8hMGM7Rehay40THr8kXzdMhBQgp7B3o9TQeGkYA"
      }
    }

    // credential: {
    //   "credentialSubject": {
    //     "you": "Rock",
    //     "id": "did:web:example.com"
    //   },
    //   "issuer": {
    //     "id": "did:ethr:goerli:0x0350eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c16"
    //   },
    //   "type": [
    //     "VerifiableCredential"
    //   ],
    //   "@context": [
    //     "https://www.w3.org/2018/credentials/v1"
    //   ],
    //   "issuanceDate": "2022-10-28T11:54:22.000Z",
    //   "proof": {
    //     "type": "JwtProof2020",
    //     "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IlJvY2sifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20iLCJuYmYiOjE2NjY5NTgwNjIsImlzcyI6ImRpZDpldGhyOmdvZXJsaToweDAzNTBlZWVlYTE0MTBjNWIxNTJmMWE4OGUwZmZlOGJiOGEwYmMzZGY4NjhiNzQwZWIyMzUyYjFkYmY5M2I1OWMxNiJ9.EPeuQBpkK13V9wu66SLg7u8ebY2OS8b2Biah2Vw-RI-Atui2rtujQkVc2t9m1Eqm4XQFECfysgQBdWwnSDvIjw"
    //   }
    // }
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)