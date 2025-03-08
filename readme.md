# Authentication Table Web Generator

A simple tool designed to generate authentication tables for IFF (Identification Friend or Foe), specifically for use on untrusted communication channels. This web-based generator helps in creating secure and reliable authentication tables, ensuring safe information
exchange and verification in environments with potential security risks. Ideal for use in military, emergency comms, or any system where IFF is essential for distinguishing between friendly and non-friendly entities.

## Usage

### Establishing the Connection:

**One team member initiates the authentication process by asking:**

"Authenticate BY" [bravo yankee]

### Response from the Other Party:

**The second team member acknowledges the request and responds with:**

"BY 0" [bravo yankee]

(This confirms the initial request and is followed by a brief period of silence.)

### Next Authentication Step:

**After the silence, the initiating team member says:**

"Authenticate JX" [juliet xray]

### Final Confirmation:

**The responding team member then replies with:**

"JX  W " [juliet xray] [whiskey]

### Authentication Success:

**If all responses are correct, the initiating team member confirms the successful authentication by saying:**

"Authentication successful"

<hr>

>Authentication table used for this example:
>```
>    A  B  C  D  E  F  G  H  I  J  K  L  M 
>N  X  P  M  7  V  Z  J  Y  5  1  5  7  1  
>O  X  7  U  A  W  G  6  3  D  7  B  6  J  
>P  I  2  X  E  F  F  T  E  W  8  9  6  4  
>Q  P  R  W  U  8  D  O  5  X  9  9  7  7  
>R  P  F  U  B  B  X  E  E  3  R  2  B  P  
>S  Q  1  V  K  7  O  Q  S  L  6  3  0  G  
>T  4  R  4  L  J  0  U  H  O  9  X  U  P  
>U  X  Z  I  V  J  U  F  4  4  M  D  E  V  
>V  1  J  S  W  S  B  M  K  1  K  R  C  U  
>W  F  A  A  C  6  X  H  K  K  X  D  G  N  
>X  H  V  9  K  E  Z  Z  R  6  W  H  P  Y  
>Y  O  0  D  T  G  O  I  C  7  0  H  7  K  
>Z  M  7  I  L  D  H  H  0  6  N  A  A  Z  
>```
