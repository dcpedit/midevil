<p align="center">
  <img width="300" src="https://github.com/dcpedit/midevil/assets/800930/4bfd5823-df2a-4c18-b056-a8f137908670" />
</p>

# MidEvil Keyboard

In the custom mechanical keyboard world, it's extrely hard to find a keyboard with a numberpad, because apparantly, numberpads are evil.  OK, I may have made that last bit up, but if it were actually true, then this keyboard places that evilness smack dab in the middle.

The MidEvil layout is a spin-off of [NoPunIn10Did's Jabberwocky keyboard](https://nopunin10did.com/jabberwocky/).  I personally love this layout because it's split, angled, ortholinear, ISO-friendly, and base-kit-friendly.  For MidEvil, I removed the F row, added a numberpad in the middle, and a large 4" 320x480 display on the left to balance the board out.

[Keyboard Layout Editor (KLE) link](http://www.keyboard-layout-editor.com/#/gists/5e6926203118d3330f9e0acac1204c25)

[Video of working LCD display](https://youtube.com/shorts/0m6KOO1_2bI)


<img width="600" src="https://github.com/dcpedit/midevil/assets/800930/4c9ed22e-2058-478e-86d4-d0328ce30bf2" />
<img width="600" src="https://github.com/dcpedit/midevil/assets/800930/d27a6905-97bb-446e-9c1f-f2a4682264af" />


## Build Notes

Below is a list of components I used for my build.

| Part                        | Count | Notes |
|-----------------------------|-------|-------|
| RP2040-Plus/Pi Pico         | 1     | [Link](https://www.waveshare.com/rp2040-plus.htm) (Plus supports USB-C)
| BAV70 diodes                | 48    |
| ILI9488 Display panel       | 1     | [Link](https://a.aliexpress.com/_mNlXxx4)
| Stabalizers                 | 3-8   |
| Hot swap MX sockets         | 89-95 |
| MX switches                 | 89-95 |

The RP2040 develoment board can be soldered directly to the bottom of the PCB. But for this particular build, I used Mill Max sockets instead to place it on the top with the components facing down (towards the PCB).  This is because I wanted to keep the bottom thin, and I had enough room under the LCD display.

For the case, I had to split it in half because my lasercutter was too small to cut the full length of the keyboard in one piece.  I would recommend avoiding this if possible since it's extremely difficult to line up the acrylic layers.  Because of this split design, I opted to use Weld-On (acrylic cement) to hold everything together instead of screws+stands-offs for added rigidity.  I would also recommend avoiding this since arcylic cement can be messy and difficult to work with.
