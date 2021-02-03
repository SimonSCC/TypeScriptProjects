Beskrivelse af opgaven:

Læringsaktiviteten indebære at du arbejde med TS klasser, at du benytter mønsteret 'abstract factory', og at du arbejder med Git og Github.

I klassisk JavaScript og før ECMA2015 benyttede man funktioner og prototype-baseret arv. Dette har ikke været en særlig god abstraktion for udviklere, som ønsker at arbejde ud fra det objektorienteret paradigme. ECMA2015 introduceret en ren form for objektorienteret programmering. TypeScript tillader transpilering af TS objektorienteret kode til javascript før ECMA2015, således legacy-systemer kan se læses applikationen uden konflikt. Når vi transpilere TS kode, kan vi målrette (target) en tidligere version af EcmaScript, således vores OO kode bliver transpileret til funktioner og prototypebaseret kode. 

I denne øvelse skal du implementere User Story

Som bruger skal jeg kunne tegne en cirkel, firkant eller en trekant på et HTML Canvas, således disse vises i min browser.

Definition og done

TS koden er implementeret i overensstemmelse med Abstract Pattern
Der er udarbejdet en designmodel med UML klassediagram
TS kode og designmodel er skubbet til Github
Brugergrænsefladen kan være tre knapper, henholdsvis "Tegn firkant", "Tegn cirkel", og "Tegn trekant", eller en HTML Select element der indeholder selvsamme valgmuligheder. Når man vælger sin figur tegnes firguren på et HTML Canvas element.

Er du nysgerrig på muligheden for at målrette til tidligere EcmaScript version, kan du åbne tsconfig filen og ændre 'target' til es5. Transpiler og se resultat i .js filen. Du vil se JavaScript kode som er meget anderledes end det TS kode du skrev.